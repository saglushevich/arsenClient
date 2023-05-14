import { PAYMENT } from "@constants";

type TAction = {
    type: string;
    payload: string;
};

export function paymentReducer(state: typeof PAYMENT, action: TAction) {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_PHONE":
        return { ...state, phone: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_REGION":
        return { ...state, region: action.payload };
      case "SET_CITY":
        return { ...state, city: action.payload };
      case "SET_ADDRESS":
        return { ...state, address: action.payload };
      case "SET_PRODUCTS":
        return { ...state, products: action.payload };
      case "SET_QUANTITY":
        return { ...state, quantity: action.payload };
      case "SET_PRICE":
        return { ...state, price: action.payload };
      case "SET_REQUEST":
        return { ...state, request: action.payload };
      default:
        return state;
    }
  }