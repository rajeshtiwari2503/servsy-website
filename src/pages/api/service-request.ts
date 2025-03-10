import type { NextApiRequest, NextApiResponse } from 'next';
import { addServiceRequest, getAllServiceRequests, getServiceRequestById, updateServiceRequest } from '@/lib/mockDb';

type RequestData = {
  applianceType: string;
  serviceType: string;
  pinCode: string;
  contactNumber: string;
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
        const request = getServiceRequestById(id);
        if (!request) {
          console.error(`Service request not found with ID: ${id}`);
          return res.status(404).json({ 
            success: false, 
            message: 'Service request not found' 
          });
        }
        console.log(`Retrieved service request with ID: ${id}`);
        return res.status(200).json({
          success: true,
          message: 'Service request retrieved successfully',
          data: request
        });
      }
      
      // Return all service requests
      const requests = getAllServiceRequests();
      console.log(`Retrieved ${requests.length} service requests`);
      return res.status(200).json({
        success: true,
        message: 'Service requests retrieved successfully',
        data: requests
      });
    } catch (error) {
      console.error('Error retrieving service requests:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while retrieving service requests'
      });
    }
  }
  
  // Handle POST requests (for new service requests)
  if (req.method === 'POST') {
    try {
      console.log('Received service request:', req.body);
      const { applianceType, serviceType, pinCode, contactNumber } = req.body as RequestData;

      // Validate request data
      const missingFields = [];
      if (!applianceType) missingFields.push('applianceType');
      if (!serviceType) missingFields.push('serviceType');
      if (!pinCode) missingFields.push('pinCode');
      if (!contactNumber) missingFields.push('contactNumber');
      
      if (missingFields.length > 0) {
        console.error(`Missing required fields in service request: ${missingFields.join(', ')}`);
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }

      // Validate PIN code format (6 digits for Indian PIN codes)
      if (!/^\d{6}$/.test(pinCode)) {
        console.error('Invalid PIN code format:', pinCode);
        return res.status(400).json({ 
          success: false, 
          message: 'Please enter a valid 6-digit PIN code' 
        });
      }

      // Validate contact number format (10 digits for Indian phone numbers)
      if (!/^\d{10}$/.test(contactNumber)) {
        console.error('Invalid contact number format:', contactNumber);
        return res.status(400).json({ 
          success: false, 
          message: 'Please enter a valid 10-digit contact number' 
        });
      }

      // Save the service request to our mock database
      const newRequest = addServiceRequest({
        applianceType,
        serviceType,
        pinCode,
        contactNumber
      });

      console.log('Service request received and saved:', newRequest);

      // Return success response
      return res.status(200).json({
        success: true,
        message: 'Service request submitted successfully',
        data: {
          requestId: newRequest.id,
          expectedResponse: '24 hours',
          status: newRequest.status,
          timestamp: newRequest.timestamp
        }
      });
    } catch (error) {
      console.error('Error processing service request:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request'
      });
    }
  }
  
  // Handle PATCH requests (for updating service requests)
  if (req.method === 'PATCH') {
    try {
      console.log('Received service request update:', req.body);
      const { id, ...updates } = req.body;
      
      if (!id) {
        console.error('Missing request ID in update request');
        return res.status(400).json({ 
          success: false, 
          message: 'Request ID is required' 
        });
      }
      
      const updatedRequest = updateServiceRequest(id, updates);
      
      if (!updatedRequest) {
        console.error(`Service request not found with ID: ${id}`);
        return res.status(404).json({ 
          success: false, 
          message: 'Service request not found' 
        });
      }
      
      console.log(`Updated service request with ID: ${id}`, updatedRequest);
      return res.status(200).json({
        success: true,
        message: 'Service request updated successfully',
        data: updatedRequest
      });
    } catch (error) {
      console.error('Error updating service request:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while updating the service request'
      });
    }
  }
  
  // Handle other HTTP methods
  console.error(`Method not allowed: ${req.method}`);
  return res.status(405).json({ success: false, message: 'Method not allowed' });
}