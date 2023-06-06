import { SyntheticEvent, useEffect } from "react";
import { useState } from "react";
import { Wrapper, Content, Title, Description, Buttons, CloseBtn } from "./styles";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { usePayPal } from '@hooks';

interface IModal {
    active?: boolean;
    order: any;
    toggleActive: (e: SyntheticEvent) => void;
    changeCart: any;
};


export function Modal({ order, toggleActive, changeCart }: IModal) {
    const [message, setMessage] = useState("");

    const onChangeMessage = (text: string) => {
        setMessage(text)
    }
    const {payPalConfig, loading} = usePayPal({ order, onChangeMessage });

    useEffect(() => {
        if (message) {
            let timer = setTimeout(() => changeCart([]), 4000);
            () => clearTimeout(timer);
        }
    }, [message])

    return (
        <Wrapper onClick={toggleActive}>
            <Content>
                {message ? 
                    <Title>{message}</Title>
                    :
                
                    <>
                        <Title>Оплата</Title>
                        <Description>
                            Пожалуйста, выберите способ оплаты:
                        </Description>
                        {loading && <Title>Загрузка...</Title>}
                        <Buttons>
                            <PayPalButtons {...payPalConfig} />
                        </Buttons>
                    </>
                }
                <CloseBtn onClick={toggleActive}>&times;</CloseBtn>
            </Content>
        </Wrapper>
    )
}
