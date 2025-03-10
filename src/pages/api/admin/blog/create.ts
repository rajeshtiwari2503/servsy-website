import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

// Mock database for blog posts (imported from the main blog API)
import blogPosts from '../../blog/index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get the blog post data from the request body
    const { title, excerpt, content, category, readTime, author, image } = req.body;

    // Validate required fields
    if (!title || !excerpt || !content || !category) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Generate a slug from the title
    const id = title.toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');

    // Create a new blog post
    const newPost = {
      id: id || uuidv4(),
      title,
      excerpt,
      content,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category,
      readTime: readTime || '5 min read',
      author: author || 'Servsy Team',
      image: image || 'https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/default-blog-image.jpg'
    };

    // Add the new post to the blog posts array (in a real app, this would be saved to a database)
    (blogPosts as any).unshift(newPost);

    // Return the new blog post
    return res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating blog post:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}