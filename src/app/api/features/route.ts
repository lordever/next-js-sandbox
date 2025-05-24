import {NextResponse} from "next/server";
import connectDB from "@/config/database";
import Feature from "@/models/schemas/feature.schema";
import {FeatureModel} from "@/models/feature.model";

export const GET = async () => {
    try {
        await connectDB();

        const features =  await Feature.find<FeatureModel[]>({}).lean();

        return NextResponse.json(features);
    } catch (error) {
        return NextResponse.json(
            { message: "Features fetching: Internal server error: "+ error },
            { status: 500 }
        );
    }
}