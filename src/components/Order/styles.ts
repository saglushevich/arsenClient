import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 50px;
`;

export const Form = styled.form`
    width: 830px;
`;

export const Inputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Input = styled.input`
    display: block;
    width: 400px;
    padding: 15px 20px;
    background: #fff;
    border: 2px solid  #5ECE7B;
    color: #5ECE7B;
    font-size: 24px;
    text-align: center;
    &:nth-last-child(n+2) {
        margin-bottom: 15px;
    }
`;

export const Request = styled.textarea`
    display: block;
    width: 100%;
    height: 200px;
    padding: 15px 20px;
    background: #fff;
    border: 2px solid  #5ECE7B;
    color: #5ECE7B;
    font-size: 24px;
    resize: none;
    margin-top: 25px;
`;

export const Button = styled.button`
    display: block;
    width: 300px;
    padding: 15px 0;
    background: #5ECE7B;
    border: 1px solid #5ECE7B;
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0 auto;
    margin-top: 25px;
    cursor: pointer;
    border-radius: 5px;
`;

export const Description = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #1D1F22;
    text-align: justify;
    margin-top: 30px;
`;