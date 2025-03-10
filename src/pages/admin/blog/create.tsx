import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function CreateBlogPost() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    readTime: '5 min read',
    author: 'Servsy Team',
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.excerpt || !formData.content || !formData.category) {
      toast({
        title: 'Missing required fields',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/admin/blog/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create blog post');
      }
      
      const data = await response.json();
      
      toast({
        title: 'Blog post created',
        description: 'Your blog post has been created successfully.'
      });
      
      // Redirect to the blog post
      setTimeout(() => {
        router.push(`/blog/${data.id}`);
      }, 1500);
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast({
        title: 'Error',
        description: 'Failed to create blog post. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Create Blog Post | Servsy Admin</title>
      </Head>
      <AdminLayout title="Create New Blog Post">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Create New Blog Post</h1>
            <Button variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
          
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Blog Post Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter blog post title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    placeholder="Enter a brief summary of the blog post"
                    required
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    This will be displayed in blog previews and search results.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Content <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Enter the full content of the blog post (HTML supported)"
                    required
                    rows={15}
                  />
                  <p className="text-xs text-muted-foreground">
                    You can use HTML tags for formatting. For example, &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, etc.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => handleSelectChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Maintenance Tips">Maintenance Tips</SelectItem>
                        <SelectItem value="Buying Guide">Buying Guide</SelectItem>
                        <SelectItem value="Troubleshooting">Troubleshooting</SelectItem>
                        <SelectItem value="How-To">How-To</SelectItem>
                        <SelectItem value="News">News</SelectItem>
                        <SelectItem value="Industry Insights">Industry Insights</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="readTime">Read Time</Label>
                    <Select
                      value={formData.readTime}
                      onValueChange={(value) => handleSelectChange('readTime', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select read time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3 min read">3 min read</SelectItem>
                        <SelectItem value="5 min read">5 min read</SelectItem>
                        <SelectItem value="7 min read">7 min read</SelectItem>
                        <SelectItem value="10 min read">10 min read</SelectItem>
                        <SelectItem value="15 min read">15 min read</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      placeholder="Enter author name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image">Featured Image URL</Label>
                    <Input
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Enter image URL"
                    />
                    <p className="text-xs text-muted-foreground">
                      You can use AI-generated images from our CDN. Example: https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/dalle-2025-03-06-22.54.02---a-modern-and-clean-illustration-of-a-city-map-with-location-pins-representing-service-availability-in-different-areas.-the-design-is-sleek-and-profes-29cb886.webp
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating...' : 'Create Blog Post'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
        <Toaster />
      </AdminLayout>
    </>
  );
}