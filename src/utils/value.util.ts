import {cache} from "react";
import {ValueService} from "@/services/value.service";

export const getValuesCached = cache(async () => {
    const service = new ValueService();
    return await service.getValues();
});