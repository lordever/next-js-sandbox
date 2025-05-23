import {cache} from "react";
import {FeatureService} from "@/services/feature.service";

export const getFeaturesCached = cache(async () => {
    const service = new FeatureService();
    return await service.getFeatures();
});