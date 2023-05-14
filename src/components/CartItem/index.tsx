import { useState } from "react";
import { Wrapper, Title, Brand, Info, Price, Images, Image, Arrows, Arrow, ArrowWrapper, ArrowLeft, Description, Delete } from "./styles"
import arrow from "@assets/icons/arrow.svg";

function CartItem({ product, onDeleteProduct }: any) {
    const [slideIndex, setSlideIndex] = useState(0);
    const { title, brand, price, gallery, description } = product;

    const nextSlide = () => {
        if (slideIndex !== gallery.length - 1) {
            setSlideIndex(slideIndex => slideIndex + 1);
        } else if (slideIndex === gallery.length - 1) {
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {
        
        if(slideIndex !== 0){
            setSlideIndex(slideIndex => slideIndex - 1);
        } else {
            setSlideIndex(gallery.length - 1)
        }
    }

    return (
        <Wrapper>
            <Info>
                <Title>{title}</Title>
                <Brand>{brand}</Brand>
                <Description>{description}</Description>
                <Price>{price} BYN</Price>
            </Info>
            <Images>
                <Image src={gallery[slideIndex]}/>
                <Arrows>
                    <ArrowWrapper onClick={nextSlide}>
                        <Arrow src={arrow}></Arrow>
                    </ArrowWrapper>
                    <ArrowLeft onClick={prevSlide}>
                        <Arrow src={arrow}></Arrow>
                    </ArrowLeft>
                </Arrows>
            </Images>
            <Delete onClick={onDeleteProduct}>Удалить</Delete>
        </Wrapper>
    )
    // return (
    //     <li key={id} className="cart__item">
    //         <div className="cart-info">
    //              <h2 className="cart-info__name">{name}</h2>
    //              <h3 className="cart-info__name cart-info__name_medium">{brand}</h3>
    //              <h3 className="cart-info__price" style={{"marginBottom": "20px"}}>{price.currency.symbol}{(price.amount * quantity).toFixed(2)}</h3>                    
    //             {attributesItems}

    //         </div>
    //         <ProductQuantitySelection type="large" data={this.props}/>
    //         <div className="cart-images">
    //             <img src={gallery[slideIndex - 1]} alt={name} className="cart-image"/>
    //             <div className="cart-images__arrows" style={gallery.length > 1 ? {"display":"flex"} : {"display":"none"}}>
    //                 <div onClick={() => this.prevSlide()} className="cart-images__arrow cart-images__arrow_left"><img src={arrow} alt="arrow" /></div>
    //                 <div onClick={() => this.nextSlide()} className="cart-images__arrow"><img src={arrow} alt="arrow" /></div>
    //             </div> 
    //         </div>
    //     </li>
    // )
}

export default CartItem;