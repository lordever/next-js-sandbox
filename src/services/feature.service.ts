import connectDB from "@/config/database";
import Feature from "@/models/schemas/feature.schema";
import {FeatureModel} from "@/models/feature.model";

export class FeatureService {
    async getFeatures() {
        try {
            await connectDB();

            const features =  await Feature.find<FeatureModel[]>({}).lean();

            return features as FeatureModel[];
        } catch (error) {
            console.log('GET Features error:', error);
            return [];
        }
    }
}