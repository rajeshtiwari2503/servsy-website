import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from '@/hooks/useForm';
import { validateServiceRequestForm } from '@/lib/validation';
import { Check, Loader2, Phone, MapPin, Wrench, Settings } from 'lucide-react';

type ServiceRequestFormData = {
  applianceType: string;
  serviceType: string;
  pinCode: string;
  contactNumber: string;
};

interface ServiceRequestFormProps {
  className?: string;
}

const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({ className }) => {
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
  } = useForm<ServiceRequestFormData>({
    initialValues: {
      applianceType: '',
      serviceType: '',
      pinCode: '',
      contactNumber: ''
    },
    validate: (values) => {
      return validateServiceRequestForm(values);
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://crm-backend-weld-pi.vercel.app/addServiceRequest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      
        // Check if response is valid JSON
        const data = await response.json();
        
        console.log("API Response:", data); // Debugging log
      
        // Handle success based on `status` field from API response
        if (data.status) {
          setIsSuccess(true);
          toast({
            title: "Service Request Submitted",
            description: data.msg || "Request has been submitted successfully.",
          });
      
          setTimeout(() => {
            setIsSuccess(false);
            resetForm();
          }, 3000);
        } else {
          throw new Error(data.msg || "Failed to submit service request.");
        }
      } catch (error) {
        console.error("Catch Error:", error);
        toast({
          title: "Error",
          description: error.msg || "Something went wrong!",
          variant: "destructive"
        });
      }
      
    }
  });

  const getFieldError = (field: keyof ServiceRequestFormData) => {
    return touched[field] && errors[field] ? errors[field] : '';
  };

  if (isSuccess) {
    return (
      <Card className={`${className} animate-fade-in`}>
        <CardContent className="pt-6 pb-6 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary animate-pulse-subtle">
            <Check className="h-8 w-8" />
          </div>
          <CardTitle className="text-center mb-2">Request Submitted!</CardTitle>
          <CardDescription className="text-center max-w-xs">
            We'll contact you shortly to confirm your appointment. Thank you for choosing Servsy!
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${className} hover-lift`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Settings className="h-4 w-4" />
          </div>
          <CardTitle>Quick Service Request</CardTitle>
        </div>
        <CardDescription>Fill in the details to book a service</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Wrench className="h-4 w-4" />
            </div>
            <Select 
              value={values.applianceType} 
              onValueChange={(value) => handleChange('applianceType', value)}
              onOpenChange={() => handleBlur('applianceType')}
            >
              <SelectTrigger 
                className={`pl-10 rounded-lg border-input ${
                  getFieldError('applianceType') 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'focus:ring-primary/20'
                }`}
              >
                <SelectValue placeholder="Select Appliance Type" />
              </SelectTrigger>
              <SelectContent>
                {/* Home Appliances */}
                <SelectItem value="air-cooler">Air Cooler</SelectItem>
                <SelectItem value="led-tv">LED TV</SelectItem>
                <SelectItem value="washing-machine">Washing Machine</SelectItem>
                <SelectItem value="refrigerator">Refrigerator</SelectItem>
                <SelectItem value="microwave">Microwave Oven</SelectItem>
                <SelectItem value="geyser">Geyser & Water Heater</SelectItem>
                <SelectItem value="gas-stove">Gas Stove & Chimney</SelectItem>
                <SelectItem value="air-conditioner">Air Conditioner</SelectItem>
                <SelectItem value="water-purifier">Water Purifier</SelectItem>
                
                {/* Electronics */}
                <SelectItem value="laptop">Laptop</SelectItem>
                <SelectItem value="desktop">Desktop PC</SelectItem>
                <SelectItem value="printer">Printer</SelectItem>
                <SelectItem value="speaker">Speaker System</SelectItem>
                <SelectItem value="home-theater">Home Theater</SelectItem>
                
                {/* Gadgets */}
                <SelectItem value="smartphone">Smartphone</SelectItem>
                <SelectItem value="tablet">Tablet</SelectItem>
                <SelectItem value="smartwatch">Smartwatch</SelectItem>
                
                {/* IT Products */}
                <SelectItem value="router">Router/Networking</SelectItem>
                <SelectItem value="ups">UPS/Inverter</SelectItem>
                <SelectItem value="cctv">CCTV/Security System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {getFieldError('applianceType') && (
            <p className="text-sm text-red-500 pl-1">{getFieldError('applianceType')}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Settings className="h-4 w-4" />
            </div>
            <Select 
              value={values.serviceType} 
              onValueChange={(value) => handleChange('serviceType', value)}
              onOpenChange={() => handleBlur('serviceType')}
            >
              <SelectTrigger 
                className={`pl-10 rounded-lg border-input ${
                  getFieldError('serviceType') 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'focus:ring-primary/20'
                }`}
              >
                <SelectValue placeholder="Select Service Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="repair">Repair</SelectItem>
                <SelectItem value="installation">Installation</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="amc">Annual Maintenance Contract</SelectItem>
                <SelectItem value="warranty">Warranty Service</SelectItem>
                <SelectItem value="diagnostics">Diagnostics & Troubleshooting</SelectItem>
                <SelectItem value="parts-replacement">Parts Replacement</SelectItem>
                <SelectItem value="software-update">Software Update/Installation</SelectItem>
                <SelectItem value="data-recovery">Data Recovery</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {getFieldError('serviceType') && (
            <p className="text-sm text-red-500 pl-1">{getFieldError('serviceType')}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
            </div>
            <Input 
              placeholder="PIN Code" 
              value={values.pinCode} 
              onChange={(e) => handleChange('pinCode', e.target.value)}
              onBlur={() => handleBlur('pinCode')}
              className={`pl-10 rounded-lg border-input ${
                getFieldError('pinCode') 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-primary/20'
              }`}
              maxLength={6}
            />
          </div>
          {getFieldError('pinCode') && (
            <p className="text-sm text-red-500 pl-1">{getFieldError('pinCode')}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Phone className="h-4 w-4" />
            </div>
            <Input 
              placeholder="Contact Number" 
              value={values.contactNumber} 
              onChange={(e) => handleChange('contactNumber', e.target.value)}
              onBlur={() => handleBlur('contactNumber')}
              className={`pl-10 rounded-lg border-input ${
                getFieldError('contactNumber') 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-primary/20'
              }`}
              maxLength={10}
            />
          </div>
          {getFieldError('contactNumber') && (
            <p className="text-sm text-red-500 pl-1">{getFieldError('contactNumber')}</p>
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
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Submit Request</span>
              </>
            )}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceRequestForm;