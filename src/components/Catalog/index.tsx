import { Wrapper, Title, Products } from "./styles";
import CatalogItem from "@components/CatalogItem";
import Link from "next/link";
import { useState } from "react";

function Catalog({ products }: any) {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const goods = products.map((item: any) => <Link key={item._id} href={`/${item._id}`}><CatalogItem data={item}/></Link>)

    return (
        <Wrapper>
            <Title>
                Каталог
            </Title>
            <Products>
                {goods}
            </Products>
        </Wrapper>
    )
}

export default Catalog;