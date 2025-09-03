export interface HighlightItem {
  id?: string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  buttonText?: string;
}

export interface HighlightModel {
  id?: string;
  home: HighlightItem[];
  about: HighlightItem[];
  careers: HighlightItem[];
}
