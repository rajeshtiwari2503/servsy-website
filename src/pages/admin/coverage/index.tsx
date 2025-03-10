import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { validatePinCode } from '@/lib/validation';
import { Badge } from '@/components/ui/badge';

type ServiceCenterCoverage = {
  id: string;
  pinCodes: string[];
  location: string;
  serviceCenter: string;
  expectedResponseTime: string;
  timestamp: string;
};

interface CurrentCoverage {
  id?: string;
  pinCodes?: any; // Using any to bypass TypeScript errors
  location?: string;
  serviceCenter?: string;
  expectedResponseTime?: string;
  timestamp?: string;
}

const CoverageManagement = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [coverageAreas, setCoverageAreas] = useState<ServiceCenterCoverage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCoverage, setCurrentCoverage] = useState<Partial<ServiceCenterCoverage>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Fetch all coverage areas
  const fetchCoverageAreas = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/coverage', {
        headers: {
          'Authorization': `Bearer token` // In a real app, use a proper token
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch coverage areas');
      }
      
      const data = await response.json();
      if (data.success && data.data) {
        setCoverageAreas(data.data as ServiceCenterCoverage[]);
      }
    } catch (error) {
      console.error('Error fetching coverage areas:', error);
      toast({
        title: 'Error',
        description: 'Failed to load coverage areas',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoverageAreas();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentCoverage(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!currentCoverage.pinCodes) {
      errors.pinCodes = 'At least one PIN code is required';
    } else {
      // Split the PIN codes by commas, newlines, or spaces and validate each one
      let pinCodesArray: string[] = [];
      
      // Force type assertion to avoid TypeScript errors
      const pinCodesValue = currentCoverage.pinCodes as string | string[];
      
      if (typeof pinCodesValue === 'string') {
        // If it's a string, split it
        pinCodesArray = pinCodesValue.split(/[\s,]+/).filter(Boolean);
      } else if (Array.isArray(pinCodesValue)) {
        // If it's already an array, use it directly
        pinCodesArray = pinCodesValue;
      }
      
      if (pinCodesArray.length === 0) {
        errors.pinCodes = 'At least one PIN code is required';
      } else {
        const invalidPinCodes = pinCodesArray.filter(pinCode => !validatePinCode(pinCode));
        if (invalidPinCodes.length > 0) {
          errors.pinCodes = `Invalid PIN code(s): ${invalidPinCodes.join(', ')}. All PIN codes must be 6 digits.`;
        }
      }
    }
    
    if (!currentCoverage.location) {
      errors.location = 'Location is required';
    }
    
    if (!currentCoverage.serviceCenter) {
      errors.serviceCenter = 'Service center name is required';
    }
    
    if (!currentCoverage.expectedResponseTime) {
      errors.expectedResponseTime = 'Expected response time is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    try {
      const url = isEditing 
        ? `/api/admin/coverage?id=${currentCoverage.id}`
        : '/api/admin/coverage';
      
      const method = isEditing ? 'PUT' : 'POST';
      
      // Process PIN codes from string to array
      let pinCodesArray: string[] = [];
      
      // Force type assertion to avoid TypeScript errors
      const pinCodesValue = currentCoverage.pinCodes as string | string[];
      
      if (typeof pinCodesValue === 'string') {
        // If it's a string, split it
        pinCodesArray = pinCodesValue.split(/[\s,]+/).filter(Boolean);
      } else if (Array.isArray(pinCodesValue)) {
        // If it's already an array, use it directly
        pinCodesArray = pinCodesValue;
      }
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer token` // In a real app, use a proper token
        },
        body: JSON.stringify({
          pinCodes: pinCodesArray,
          location: currentCoverage.location,
          serviceCenter: currentCoverage.serviceCenter,
          expectedResponseTime: currentCoverage.expectedResponseTime
        })
      });
      
      if (!response.ok) {
        throw new Error(`Failed to ${isEditing ? 'update' : 'add'} coverage area`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: 'Success',
          description: `Coverage area ${isEditing ? 'updated' : 'added'} successfully`,
        });
        
        setIsDialogOpen(false);
        fetchCoverageAreas();
      } else {
        throw new Error(data.message || `Failed to ${isEditing ? 'update' : 'add'} coverage area`);
      }
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'adding'} coverage area:`, error);
      toast({
        title: 'Error',
        description: `Failed to ${isEditing ? 'update' : 'add'} coverage area`,
        variant: 'destructive'
      });
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this coverage area?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/admin/coverage?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer token` // In a real app, use a proper token
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete coverage area');
      }
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: 'Success',
          description: 'Coverage area deleted successfully',
        });
        
        fetchCoverageAreas();
      } else {
        throw new Error(data.message || 'Failed to delete coverage area');
      }
    } catch (error) {
      console.error('Error deleting coverage area:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete coverage area',
        variant: 'destructive'
      });
    }
  };

  // Open dialog for adding new coverage area
  const handleAddNew = () => {
    setIsEditing(false);
    setCurrentCoverage({});
    setFormErrors({});
    setIsDialogOpen(true);
  };

  // Open dialog for editing existing coverage area
  const handleEdit = (coverage: ServiceCenterCoverage) => {
    setIsEditing(true);
    setCurrentCoverage(coverage);
    setFormErrors({});
    setIsDialogOpen(true);
  };

  return (
    <AdminLayout title="Coverage Management">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Service Center Coverage Management</h1>
          <Button onClick={handleAddNew}>Add New Coverage Area</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Coverage Areas</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-4">Loading coverage areas...</div>
            ) : coverageAreas.length === 0 ? (
              <div className="text-center py-4">No coverage areas found. Add your first one!</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PIN Code</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Service Center</TableHead>
                    <TableHead>Expected Response</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coverageAreas.map((coverage) => (
                    <TableRow key={coverage.id}>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {coverage.pinCodes.map((pinCode, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {pinCode}
                            </Badge>
                          ))}
                          {coverage.pinCodes.length > 5 && (
                            <Badge variant="secondary" className="text-xs">
                              +{coverage.pinCodes.length - 5} more
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{coverage.location}</TableCell>
                      <TableCell>{coverage.serviceCenter}</TableCell>
                      <TableCell>{coverage.expectedResponseTime}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleEdit(coverage)}>
                            Edit
                          </Button>
                          <Button variant="destructive" size="sm" onClick={() => handleDelete(coverage.id)}>
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isEditing ? 'Edit Coverage Area' : 'Add New Coverage Area'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="pinCodes">PIN Codes</Label>
                <Textarea
                  id="pinCodes"
                  name="pinCodes"
                  placeholder="Enter multiple PIN codes (comma or space separated)"
                  value={Array.isArray(currentCoverage.pinCodes) ? currentCoverage.pinCodes.join(', ') : currentCoverage.pinCodes || ''}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
                <p className="text-xs text-muted-foreground">Enter multiple PIN codes separated by commas, spaces, or new lines</p>
                {formErrors.pinCodes && (
                  <p className="text-sm text-red-500">{formErrors.pinCodes}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, State"
                  value={currentCoverage.location || ''}
                  onChange={handleInputChange}
                />
                {formErrors.location && (
                  <p className="text-sm text-red-500">{formErrors.location}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="serviceCenter">Service Center</Label>
                <Input
                  id="serviceCenter"
                  name="serviceCenter"
                  placeholder="Service Center Name"
                  value={currentCoverage.serviceCenter || ''}
                  onChange={handleInputChange}
                />
                {formErrors.serviceCenter && (
                  <p className="text-sm text-red-500">{formErrors.serviceCenter}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="expectedResponseTime">Expected Response Time</Label>
                <Input
                  id="expectedResponseTime"
                  name="expectedResponseTime"
                  placeholder="e.g., 24-48 hours"
                  value={currentCoverage.expectedResponseTime || ''}
                  onChange={handleInputChange}
                />
                {formErrors.expectedResponseTime && (
                  <p className="text-sm text-red-500">{formErrors.expectedResponseTime}</p>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>
                {isEditing ? 'Update' : 'Add'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default CoverageManagement;