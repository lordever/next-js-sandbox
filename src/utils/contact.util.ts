import { ContactModel } from '@/models/contact.model';
import {
  buildApiUrl,
  getApiEndpoint,
  API_CONFIG,
  API_ENDPOINTS,
} from '@/config/api.config';

export const getContacts = async (): Promise<ContactModel[] | null> => {
  try {
    const res = await fetch(
      buildApiUrl(getApiEndpoint(API_ENDPOINTS.CONTACTS)),
      {
        next: { revalidate: API_CONFIG.CACHE.REVALIDATE_SECONDS },
      }
    );
    if (!res.ok) return null;
    return (await res.json()) as ContactModel[];
  } catch (e) {
    console.error('getContacts error:', e);
    return null;
  }
};
