import {FeatureModel} from "@/models/feature.model";

export const getFeatures = async (): Promise<FeatureModel[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/features`, {
            next: { revalidate: +(process.env.NEXT_CACHE_REVALIDATE_IN_SECONDS ?? '3600') },
        });
        if (!res.ok) return null;
        return (await res.json()) as FeatureModel[];
    } catch (e) {
        console.error("getFeatures error:", e);
        return null;
    }
};
