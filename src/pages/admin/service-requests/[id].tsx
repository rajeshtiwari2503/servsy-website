import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, ArrowLeft, CheckCircle, Clock } from 'lucide-react';
import { ServiceRequest } from '@/lib/mockDb';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ServiceRequestDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [serviceRequest, setServiceRequest] = useState<ServiceRequest | null>(null);
  const [newStatus, setNewStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchServiceRequest = async () => {
      if (!id) return;
      
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          router.push('/admin/login');
          return;
        }

        const response = await fetch(`/api/service-request?id=${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('adminToken');
            router.push('/admin/login');
            return;
          }
          if (response.status === 404) {
            router.push('/admin/service-requests');
            return;
          }
          throw new Error('Failed to fetch service request');
        }

        const data = await response.json();
        setServiceRequest(data.data);
        setNewStatus(data.data.status);
      } catch (err) {
        console.error('Error fetching service request:', err);
        setError('Failed to load service request. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceRequest();
  }, [id, router]);

  const handleUpdateStatus = async () => {
    if (!serviceRequest || newStatus === serviceRequest.status) return;
    
    setIsUpdating(true);
    setError('');
    setUpdateSuccess(false);
    
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch('/api/service-request', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id: serviceRequest.id,
          status: newStatus
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update service request status');
      }

      const data = await response.json();
      setServiceRequest(data.data);
      setUpdateSuccess(true);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Error updating service request:', err);
      setError('Failed to update service request status. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Get status badge for service requests
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
      case 'in-progress':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">In Progress</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Service Request Details">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Loading service request details...</p>
        </div>
      </AdminLayout>
    );
  }

  if (error && !serviceRequest) {
    return (
      <AdminLayout title="Service Request Details">
        <div className="flex items-center justify-center h-64">
          <p className="text-red-500">{error}</p>
        </div>
      </AdminLayout>
    );
  }

  if (!serviceRequest) {
    return (
      <AdminLayout title="Service Request Details">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Service request not found</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Service Request Details">
      <div className="mb-6">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Service Requests
        </Button>
      </div>

      {updateSuccess && (
        <Alert className="mb-6 bg-green-50 text-green-700 border-green-200">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>Service request status updated successfully</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-xl">Service Request {serviceRequest.id}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">Submitted on {formatDate(serviceRequest.timestamp)}</p>
          </div>
          <div className="flex items-center">
            {getStatusIcon(serviceRequest.status)}
            <span className="ml-2">{getStatusBadge(serviceRequest.status)}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Request Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Appliance Type</p>
                  <p className="text-base">{serviceRequest.applianceType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Service Type</p>
                  <p className="text-base">{serviceRequest.serviceType}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Customer Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact Number</p>
                  <p className="text-base">{serviceRequest.contactNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">PIN Code</p>
                  <p className="text-base">{serviceRequest.pinCode}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4">Update Status</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={newStatus} onValueChange={setNewStatus}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                onClick={handleUpdateStatus} 
                disabled={isUpdating || newStatus === serviceRequest.status}
              >
                {isUpdating ? 'Updating...' : 'Update Status'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}