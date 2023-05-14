import { useEffect, useState } from "react";
import { Wrapper, Block, Slider, SliderContainer, Image, Details, Title, Brand, Description, Price, Button, SliderImage } from "./styles";

function SingleProduct({product}: any) {
    const [slideIndex, setSlideIndex] = useState(0);
    const {title, brand, price, description, gallery} = product;
    const [added, setAdded] = useState(false);

    const onChangeSlide = (index: number) => () => {
        setSlideIndex(index);
    }

    useEffect(() => {
        if (added) {
            let timer = setTimeout(() => setAdded(false), 5000);
            () => clearTimeout(timer);
        }
    }, [added])

    const photos = gallery.map((item: any, i: any) => (
        <SliderImage onClick={onChangeSlide(i)} key={i} src={item} />
    ))

    const onAddProductToCart = () => {
        if (typeof window !== "undefined") {
            let cart = [];
            if (localStorage.getItem("e-commerce-diplom-cart")) {
                cart = JSON.parse(localStorage.getItem("e-commerce-diplom-cart") as string);
            }
            cart = [...cart, product];
            localStorage.setItem("e-commerce-diplom-cart", JSON.stringify(cart));
            setAdded(true);
        };
    }

    return (
        <Wrapper>
            <Block>
                <Slider>
                    <SliderContainer>
                        {photos}
                    </SliderContainer>
                </Slider>
                <Image src={gallery[slideIndex]}/>
                <Details>
                    <Title>{title}</Title>
                    <Brand>{brand}</Brand>
                    <Description>{description}</Description>
                    <Price>{price} BYN</Price>
                    <Button disabled={added} onClick={onAddProductToCart}>{added ? "Добавлено" : "В корзину"}</Button>
                </Details>
            </Block>
        </Wrapper>
    )
}

export default SingleProduct;