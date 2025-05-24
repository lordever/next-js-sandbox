import {NextResponse} from "next/server";
import connectDB from "@/config/database";
import Highlight from "@/models/schemas/highlight.schema";

export const GET = async () => {
    try {
        await connectDB();

        const highlights = await Highlight.findOne({}).lean();

        if (!highlights) {
            return null;
        }

        return NextResponse.json(highlights);
    } catch (error) {
        return NextResponse.json(
            { message: "Highlights fetching: Internal server error: "+ error },
            { status: 500 }
        );
    }
}