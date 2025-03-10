// Form validation utilities

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Validates 10-digit Indian phone numbers
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};

export const validatePinCode = (pinCode: string): boolean => {
  // Validates 6-digit Indian PIN codes
  const pinCodeRegex = /^\d{6}$/;
  return pinCodeRegex.test(pinCode);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export type ValidationError = {
  field: string;
  message: string;
};

export const validateServiceRequestForm = (data: {
  applianceType: string;
  serviceType: string;
  pinCode: string;
  contactNumber: string;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!validateRequired(data.applianceType)) {
    errors.push({
      field: 'applianceType',
      message: 'Please select an appliance type'
    });
  }

  if (!validateRequired(data.serviceType)) {
    errors.push({
      field: 'serviceType',
      message: 'Please select a service type'
    });
  }

  if (!validateRequired(data.pinCode)) {
    errors.push({
      field: 'pinCode',
      message: 'PIN code is required'
    });
  } else if (!validatePinCode(data.pinCode)) {
    errors.push({
      field: 'pinCode',
      message: 'Please enter a valid 6-digit PIN code'
    });
  }

  if (!validateRequired(data.contactNumber)) {
    errors.push({
      field: 'contactNumber',
      message: 'Contact number is required'
    });
  } else if (!validatePhone(data.contactNumber)) {
    errors.push({
      field: 'contactNumber',
      message: 'Please enter a valid 10-digit contact number'
    });
  }

  return errors;
};

export const validateContactForm = (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!validateRequired(data.name)) {
    errors.push({
      field: 'name',
      message: 'Name is required'
    });
  }

  if (!validateRequired(data.email)) {
    errors.push({
      field: 'email',
      message: 'Email is required'
    });
  } else if (!validateEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  }

  if (!validateRequired(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Phone number is required'
    });
  } else if (!validatePhone(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Please enter a valid 10-digit phone number'
    });
  }

  if (!validateRequired(data.message)) {
    errors.push({
      field: 'message',
      message: 'Message is required'
    });
  }

  return errors;
};