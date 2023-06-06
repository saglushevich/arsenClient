import { useEffect, useState } from "react";
import { makeOrder } from "@actions";

import {
    PayPalButtonsComponentProps,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

interface IPayPal {
    order: any;
    onChangeMessage:  (text: string) => void;
}

export const usePayPal = ({ order, onChangeMessage }: IPayPal) => {
    const [loading, setLoading] = useState(true);
    const [{ options }, dispatch] = usePayPalScriptReducer();
    const { price } = order;
    // console.log()
  
    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: { ...options },
        });
        setLoading(false)
    }, []);
  
    const payPalConfig: PayPalButtonsComponentProps = {
        createOrder: (_, actions) =>
            actions.order.create({
            purchase_units: [
                {
                amount: {
                    value: (+price / 2.75).toFixed(2).toString(),
                },
                },
            ],
        }),
      onApprove: (_, actions) =>
        actions.order
          ? actions.order
              .capture()
              .then(() => {
                makeOrder(order);
                onChangeMessage("Успешно оплачено! Мы скоро свяжемся с вами");
                localStorage.removeItem("e-commerce-diplom-cart");
              })
              .catch(() => {
                onChangeMessage("Ошибка с оплатой. Повторите еще раз!");
                setLoading(false)
              })
          : Promise.resolve().then(() => {
              throw new Error("Error with Paypal API");
            }),
    };
  
    return {payPalConfig, loading};
  };