export interface MealModel {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface CartItemModel extends MealModel {
  amount: number;
}

export interface CartContextModel {
  items: [];
  totalAmount: number;
  addItem: (item: MealModel) => void;
  removeItem: (id: string) => void;
}
