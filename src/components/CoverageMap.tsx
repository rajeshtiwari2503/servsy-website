import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { validatePinCode } from '@/lib/validation';
import { useToast } from '@/components/ui/use-toast';

const CoverageMap: React.FC = () => {
  const { toast } = useToast();
  const [pinCode, setPinCode] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<{
    available: boolean;
    location?: string;
    serviceCenter?: string;
    expectedResponse?: string;
  } | null>(null);

  const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinCode(e.target.value);
  };

  const checkPinCodeAvailability = async () => {
    // Validate PIN code format
    if (!validatePinCode(pinCode)) {
      toast({
        title: "Invalid PIN Code",
        description: "Please enter a valid 6-digit PIN code",
        variant: "destructive"
      });
      return;
    }

    setIsChecking(true);
    setCheckResult(null);

    try {
      const response = await fetch('/api/check-pincode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pinCode }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setCheckResult({
          available: data.available,
          location: data.location,
          serviceCenter: data.serviceCenter,
          expectedResponse: data.expectedResponse
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to check PIN code availability",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error checking PIN code:', error);
      toast({
        title: "Error",
        description: "An error occurred while checking service availability",
        variant: "destructive"
      });
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h4 className="font-medium mb-2">Find Service Availability in Your Area</h4>
        <div className="flex gap-2">
          <Input 
            placeholder="Enter PIN Code" 
            value={pinCode} 
            onChange={handlePinCodeChange}
            maxLength={6}
          />
          <Button 
            onClick={checkPinCodeAvailability}
            disabled={isChecking}
          >
            {isChecking ? 'Checking...' : 'Check'}
          </Button>
        </div>
      </div>

      {checkResult && (
        <div className="mt-4">
          {checkResult.available ? (
            <Alert className="bg-green-50 border-green-200">
              <AlertDescription>
                <div className="py-2">
                  <p className="font-medium text-green-800 mb-2">Service is available in your area!</p>
                  <p className="text-sm text-muted-foreground">Location: {checkResult.location}</p>
                  <p className="text-sm text-muted-foreground">Service Center: {checkResult.serviceCenter}</p>
                  <p className="text-sm text-muted-foreground">Expected Response Time: {checkResult.expectedResponse}</p>
                </div>
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="bg-amber-50 border-amber-200">
              <AlertDescription>
                <p className="font-medium text-amber-800">Sorry, service is not yet available in your area.</p>
                <p className="text-sm text-muted-foreground mt-1">We're expanding our network rapidly. Please check back soon or contact us for alternative options.</p>
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}

      <div className="mt-6">
        <Card className="bg-card border rounded-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-[16/9] relative">
              <img 
                src="https://assets.co.dev/e2b2a14c-ddf7-4891-aafd-dee2a9ee8e2e/dalle-2025-03-06-23.13.45---a-simple-and-sober-digital-map-of-india-with-soft-color-tones-showing-service-network-coverage-across-19000-pin-codes.-minimalist-design-with-subtl-f9f2e36.webp" 
                alt="Servsy Service Coverage Map of India" 
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoverageMap;