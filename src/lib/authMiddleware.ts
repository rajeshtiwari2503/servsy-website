import { NextApiRequest, NextApiResponse } from 'next';

type AuthenticatedHandler = (
  req: NextApiRequest & { user?: any },
  res: NextApiResponse
) => Promise<void> | void;

export function withAuth(handler: AuthenticatedHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Get the authorization header
      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }
      
      // Extract the token
      const token = authHeader.substring(7);
      
      try {
        // Decode the token (in a real app, you would verify the JWT signature)
        const decodedToken = JSON.parse(Buffer.from(token, 'base64').toString());
        
        // Check if token is expired
        if (decodedToken.exp < Math.floor(Date.now() / 1000)) {
          return res.status(401).json({
            success: false,
            message: 'Token expired'
          });
        }
        
        // Add the user to the request object
        (req as any).user = decodedToken;
        
        // Call the original handler
        return handler(req as NextApiRequest & { user: any }, res);
      } catch (error) {
        console.error('Error decoding token:', error);
        return res.status(401).json({
          success: false,
          message: 'Invalid token'
        });
      }
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred during authentication'
      });
    }
  };
}