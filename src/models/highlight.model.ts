export interface HighlightItem {
    _id: string;
    title: string;
    description: string;
    imagePath: string;
    imageAlt: string;
    buttonText?: string;
}

export interface HighlightModel {
    home: HighlightItem[];
    about: HighlightItem[];
    careers: HighlightItem[];
}