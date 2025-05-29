import {ValueModel} from "@/models/value.model";

export const getValues = async (): Promise<ValueModel[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/values`, {
            next: { revalidate: +(process.env.NEXT_CACHE_REVALIDATE_IN_SECONDS ?? '3600') },
        });
        if (!res.ok) return null;
        return (await res.json()) as ValueModel[];
    } catch (e) {
        console.error("getValues error:", e);
        return null;
    }
};
