import styled from "styled-components";

export const Wrapper = styled.li`
    position: relative;
    border-top: 1px solid #E5E5E5;
    padding: 45px 0;
    display: grid;
    grid-template-columns: auto 45px 200px;
    column-gap: 24px;
`;

export const Info = styled.div``;

export const Title = styled.h2`
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
`;

export const Brand = styled(Title)`
    font-weight: 400;
    margin-top: 16px;
`;

export const Description = styled.p`
    width: 600px;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #1D1F22;
    text-align: justify;
    margin-top: 30px;
`;

export const Price = styled.h3`
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #1D1F22;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Images = styled.div`
    width: 200px;
    height: 250px;
    position: relative;
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const Arrows = styled.div``;

export const ArrowWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: rgba(0, 0, 0, 0.73);
    bottom: 15px;
    right: 15px;
    cursor: pointer;
`;

export const Arrow = styled.img`
    with: 20px;
    height: 20px;
    object-fit: cover;
`;

export const ArrowLeft = styled(ArrowWrapper)`
    right: 55px;
    transform: rotate(180deg);
`;

export const Delete = styled.button`
    position: absolute;
    display: block;
    padding: 15px 0;
    width: 340px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 16px;
    color: #FFF;
    text-transform: uppercase;
    background: #CF4A4E;
    cursor: pointer;
    border: 1px solid #CF4A4E;
    top: 145px;
    right: -145px;
    transform: rotate(-90deg);
`;
