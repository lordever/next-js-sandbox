import { FeatureModel } from '@/models/feature.model';
import {
  buildApiUrl,
  getApiEndpoint,
  API_CONFIG,
  API_ENDPOINTS,
} from '@/config/api.config';

export const getFeatures = async (): Promise<FeatureModel[] | null> => {
  try {
    console.log('URL', buildApiUrl(getApiEndpoint(API_ENDPOINTS.FEATURES)));
    const res = await fetch(
      buildApiUrl(getApiEndpoint(API_ENDPOINTS.FEATURES)),
      {
        next: { revalidate: API_CONFIG.CACHE.REVALIDATE_SECONDS },
      }
    );
    if (!res.ok) return null;
    return (await res.json()) as FeatureModel[];
  } catch (e) {
    console.error('getFeatures error:', e);
    return null;
  }
};
