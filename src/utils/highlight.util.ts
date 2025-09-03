import { HighlightModel } from '@/models/highlight.model';
import {
  buildApiUrl,
  getApiEndpoint,
  API_CONFIG,
  API_ENDPOINTS,
} from '@/config/api.config';

export const getHighlights = async (): Promise<HighlightModel | null> => {
  try {
    const res = await fetch(
      buildApiUrl(getApiEndpoint(API_ENDPOINTS.HIGHLIGHTS)),
      {
        next: { revalidate: API_CONFIG.CACHE.REVALIDATE_SECONDS },
      }
    );
    if (!res.ok) return null;
    return (await res.json()) as HighlightModel;
  } catch (e) {
    console.error('getHighlights error:', e);
    return null;
  }
};
