import connectDB from "@/config/database";
import Highlight from "@/models/schemas/highlight.schema";
import {HighlightModel} from "@/models/highlight.model";

export class HighlightService {
    async getHighlights(): Promise<HighlightModel | null> {
        try {
            await connectDB();

            const highlights = await Highlight.findOne({}).lean();

            if (!highlights) {
                return null;
            }

            return highlights as unknown as HighlightModel;
        } catch (error) {
            console.log('GET Highlights error:', error);
            return null;
        }
    }
}