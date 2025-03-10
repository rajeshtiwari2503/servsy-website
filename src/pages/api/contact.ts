import type { NextApiRequest, NextApiResponse } from 'next';
import { addContactSubmission, getAllContactSubmissions, getContactSubmissionById, updateContactSubmission } from '@/lib/mockDb';

type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ResponseData = {
  success: boolean;
  message: string;
  data?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Handle GET requests (for admin dashboard)
  if (req.method === 'GET') {
    try {
      // Check if a specific ID is requested
      const { id } = req.query;
      
      if (id && typeof id === 'string') {
        const submission = getContactSubmissionById(id);
        if (!submission) {
          console.error(`Contact submission not found with ID: ${id}`);
          return res.status(404).json({ 
            success: false, 
            message: 'Contact submission not found' 
          });
        }
        console.log(`Retrieved contact submission with ID: ${id}`);
        return res.status(200).json({
          success: true,
          message: 'Contact submission retrieved successfully',
          data: submission
        });
      }
      
      // Return all contact submissions
      const submissions = getAllContactSubmissions();
      console.log(`Retrieved ${submissions.length} contact submissions`);
      return res.status(200).json({
        success: true,
        message: 'Contact submissions retrieved successfully',
        data: submissions
      });
    } catch (error) {
      console.error('Error retrieving contact submissions:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while retrieving contact submissions'
      });
    }
  }
  
  // Handle POST requests (for new contact submissions)
  if (req.method === 'POST') {
    try {
      console.log('Received contact form submission:', req.body);
      const { name, email, phone, message } = req.body as ContactRequest;

      // Validate request data
      const missingFields = [];
      if (!name) missingFields.push('name');
      if (!email) missingFields.push('email');
      if (!phone) missingFields.push('phone');
      if (!message) missingFields.push('message');
      
      if (missingFields.length > 0) {
        console.error(`Missing required fields in contact form: ${missingFields.join(', ')}`);
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
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

      // Validate phone number format (10 digits for Indian phone numbers)
      if (!/^\d{10}$/.test(phone)) {
        console.error('Invalid phone number format:', phone);
        return res.status(400).json({ 
          success: false, 
          message: 'Please enter a valid 10-digit phone number' 
        });
      }

      // Save the contact submission to our mock database
      const newSubmission = addContactSubmission({
        name,
        email,
        phone,
        message
      });

      console.log('Contact form submission received and saved:', newSubmission);

      // Return success response
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully. We will get back to you shortly.',
        data: {
          submissionId: newSubmission.id,
          timestamp: newSubmission.timestamp
        }
      });
    } catch (error) {
      console.error('Error processing contact form submission:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request'
      });
    }
  }
  
  // Handle PATCH requests (for updating contact submissions)
  if (req.method === 'PATCH') {
    try {
      console.log('Received contact submission update:', req.body);
      const { id, ...updates } = req.body;
      
      if (!id) {
        console.error('Missing submission ID in update request');
        return res.status(400).json({ 
          success: false, 
          message: 'Submission ID is required' 
        });
      }
      
      const updatedSubmission = updateContactSubmission(id, updates);
      
      if (!updatedSubmission) {
        console.error(`Contact submission not found with ID: ${id}`);
        return res.status(404).json({ 
          success: false, 
          message: 'Contact submission not found' 
        });
      }
      
      console.log(`Updated contact submission with ID: ${id}`, updatedSubmission);
      return res.status(200).json({
        success: true,
        message: 'Contact submission updated successfully',
        data: updatedSubmission
      });
    } catch (error) {
      console.error('Error updating contact submission:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while updating the contact submission'
      });
    }
  }
  
  // Handle other HTTP methods
  console.error(`Method not allowed: ${req.method}`);
  return res.status(405).json({ success: false, message: 'Method not allowed' });
}