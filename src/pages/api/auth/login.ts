import type { NextApiRequest, NextApiResponse } from 'next';
import { ADMIN_CREDENTIALS } from '@/lib/mockDb';

type LoginRequest = {
  username: string;
  password: string;
};

type ResponseData = {
  success: boolean;
  message: string;
  token?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body as LoginRequest;

    // Validate request data
    if (!username || !password) {
      console.error('Missing credentials in login request');
      return res.status(400).json({ 
        success: false, 
        message: 'Username and password are required' 
      });
    }

    // Check credentials against our mock admin user
    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      console.error('Invalid login attempt for username:', username);
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid username or password' 
      });
    }

    // In a real application, you would use a proper JWT library with a secure secret
    // This is a simplified example for demonstration purposes only
    const token = Buffer.from(JSON.stringify({
      username,
      role: 'admin',
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours expiration
    })).toString('base64');

    console.log('Admin login successful:', username);

    // Return success response with token
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token
    });
  } catch (error) {
    console.error('Error processing login request:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request'
    });
  }
}