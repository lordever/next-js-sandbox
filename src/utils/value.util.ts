import { ValueModel } from '@/models/value.model';
import {
  buildApiUrl,
  getApiEndpoint,
  API_CONFIG,
  API_ENDPOINTS,
} from '@/config/api.config';

export const getValues = async (): Promise<ValueModel[] | null> => {
  try {
    const res = await fetch(buildApiUrl(getApiEndpoint(API_ENDPOINTS.VALUES)), {
      next: { revalidate: API_CONFIG.CACHE.REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as ValueModel[];
  } catch (e) {
    console.error('getValues error:', e);
    return null;
  }
};
