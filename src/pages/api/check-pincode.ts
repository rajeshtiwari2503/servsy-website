import type { NextApiRequest, NextApiResponse } from 'next';
import { getServiceCenterCoverageByPinCode, getAllServiceCenterCoverage } from '@/lib/mockDb';

type PinCodeRequest = {
  pinCode: string;
};

type ResponseData = {
  success: boolean;
  message: string;
  data?: {
    available?: boolean;
    location?: string;
    serviceCenter?: string;
    expectedResponse?: string;
    pinCodes?: string[];
    nearestServiceCenters?: Array<{
      location: string;
      serviceCenter: string;
      distance: string;
    }>;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    console.error('Method not allowed:', req.method);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    console.log('Received PIN code check request:', req.body);
    const { pinCode } = req.body as PinCodeRequest;

    // Validate PIN code
    if (!pinCode) {
      console.error('Missing PIN code in request');
      return res.status(400).json({ 
        success: false, 
        message: 'PIN code is required' 
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

    // Check if the pin code is in our coverage database
    const coverage = getServiceCenterCoverageByPinCode(pinCode);
    
    if (coverage) {
      console.log(`Service available for PIN code ${pinCode}:`, coverage);
      return res.status(200).json({
        success: true,
        message: 'Service is available in your area!',
        data: {
          available: true,
          location: coverage.location,
          serviceCenter: coverage.serviceCenter,
          expectedResponse: coverage.expectedResponseTime
        }
      });
    } else {
      // If service is not available at the exact PIN code, find nearest service centers
      // This is a simplified implementation - in a real app, you would calculate actual distances
      const allCoverage = getAllServiceCenterCoverage();
      
      // Mock implementation of finding "nearby" service centers
      // In a real app, you would use geolocation data to calculate actual distances
      const nearestServiceCenters = allCoverage
        .slice(0, 3) // Just take the first 3 for this mock implementation
        .map(center => ({
          location: center.location,
          serviceCenter: center.serviceCenter,
          distance: `${Math.floor(Math.random() * 50) + 10} km` // Random distance between 10-60km
        }));
      
      console.log(`Service not available for PIN code ${pinCode}, suggesting alternatives:`, nearestServiceCenters);
      
      return res.status(200).json({
        success: true,
        message: 'Sorry, service is not yet available in your area.',
        data: {
          available: false,
          nearestServiceCenters
        }
      });
    }
  } catch (error) {
    console.error('Error checking PIN code availability:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while checking service availability'
    });
  }
}