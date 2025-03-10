import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  status: string;
  message: string;
  timestamp: string;
  version: string;
  environment: string;
};

/**
 * API health check endpoint
 * This endpoint can be used to verify that the API is running correctly
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('Health check request received');
  
  // Get the environment from env variables or default to 'development'
  const environment = process.env.NEXT_PUBLIC_CO_DEV_ENV || 'development';
  
  res.status(200).json({
    status: 'ok',
    message: 'Servsy API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment
  });
}