import {NextResponse} from "next/server";
import connectDB from "@/config/database";
import Contact from "@/models/schemas/contact.schema";
import {ContactModel} from "@/models/contact.model";

export const GET = async () => {
    try {
        await connectDB();

        const contacts =  await Contact.find<ContactModel[]>({}).lean();

        return NextResponse.json(contacts);
    } catch (error) {
        return NextResponse.json(
            { message: "Contacts fetching: Internal server error: "+ error },
            { status: 500 }
        );
    }
}