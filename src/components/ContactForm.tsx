import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from '@/hooks/useForm';
import { validateContactForm } from '@/lib/validation';
import { User, Mail, Phone, MessageSquare, Send, Check, Loader2 } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validate: (values) => {
      return validateContactForm(values);
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setIsSuccess(true);
          toast({
            title: "Message Sent",
            description: data.message || "We'll get back to you shortly.",
          });
          
          // Reset success state after 3 seconds
          setTimeout(() => {
            setIsSuccess(false);
            resetForm();
          }, 3000);
        } else {
          toast({
            title: "Error",
            description: data.message || "Failed to send message. Please try again.",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error('Error sending contact form:', error);
        toast({
          title: "Error",
          description: "An error occurred while sending your message. Please try again later.",
          variant: "destructive"
        });
      }
    }
  });

  const getFieldError = (field: keyof ContactFormData) => {
    return touched[field] && errors[field] ? errors[field] : '';
  };

  if (isSuccess) {
    return (
      <Card className="animate-fade-in hover-lift border-primary/20">
        <CardContent className="pt-10 pb-10 flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary animate-pulse-subtle">
            <Check className="h-10 w-10" />
          </div>
          <CardTitle className="text-center mb-3 text-2xl">Message Sent!</CardTitle>
          <CardDescription className="text-center max-w-xs text-base">
            Thank you for reaching out. Our team will get back to you shortly.
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover-lift border-primary/10">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <User className="h-4 w-4" />
            </div>
            <Input 
              placeholder="Your Name" 
              value={values.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              className={`pl-10 rounded-lg border-input ${
                getFieldError('name') 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-primary/20'
              }`}
            />
          </div>
          {getFieldError('name') && (
            <p className="text-sm text-red-500 pl-1">{getFieldError('name')}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Mail className="h-4 w-4" />
            </div>
            <Input 
              placeholder="Email Address" 
              type="email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`pl-10 rounded-lg border-input ${
                getFieldError('email') 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-primary/20'
              }`}
            />
          </div>
          {getFieldError('email') && (
            <p className="text-sm text-red-500 pl-1">{getFieldError('email')}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Phone className="h-4 w-4" />
            </div>
            <Input 
              placeholder="Phone Number" 
              value={values.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              className={`pl-10 rounded-lg border-input ${
                getFieldError('phone') 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-primary/20'
              }`}
              maxLength={10}
            />
          </div>
          {getFieldError('phone') && (
            <p className="text-sm text-red-500 pl-1">{getFieldError('phone')}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-3 text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
            </div>
            <Textarea 
              placeholder="Your Message" 
              className={`min-h-[120px] pl-10 rounded-lg border-input ${
                getFieldError('message') 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-primary/20'
              }`}
              value={values.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
            />
          </div>
          {getFieldError('message') && (
            <p className="text-sm text-red-500 pl-1">{getFieldError('message')}</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group bg-black text-white hover:bg-black/90"
          onClick={() => handleSubmit()}
          disabled={isSubmitting}
        >
          <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </>
            )}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;