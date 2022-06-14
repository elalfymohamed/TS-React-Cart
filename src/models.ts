export interface DataItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type DataCategories = string[];
