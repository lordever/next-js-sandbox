export enum API_ENDPOINTS {
  FEATURES = 'FEATURES',
  CONTACTS = 'CONTACTS',
  VALUES = 'VALUES',
  HIGHLIGHTS = 'HIGHLIGHTS',
  FAQS = 'FAQS',
}

// API Configuration
export const API_CONFIG = {
  // Base URL for API requests (will be proxied in development)
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,

  // API endpoints
  ENDPOINTS: {
    [API_ENDPOINTS.FEATURES]: '/api/features',
    [API_ENDPOINTS.CONTACTS]: '/api/contacts',
    [API_ENDPOINTS.VALUES]: '/api/values',
    [API_ENDPOINTS.HIGHLIGHTS]: '/api/highlights',
    [API_ENDPOINTS.FAQS]: '/api/faqs',
  },

  // Cache configuration
  CACHE: {
    REVALIDATE_SECONDS: parseInt(
      process.env.NEXT_CACHE_REVALIDATE_IN_SECONDS || '3600'
    ),
  },
} as const;

// Helper function to build full API URL
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function to get endpoint URL
export const getApiEndpoint = (
  key: keyof typeof API_CONFIG.ENDPOINTS
): string => {
  return API_CONFIG.ENDPOINTS[key];
};
