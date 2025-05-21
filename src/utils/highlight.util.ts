import {cache} from "react";
import {HighlightService} from "@/services/highlight.service";

export const getHighlightsCached = cache(async () => {
    const service = new HighlightService();
    return await service.getHighlights();
});