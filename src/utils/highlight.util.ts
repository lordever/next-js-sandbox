import {HighlightModel} from "@/models/highlight.model";

export const getHighlights = async (): Promise<HighlightModel | null> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/highlights`, {
            next: { revalidate: +(process.env.NEXT_CACHE_REVALIDATE_IN_SECONDS ?? '3600') },
        });

        if (!res.ok) {
            console.error(`getHighlights fetch failed: ${res.status}`);
            return null;
        }

        const result = await res.json();
        return result as HighlightModel;
    } catch (e) {
        console.error('getHighlights error:', e);
        return null;
    }
};
