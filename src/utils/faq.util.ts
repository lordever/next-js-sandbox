import {FaqModel} from "@/models/faq.model";

export const getFaq = async (): Promise<FaqModel[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/faq`, {
            next: { revalidate: +(process.env.NEXT_CACHE_REVALIDATE_IN_SECONDS ?? '3600') },
        });
        if (!res.ok) return null;
        return (await res.json()) as FaqModel[];
    } catch (e) {
        console.error("getFaq error:", e);
        return null;
    }
};
