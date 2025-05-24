import {NextResponse} from "next/server";
import connectDB from "@/config/database";
import Faq from "@/models/schemas/faq.schema";

export const GET = async () => {
    try {
        await connectDB();

        const faq =  await Faq.find({}).lean();

        return NextResponse.json(faq);
    } catch (error) {
        return NextResponse.json(
            { message: "FAQ fetching: Internal server error: "+ error },
            { status: 500 }
        );
    }
}