import {NextResponse} from "next/server";
import connectDB from "@/config/database";
import Value from "@/models/schemas/value.schema";
import {ValueModel} from "@/models/value.model";

export const GET = async () => {
    try {
        await connectDB();

        const values =  await Value.find<ValueModel[]>({}).lean();

        return NextResponse.json(values);
    } catch (error) {
        return NextResponse.json(
            { message: "Values fetching: Internal server error: "+ error },
            { status: 500 }
        );
    }
}