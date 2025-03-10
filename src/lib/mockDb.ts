// Mock database for storing service requests and contact submissions
// In a real application, this would be replaced with a proper database

export type ServiceRequest = {
  id: string;
  applianceType: string;
  serviceType: string;
  pinCode: string;
  contactNumber: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  timestamp: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'unread' | 'read' | 'responded';
  timestamp: string;
};

export type ServiceCenterCoverage = {
  id: string;
  pinCodes: string[];
  location: string;
  serviceCenter: string;
  expectedResponseTime: string;
  timestamp: string;
};

// Mock admin credentials
// In a real application, this would be stored securely in a database
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  // This would be hashed in a real application
  password: 'servsy2025'
};

// Empty data stores - no dummy data
let serviceRequests: ServiceRequest[] = [];
let contactSubmissions: ContactSubmission[] = [];

// Service request functions
export function getAllServiceRequests(): ServiceRequest[] {
  return [...serviceRequests];
}

export function getServiceRequestById(id: string): ServiceRequest | undefined {
  return serviceRequests.find(req => req.id === id);
}

export function addServiceRequest(request: any): ServiceRequest {
  const newRequest: ServiceRequest = {
    ...request,
    id: `SR-${Date.now()}`,
    status: 'pending',
    timestamp: new Date().toISOString()
  };
  
  serviceRequests.push(newRequest);
  return newRequest;
}

export function updateServiceRequest(id: string, updates: Partial<ServiceRequest>): ServiceRequest | null {
  const index = serviceRequests.findIndex(req => req.id === id);
  if (index === -1) return null;
  
  serviceRequests[index] = { ...serviceRequests[index], ...updates };
  return serviceRequests[index];
}

// Contact submission functions
export function getAllContactSubmissions(): ContactSubmission[] {
  return [...contactSubmissions];
}

export function getContactSubmissionById(id: string): ContactSubmission | undefined {
  return contactSubmissions.find(sub => sub.id === id);
}

export function addContactSubmission(submission: any): ContactSubmission {
  const newSubmission: ContactSubmission = {
    ...submission,
    id: `CS-${Date.now()}`,
    status: 'unread',
    timestamp: new Date().toISOString()
  };
  
  contactSubmissions.push(newSubmission);
  return newSubmission;
}

export function updateContactSubmission(id: string, updates: Partial<ContactSubmission>): ContactSubmission | null {
  const index = contactSubmissions.findIndex(sub => sub.id === id);
  if (index === -1) return null;
  
  contactSubmissions[index] = { ...contactSubmissions[index], ...updates };
  return contactSubmissions[index];
}

// Service center coverage functions
// Initialize with some sample data for major cities
let serviceCenterCoverage: ServiceCenterCoverage[] = [
  {
    id: 'SC-001',
    pinCodes: ['110001', '110002', '110003', '110004', '110005'],
    location: 'Delhi, Central Delhi',
    serviceCenter: 'Delhi Central Service Center',
    expectedResponseTime: '24-48 hours',
    timestamp: new Date().toISOString()
  },
  {
    id: 'SC-002',
    pinCodes: ['400001', '400002', '400003', '400004', '400005'],
    location: 'Mumbai, Maharashtra',
    serviceCenter: 'Mumbai Central Service Center',
    expectedResponseTime: '24-48 hours',
    timestamp: new Date().toISOString()
  },
  {
    id: 'SC-003',
    pinCodes: ['600001', '600002', '600003', '600004', '600005'],
    location: 'Chennai, Tamil Nadu',
    serviceCenter: 'Chennai Central Service Center',
    expectedResponseTime: '24-48 hours',
    timestamp: new Date().toISOString()
  },
  {
    id: 'SC-004',
    pinCodes: ['700001', '700002', '700003', '700004', '700005'],
    location: 'Kolkata, West Bengal',
    serviceCenter: 'Kolkata Central Service Center',
    expectedResponseTime: '24-48 hours',
    timestamp: new Date().toISOString()
  }
];

export function getAllServiceCenterCoverage(): ServiceCenterCoverage[] {
  return [...serviceCenterCoverage];
}

export function getServiceCenterCoverageById(id: string): ServiceCenterCoverage | undefined {
  return serviceCenterCoverage.find(coverage => coverage.id === id);
}

export function getServiceCenterCoverageByPinCode(pinCode: string): ServiceCenterCoverage | undefined {
  return serviceCenterCoverage.find(coverage => coverage.pinCodes.includes(pinCode));
}

export function addServiceCenterCoverage(coverage: any): ServiceCenterCoverage {
  // Check if any of the PIN codes already exist in other service centers
  const existingPinCodes = coverage.pinCodes.filter((pinCode: string) => 
    serviceCenterCoverage.some(c => c.pinCodes.includes(pinCode))
  );
  
  // If there are existing PIN codes, we'll remove them from other service centers
  if (existingPinCodes.length > 0) {
    serviceCenterCoverage = serviceCenterCoverage.map(c => ({
      ...c,
      pinCodes: c.pinCodes.filter(pinCode => !existingPinCodes.includes(pinCode))
    }));
  }
  
  // Add a new coverage entry
  const newCoverage: ServiceCenterCoverage = {
    ...coverage,
    id: `SC-${Date.now()}`,
    timestamp: new Date().toISOString()
  };
  
  serviceCenterCoverage.push(newCoverage);
  return newCoverage;
}

export function updateServiceCenterCoverage(id: string, updates: Partial<ServiceCenterCoverage>): ServiceCenterCoverage | null {
  const index = serviceCenterCoverage.findIndex(coverage => coverage.id === id);
  if (index === -1) return null;
  
  serviceCenterCoverage[index] = { 
    ...serviceCenterCoverage[index], 
    ...updates,
    timestamp: new Date().toISOString()
  };
  return serviceCenterCoverage[index];
}

export function deleteServiceCenterCoverage(id: string): boolean {
  const initialLength = serviceCenterCoverage.length;
  serviceCenterCoverage = serviceCenterCoverage.filter(coverage => coverage.id !== id);
  return serviceCenterCoverage.length < initialLength;
}