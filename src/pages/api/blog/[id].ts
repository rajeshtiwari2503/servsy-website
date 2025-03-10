import { NextApiRequest, NextApiResponse } from 'next';

// Import the blog posts from the main blog API
import blogPosts from './index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    // Find the blog post with the matching ID
    const post = (blogPosts as any).find((post: any) => post.id === id);
    
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    
    return res.status(200).json(post);
  } else {
    // Method not allowed
    return res.status(405).json({ message: 'Method not allowed' });
  }
}