import React, { useReducer } from "react";
import { MealModel } from "app/types";
import CartContext from "./cartContext";

interface Props {
  children: React.ReactNode;
}

interface ActionModel {
  type: string;
  payload?: any;
}

interface InitialState {
  items: any;
  totalAmount: number;
}

const initialState: InitialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: InitialState, action: ActionModel) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = state.items.concat(action.payload);
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      break;
  }
  return initialState;
};

const CartProvider = ({ children }: Props) => {
  // useReducer to handle different scenarios based of received actions
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  // These two functions are called when a respective button is clicked by the user and their only responsibility is to send an action to the reducer function to handle the state
  const addItemToTheCart = (item: MealModel) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };

  const removeItemFromTheCart = (id: string) => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToTheCart,
    removeItem: removeItemFromTheCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
