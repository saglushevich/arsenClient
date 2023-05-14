import { Wrapper, Form, Input, Inputs, Request, Button, Description } from "./styles";
import { Modal } from "@components/Modal";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SyntheticEvent, useState, useReducer, useEffect } from "react";
import { paymentReducer } from "@utils"
import { PAYMENT } from "@constants";

function Order({changeCart}: any) {
    const [order, dispatch] = useReducer(paymentReducer, PAYMENT);

    const [active, setActive] = useState(false);
    const initialOptions = {
        "client-id": "ATR4owt2hpTDOXp_qMrrSib7u6H9cYRQOq5jRlOsFy9rxuq1sd7UnGmPjQwYiM1hIqiRf_j3KVX2sXXS",
        components: "buttons",
    };

    const onInputChange = (action: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({ type: action, payload: e.target.value });
    };

    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem("e-commerce-diplom-cart")) {
            const cart = JSON.parse(localStorage.getItem("e-commerce-diplom-cart") as string);
            let totalPrice = 0;
            let totalQuantity = 0;

            cart.map((item: any, i: any) => {
                totalPrice += +item.price.replace(/,/g, ".");
                totalQuantity += 1;
            });

            dispatch({ type: "SET_PRODUCTS", payload: JSON.stringify(cart)})
            dispatch({ type: "SET_PRICE", payload: totalPrice.toString()})
            dispatch({ type: "SET_QUANTITY", payload: totalQuantity.toString()})
        };
    }, [])

    const toggleActive = (e: SyntheticEvent) => {
        if (e.target === e.currentTarget) {
            setActive(prevActive => !prevActive);
        }
    }

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setActive(prevActive => !prevActive);
    }

    return (
        <PayPalScriptProvider deferLoading options={initialOptions}>
            <Wrapper>
                <Form onSubmit={onSubmit}>
                    <Inputs>
                        <div>
                            <Input onChange={onInputChange("SET_NAME")} required type="text" minLength={6} placeholder="Ваше ФИО"/>
                            <Input onChange={onInputChange("SET_PHONE")} required type="text" minLength={6} placeholder="Номер телефона"/>
                            <Input onChange={onInputChange("SET_EMAIL")} required type="email" minLength={2} placeholder="Email"/>
                        </div>

                        <div>
                            <Input onChange={onInputChange("SET_REGION")} required type="text" minLength={2} placeholder="Регион (область)"/>
                            <Input onChange={onInputChange("SET_CITY")} required type="text" minLength={2} placeholder="Город"/>
                            <Input onChange={onInputChange("SET_ADDRESS")} required type="text" minLength={2} placeholder="Домашний адрес"/>
                        </div>
                    </Inputs>
                    <Request onChange={onInputChange("SET_REQUEST")} placeholder="Введите любые ваши пожелания"/>
                    <Description>
                        Проверьте корректность ввода. Доставка товара в среднем занимаем до 3 дней. После оплаты с вами свяжется наш менеджер для уточнения деталей.
                    </Description>
                    <Button>Оплатить</Button>
                </Form>
                {active && <Modal toggleActive={toggleActive} order={order} changeCart={changeCart}/>}
            </Wrapper>
        </PayPalScriptProvider>
    )
}   

export default Order;