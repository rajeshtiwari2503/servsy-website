import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { validateEmail } from '@/lib/validation';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';

const NewsletterSubscription: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
    setIsSuccess(false);
  };

  const handleSubscribe = async () => {
    // Validate email
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      console.log('Subscribing email:', email);
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log('Newsletter subscription response:', data);

      if (response.ok && data.success) {
        setIsSuccess(true);
        toast({
          title: "Subscription Successful",
          description: data.message || "Thank you for subscribing to our newsletter!",
        });
        setEmail('');
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        console.error('Newsletter subscription failed:', data.message);
        setError(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-2">
      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Mail className="h-4 w-4" />
          </div>
          <p className="font-medium">Stay Updated</p>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Subscribe to our newsletter for the latest service updates and offers
        </p>
        
        <div className="space-y-3">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Mail className="h-4 w-4" />
            </div>
            <Input 
              placeholder="Your Email Address" 
              value={email}
              onChange={handleEmailChange}
              className={`pl-10 rounded-lg border-input ${
                error 
                  ? 'border-red-500 focus:ring-red-500' 
                  : isSuccess 
                    ? 'border-green-500 focus:ring-green-500' 
                    : 'focus:ring-primary/20'
              }`}
            />
            {isSuccess && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                <CheckCircle2 className="h-4 w-4" />
              </div>
            )}
          </div>
          
          {error && (
            <p className="text-sm text-red-500 pl-1">{error}</p>
          )}
          
          <Button 
            className="w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group bg-black text-white hover:bg-black/90"
            onClick={handleSubscribe}
            disabled={isSubmitting || isSuccess}
          >
            <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  <span>Subscribe</span>
                </>
              )}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;