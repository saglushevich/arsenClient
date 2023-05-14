import styled from "styled-components";

export const Product = styled.li`
    position: relative;
    width: 385px;
    min-height: 475px;
    padding: 15px;
    cursor: pointer;
    transition: all .5s;
    box-shadow: 0px 4px 35px 0px #A8ACB030;
    &:hover {
        box-shadow: 0px 2px 15px 0px #AABDBC;
    }
`;

export const Content = styled.div``;

export const Image = styled.img`
    width: 350px;
    height: 330px;
    object-fit: contain;
`;

export const Title = styled.h2`
    font-family: 'Raleway';
    font-weight: 300;
    font-size: 18px;
    color: #1D1F22;
    margin-top: 24px;
    line-height: 160%;
`;

export const Price = styled.h3`
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 18px;
    color: #1D1F22;
    line-height: 160%;
`;

// .catalog
//     &__covering
//         position: absolute
//         width: 100%
//         height: 100%
//         background-color: white
//         opacity: 0.6
//         top: 0
//         left: 0
//         padding-top: 150px
//         font-family: 'Raleway'
//         font-weight: 400
//         font-size: 24px
//         display: flex
//         justify-content: center
//         color: #8D8F9A
//     &__cart
//         display: flex
//         position: absolute
//         width: 52px
//         height: 52px
//         border-radius: 100%
//         background: #5ECE7B
//         align-items: center
//         justify-content: center
//         cursor: pointer
//         top: 320px
//         right: 31px
//         filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1))
//         transition: all .5s
//         opacity: 0