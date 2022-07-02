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
  quantity: number;
}

export type DataCategories = string[];

export interface CountOption {
  countInCart: number;
  countInHeard: number;
}

export interface ItemsCart {
  product: DataItem;
  quantity: number;
}
