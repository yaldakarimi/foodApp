export interface MealModel {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface CartItemModel {
  id: string;
  name: string;
  price: number;
  inputAmount: number;
}

export interface CartContextModel {
  items: [];
  totalAmount: number;
  addItem: (item: MealModel) => void;
  removeItem: (id: string) => void;
}
