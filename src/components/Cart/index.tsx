import { Wrapper, Title, List, OrderWrapper, OrderText, Button } from "./styles"
import CartItem from "@components/CartItem"
import { useEffect, useState } from "react";
import Order from "@components/Order";

function Cart() {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem("e-commerce-diplom-cart")) {
            setCart(JSON.parse(localStorage.getItem("e-commerce-diplom-cart") as string))
        };
    }, [])

    let totalPrice = 0;
    let totalQuantity = 0;

    const changeCart = (newCart: any) => {
        setCart(newCart)
    } 

    const onDeleteProduct = (id: string) => () => {
        const newCart = cart.filter((item: any) => item._id !== id);
        localStorage.setItem("e-commerce-diplom-cart", JSON.stringify(newCart));
        setCart(newCart);
    }

    const cartItems = cart.map((item: any, i: any) => {
        totalPrice += +item.price.replace(/,/g, ".");
        totalQuantity += 1;
        return <CartItem key={item._id + i} product={item} onDeleteProduct={onDeleteProduct(item._id)}/>
    });

    return (
        <Wrapper>
            <Title>Корзина</Title>
            {cart.length ? 
            <>
                <List>
                {cartItems}
                </List>
                <OrderWrapper>
                    <OrderText>Количество товаров в корзине: {totalQuantity}</OrderText>
                    <OrderText>Итоговая сумма: {totalPrice} BYN</OrderText>
                </OrderWrapper>
                <Order changeCart={changeCart} />
            </> :
            <OrderText style={{ marginTop: "55px"}}>Здесь пока пусто...</OrderText>
        }
        </Wrapper>
    )
}

export default Cart;