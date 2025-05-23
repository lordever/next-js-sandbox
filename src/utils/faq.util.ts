import {cache} from "react";
import {FaqService} from "@/services/faq.service";

export const getFaqCached = cache(async () => {
    const service = new FaqService();
    return await service.getFaq();
});