interface FaqModel {
    _id: string;
    category: string;
    items: FaqItemModel[];
}

interface FaqItemModel {
    _id: string;
    title: string;
    description: string;
}