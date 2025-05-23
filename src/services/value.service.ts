import connectDB from "@/config/database";
import {ValueModel} from "@/models/value.model";
import Value from "@/models/schemas/value.schema";

export class ValueService {
    async getValues() {
        try {
            await connectDB();

            const values =  await Value.find<ValueModel[]>({}).lean();

            return values as ValueModel[];
        } catch (error) {
            console.log('GET Values error:', error);
            return [];
        }
    }
}