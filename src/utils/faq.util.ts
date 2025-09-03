import { FaqModel } from '@/models/faq.model';
import {
  buildApiUrl,
  getApiEndpoint,
  API_CONFIG,
  API_ENDPOINTS,
} from '@/config/api.config';

export const getFaq = async (): Promise<FaqModel[] | null> => {
  try {
    const res = await fetch(buildApiUrl(getApiEndpoint(API_ENDPOINTS.FAQS)), {
      next: { revalidate: API_CONFIG.CACHE.REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as FaqModel[];
  } catch (e) {
    console.error('getFaqs error:', e);
    return null;
  }
};
