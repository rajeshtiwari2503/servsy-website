import type { NextApiRequest, NextApiResponse } from 'next';

type SubscriptionRequest = {
  email: string;
};

type ResponseData = {
  success: boolean;
  message: string;
  data?: {
    email: string;
    timestamp: string;
  };
};

// Mock database for newsletter subscriptions
// In a real application, this would be stored in a proper database
const subscriptions: Array<{ email: string; timestamp: string }> = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    console.error(`Method not allowed: ${req.method}`);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    console.log('Received newsletter subscription request:', req.body);
    const { email } = req.body as SubscriptionRequest;

    // Validate email
    if (!email) {
      console.error('Missing email in subscription request');
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Check if email is already subscribed
    const existingSubscription = subscriptions.find(sub => sub.email.toLowerCase() === email.toLowerCase());
    if (existingSubscription) {
      console.log('Email already subscribed:', email);
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to our newsletter!',
        data: existingSubscription
      });
    }

    // Add new subscription
    const newSubscription = {
      email,
      timestamp: new Date().toISOString()
    };
    subscriptions.push(newSubscription);

    console.log('New newsletter subscription added:', newSubscription);

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you for subscribing to our newsletter!',
      data: newSubscription
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your subscription'
    });
  }
}