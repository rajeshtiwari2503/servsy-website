import type { NextApiRequest, NextApiResponse } from 'next';
import { 
  getAllServiceCenterCoverage, 
  getServiceCenterCoverageById, 
  addServiceCenterCoverage, 
  updateServiceCenterCoverage, 
  deleteServiceCenterCoverage,
  ServiceCenterCoverage
} from '@/lib/mockDb';
import { validatePinCode } from '@/lib/validation';

type ResponseData = {
  success: boolean;
  message: string;
  data?: ServiceCenterCoverage | ServiceCenterCoverage[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Simple admin check - in a real app, this would use proper authentication
  // This is just for demonstration purposes
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.error('Unauthorized access attempt to coverage API');
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    // GET - Retrieve all coverage areas or a specific one by ID
    if (req.method === 'GET') {
      const { id } = req.query;
      
      if (id && typeof id === 'string') {
        const coverage = getServiceCenterCoverageById(id);
        if (!coverage) {
          return res.status(404).json({ success: false, message: 'Coverage area not found' });
        }
        return res.status(200).json({ success: true, message: 'Coverage area retrieved', data: coverage });
      } else {
        const allCoverage = getAllServiceCenterCoverage();
        return res.status(200).json({ success: true, message: 'All coverage areas retrieved', data: allCoverage });
      }
    }
    
    // POST - Add a new coverage area
    else if (req.method === 'POST') {
      const { pinCodes, location, serviceCenter, expectedResponseTime } = req.body;
      
      // Validate required fields
      if (!pinCodes || !location || !serviceCenter || !expectedResponseTime) {
        console.error('Missing required fields in coverage area creation:', req.body);
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
      
      // Process PIN codes - convert string to array if needed
      let pinCodesArray: string[] = [];
      
      if (typeof pinCodes === 'string') {
        // Split by commas, spaces, or newlines and filter out empty strings
        pinCodesArray = pinCodes.split(/[\s,]+/).filter(Boolean);
      } else if (Array.isArray(pinCodes)) {
        pinCodesArray = pinCodes;
      }
      
      if (pinCodesArray.length === 0) {
        console.error('No valid PIN codes provided');
        return res.status(400).json({ success: false, message: 'At least one PIN code is required' });
      }
      
      // Validate PIN codes format
      const invalidPinCodes = pinCodesArray.filter(pinCode => !validatePinCode(pinCode));
      if (invalidPinCodes.length > 0) {
        console.error('Invalid PIN code format:', invalidPinCodes);
        return res.status(400).json({ 
          success: false, 
          message: `Invalid PIN code(s): ${invalidPinCodes.join(', ')}. All PIN codes must be 6 digits.` 
        });
      }
      
      const newCoverage = addServiceCenterCoverage({
        pinCodes: pinCodesArray,
        location,
        serviceCenter,
        expectedResponseTime
      });
      
      console.log('New coverage area added:', newCoverage);
      return res.status(201).json({ success: true, message: 'Coverage area added successfully', data: newCoverage });
    }
    
    // PUT - Update an existing coverage area
    else if (req.method === 'PUT') {
      const { id } = req.query;
      
      if (!id || typeof id !== 'string') {
        console.error('Missing ID for coverage area update');
        return res.status(400).json({ success: false, message: 'Coverage area ID is required' });
      }
      
      const { pinCodes, location, serviceCenter, expectedResponseTime } = req.body;
      const updates: Partial<ServiceCenterCoverage> = {};
      
      if (pinCodes) {
        // Process PIN codes - convert string to array if needed
        let pinCodesArray: string[] = [];
        
        if (typeof pinCodes === 'string') {
          // Split by commas, spaces, or newlines and filter out empty strings
          pinCodesArray = pinCodes.split(/[\s,]+/).filter(Boolean);
        } else if (Array.isArray(pinCodes)) {
          pinCodesArray = pinCodes;
        }
        
        if (pinCodesArray.length === 0) {
          console.error('No valid PIN codes provided in update');
          return res.status(400).json({ success: false, message: 'At least one PIN code is required' });
        }
        
        // Validate PIN codes format
        const invalidPinCodes = pinCodesArray.filter(pinCode => !validatePinCode(pinCode));
        if (invalidPinCodes.length > 0) {
          console.error('Invalid PIN code format in update:', invalidPinCodes);
          return res.status(400).json({ 
            success: false, 
            message: `Invalid PIN code(s): ${invalidPinCodes.join(', ')}. All PIN codes must be 6 digits.` 
          });
        }
        
        updates.pinCodes = pinCodesArray;
      }
      
      if (location) updates.location = location;
      if (serviceCenter) updates.serviceCenter = serviceCenter;
      if (expectedResponseTime) updates.expectedResponseTime = expectedResponseTime;
      
      const updatedCoverage = updateServiceCenterCoverage(id, updates);
      
      if (!updatedCoverage) {
        console.error('Coverage area not found for update:', id);
        return res.status(404).json({ success: false, message: 'Coverage area not found' });
      }
      
      console.log('Coverage area updated:', updatedCoverage);
      return res.status(200).json({ success: true, message: 'Coverage area updated successfully', data: updatedCoverage });
    }
    
    // DELETE - Remove a coverage area
    else if (req.method === 'DELETE') {
      const { id } = req.query;
      
      if (!id || typeof id !== 'string') {
        console.error('Missing ID for coverage area deletion');
        return res.status(400).json({ success: false, message: 'Coverage area ID is required' });
      }
      
      const deleted = deleteServiceCenterCoverage(id);
      
      if (!deleted) {
        console.error('Coverage area not found for deletion:', id);
        return res.status(404).json({ success: false, message: 'Coverage area not found' });
      }
      
      console.log('Coverage area deleted:', id);
      return res.status(200).json({ success: true, message: 'Coverage area deleted successfully' });
    }
    
    // Method not allowed
    else {
      console.error('Method not allowed:', req.method);
      return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in coverage API:', error);
    return res.status(500).json({ success: false, message: 'An error occurred while processing your request' });
  }
}