import {HighlightModel} from "@/models/highlight.model";

export const getHighlights = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/highlights`, {
        next: {revalidate: +(process.env.NEXT_CACHE_REVALIDATE_IN_SECONDS ?? '3600')}
    });

    const result = await res.json()

    return result as unknown as HighlightModel;
};