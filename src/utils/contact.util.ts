import {ContactModel} from "@/models/contact.model";

export const getContacts = async (): Promise<ContactModel[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/contacts`, {
            next: { revalidate: +(process.env.NEXT_CACHE_REVALIDATE_IN_SECONDS ?? '3600') },
        });
        if (!res.ok) return null;
        return (await res.json()) as ContactModel[];
    } catch (e) {
        console.error("getContacts error:", e);
        return null;
    }
};
