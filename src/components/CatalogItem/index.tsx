import { Product, Content, Image, Title, Price } from "./styles";

function CatalogItem({ data }: any) {
    const {title, price, inStock, brand, gallery} = data;
    return (
        <Product>
            <Content>
                <Image src={gallery[0]} />
                <Title>{title}, {brand}</Title>
                <Price>{price} BYN</Price>
            </Content>
        </Product>
    )
}

export default CatalogItem;