import { useState, useCallback } from 'react';
import { ValidationError } from '@/lib/validation';

type FormState<T> = {
  values: T;
  errors: Record<keyof T, string>;
  touched: Record<keyof T, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
};

type FormOptions<T> = {
  initialValues: T;
  validate?: (values: T) => ValidationError[];
  onSubmit: (values: T) => Promise<void> | void;
};

export function useForm<T extends Record<string, any>>(options: FormOptions<T>) {
  const { initialValues, validate, onSubmit } = options;

  const [formState, setFormState] = useState<FormState<T>>({
    values: initialValues,
    errors: {} as Record<keyof T, string>,
    touched: {} as Record<keyof T, boolean>,
    isSubmitting: false,
    isValid: true
  });

  const handleChange = useCallback((field: keyof T, value: any) => {
    setFormState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [field]: value
      },
      touched: {
        ...prev.touched,
        [field]: true
      }
    }));
  }, []);

  const handleBlur = useCallback((field: keyof T) => {
    setFormState(prev => ({
      ...prev,
      touched: {
        ...prev.touched,
        [field]: true
      }
    }));
  }, []);

  const validateForm = useCallback(() => {
    if (!validate) return true;

    const validationErrors = validate(formState.values);
    const errors = {} as Record<keyof T, string>;
    let isValid = true;

    validationErrors.forEach(error => {
      errors[error.field as keyof T] = error.message;
      isValid = false;
    });

    setFormState(prev => ({
      ...prev,
      errors,
      isValid
    }));

    return isValid;
  }, [formState.values, validate]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    // Mark all fields as touched
    const allTouched = Object.keys(formState.values).reduce((acc, key) => {
      acc[key as keyof T] = true;
      return acc;
    }, {} as Record<keyof T, boolean>);

    setFormState(prev => ({
      ...prev,
      touched: allTouched,
      isSubmitting: true
    }));

    const isValid = validateForm();

    if (isValid) {
      try {
        await onSubmit(formState.values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: false
    }));
  }, [formState.values, onSubmit, validateForm]);

  const resetForm = useCallback(() => {
    setFormState({
      values: initialValues,
      errors: {} as Record<keyof T, string>,
      touched: {} as Record<keyof T, boolean>,
      isSubmitting: false,
      isValid: true
    });
  }, [initialValues]);

  return {
    values: formState.values,
    errors: formState.errors,
    touched: formState.touched,
    isSubmitting: formState.isSubmitting,
    isValid: formState.isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
}