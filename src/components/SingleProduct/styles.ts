import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 160px 0 180px;
`;

export const Block = styled.div`
    display: grid;
    grid-template-columns: 100px 610px 350px;
    column-gap: 40px;
`;

export const Slider = styled.div`
    position: relative;
    height: 510px;
    width: 80px;
`;

export const SliderContainer = styled.ul`
    height: 510px;
    width: 100%;
    overflow-y: auto;
`;

export const SliderImage = styled.img`
    width: 100px;
    height: 80px;
    cursor: pointer;
    object-fit: contain;
    &:nth-last-child(n+2) {
        margin-bottom: 40px;
    }
`;

export const Image = styled.img`
    width: 610px;
    height: 510px;
    object-fit: contain;
`;

export const Details = styled.div`
    padding-left: 40px;
`;

export const Title = styled.h1`
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #1D1F22;
`;

export const Brand = styled.h2`
    font-family: 'Raleway';
    font-weight: 400;
    margin-top: 16px;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #1D1F22;
    text-align: justify;
    margin-top: 40px;
`;

export const Price = styled.h3`
    font-family: 'Raleway';
    font-size: 24px;
    line-height: 24px;
    margin-top: 20px;
    font-weight: 700;
    color: #1D1F22;
    text-transform: uppercase;
`;

export const Button = styled.button`
    display: block;
    width: 100%;
    border: 1px solid #5ECE7B;
    height: 50px;
    background: #5ECE7B;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 30px;
    &:disabled {
        background: #C7D2D0;
        border: 1px solid #C7D2D0;
    }
`;