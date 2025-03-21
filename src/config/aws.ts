import { useNotificationStore } from '../lib/store.js';

export const AWS_CONFIG = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: '6073-9277-5096',
    secretAccessKey: 'yAKIAY223OHO4DH34ZU5J'
  },
  sesFromEmail: 'info@protaxadvisors.tax'
};

// Validate AWS configuration
export const validateAWSConfig = () => {
  const required = [
    'region',
    'credentials.accessKeyId',
    'credentials.secretAccessKey'
  ];

  const missing = required.filter(key => {
    const value = key.split('.').reduce((obj, k) => (obj as any)?.[k], AWS_CONFIG);
    return !value;
  });

  if (missing.length > 0) {
    console.error('Missing AWS configuration:', missing);
    useNotificationStore.getState().addNotification(
      'Email service configuration incomplete',
      'error'
    );
    return false;
  }

  return true;
};