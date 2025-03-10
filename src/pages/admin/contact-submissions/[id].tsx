import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, ArrowLeft, CheckCircle, Mail } from 'lucide-react';
import { ContactSubmission } from '@/lib/mockDb';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ContactSubmissionDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [submission, setSubmission] = useState<ContactSubmission | null>(null);
  const [newStatus, setNewStatus] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchContactSubmission = async () => {
      if (!id) return;
      
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          router.push('/admin/login');
          return;
        }

        const response = await fetch(`/api/contact?id=${id}`, {
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
            router.push('/admin/contact-submissions');
            return;
          }
          throw new Error('Failed to fetch contact submission');
        }

        const data = await response.json();
        setSubmission(data.data);
        setNewStatus(data.data.status);
        
        // If the submission is unread, mark it as read
        if (data.data.status === 'unread') {
          updateSubmissionStatus('read');
        }
      } catch (err) {
        console.error('Error fetching contact submission:', err);
        setError('Failed to load contact submission. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactSubmission();
  }, [id, router]);

  const updateSubmissionStatus = async (status: string) => {
    if (!submission) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id: submission.id,
          status
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update contact submission status');
      }

      const data = await response.json();
      setSubmission(data.data);
      setNewStatus(data.data.status);
    } catch (err) {
      console.error('Error updating contact submission:', err);
    }
  };

  const handleUpdateStatus = async () => {
    if (!submission || newStatus === submission.status) return;
    
    setIsUpdating(true);
    setError('');
    setUpdateSuccess(false);
    
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id: submission.id,
          status: newStatus
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update contact submission status');
      }

      const data = await response.json();
      setSubmission(data.data);
      setUpdateSuccess(true);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Error updating contact submission:', err);
      setError('Failed to update contact submission status. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSendResponse = async () => {
    if (!submission || !responseMessage.trim()) return;
    
    setIsUpdating(true);
    setError('');
    setUpdateSuccess(false);
    
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin/login');
        return;
      }

      // In a real application, you would send an email here
      // For this demo, we'll just update the status to 'responded'
      const response = await fetch('/api/contact', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id: submission.id,
          status: 'responded'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update contact submission status');
      }

      const data = await response.json();
      setSubmission(data.data);
      setNewStatus('responded');
      setUpdateSuccess(true);
      setResponseMessage('');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Error sending response:', err);
      setError('Failed to send response. Please try again.');
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

  // Get status badge for contact submissions
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'unread':
        return <Badge>Unread</Badge>;
      case 'read':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Read</Badge>;
      case 'responded':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Responded</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Contact Submission Details">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Loading contact submission details...</p>
        </div>
      </AdminLayout>
    );
  }

  if (error && !submission) {
    return (
      <AdminLayout title="Contact Submission Details">
        <div className="flex items-center justify-center h-64">
          <p className="text-red-500">{error}</p>
        </div>
      </AdminLayout>
    );
  }

  if (!submission) {
    return (
      <AdminLayout title="Contact Submission Details">
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Contact submission not found</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Contact Submission Details">
      <div className="mb-6">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Contact Submissions
        </Button>
      </div>

      {updateSuccess && (
        <Alert className="mb-6 bg-green-50 text-green-700 border-green-200">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            {submission.status === 'responded' 
              ? 'Response sent successfully' 
              : 'Contact submission status updated successfully'}
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="mb-6">
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-xl">Contact Submission {submission.id}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">Received on {formatDate(submission.timestamp)}</p>
          </div>
          <div>
            {getStatusBadge(submission.status)}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="text-base">{submission.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-base">{submission.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-base">{submission.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Message</h3>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="whitespace-pre-wrap">{submission.message}</p>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">Status:</p>
              <Select value={newStatus} onValueChange={setNewStatus}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="responded">Responded</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline"
                onClick={handleUpdateStatus} 
                disabled={isUpdating || newStatus === submission.status}
              >
                {isUpdating ? 'Updating...' : 'Update Status'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Send Response</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Type your response message here..."
              className="min-h-[150px]"
              value={responseMessage}
              onChange={(e) => setResponseMessage(e.target.value)}
            />
            <Button 
              className="w-full sm:w-auto"
              onClick={handleSendResponse}
              disabled={isUpdating || !responseMessage.trim()}
            >
              <Mail className="mr-2 h-4 w-4" />
              {isUpdating ? 'Sending...' : 'Send Response'}
            </Button>
            <p className="text-xs text-gray-500">
              Note: In this demo, the email is not actually sent. This would connect to an email service in a production environment.
            </p>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}