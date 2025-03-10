import type { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '@/lib/authMiddleware';
import { getAllServiceRequests, getAllContactSubmissions } from '@/lib/mockDb';

type ResponseData = {
  success: boolean;
  message: string;
  data?: any;
};

async function handler(
  req: NextApiRequest & { user?: any },
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Get all service requests and contact submissions
    const serviceRequests = getAllServiceRequests();
    const contactSubmissions = getAllContactSubmissions();
    
    // Calculate some statistics for the dashboard
    const stats = {
      totalServiceRequests: serviceRequests.length,
      pendingServiceRequests: serviceRequests.filter(req => req.status === 'pending').length,
      inProgressServiceRequests: serviceRequests.filter(req => req.status === 'in-progress').length,
      completedServiceRequests: serviceRequests.filter(req => req.status === 'completed').length,
      totalContactSubmissions: contactSubmissions.length,
      unreadContactSubmissions: contactSubmissions.filter(sub => sub.status === 'unread').length
    };
    
    // Return the dashboard data
    return res.status(200).json({
      success: true,
      message: 'Dashboard data retrieved successfully',
      data: {
        stats,
        recentServiceRequests: serviceRequests.slice(0, 5),
        recentContactSubmissions: contactSubmissions.slice(0, 5)
      }
    });
  } catch (error) {
    console.error('Error retrieving dashboard data:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving dashboard data'
    });
  }
}

export default withAuth(handler);