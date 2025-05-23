import connectDB from "@/config/database";
import Faq from "@/models/schemas/faq.schema";

export class FaqService {
    async getFaq() {
        try {
            await connectDB();

            const faq =  await Faq.find({}).lean();

            return faq as FaqModel[];
        } catch (error) {
            console.log('GET FAQ error:', error);
            return [];
        }
    }
}