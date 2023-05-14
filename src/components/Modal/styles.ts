import styled from "styled-components";

type IStyles = {
    active?: boolean;
}

export const Wrapper = styled.div<IStyles>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000075;
    z-index: 1200;
    overflow: hidden;
`;

export const Content = styled.div`
    margin: 0 auto;
    margin-top: 125px;
    padding: 35px;
    width: 500px;
    background: #FFF;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 500;
`;

export const Description = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #1D1F22;
    text-align: center;
    margin-top: 30px;
`;

export const Buttons = styled.div`
    margin-top: 55px;
`;

export const CloseBtn = styled.div`
    position: absolute;
    top: 0;
    right: 50px;
    color: #FFF;
    font-size: 128px;
    cursor: pointer;
`;