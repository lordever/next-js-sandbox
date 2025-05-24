import {ContactModel} from "@/models/contact.model";

export const getContacts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/contacts`, {
        next: {revalidate: +(process.env.NEXT_CACHE_REVALIDATE_IN_SECONDS ?? '3600')}
    });

    const result = await res.json()

    return result as ContactModel[];
};