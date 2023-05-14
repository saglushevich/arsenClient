import { Wrapper, Menu, MenuItem, Button, Buttons } from "./styled";
import Link from "next/link";

function Header() {
    return (
        <Wrapper>
            <Menu>
                <MenuItem href={"/"}>Все товары</MenuItem>
                <MenuItem href={"/category/phone"}>Телефоны</MenuItem>
                <MenuItem href={"/category/laptop"}>Ноутбуки</MenuItem>
                <MenuItem href={"/category/headphones"}>Наушники</MenuItem>
                <MenuItem href={"/category/tv"}>Телевизоры</MenuItem>
                <MenuItem href={"/category/other"}>Другое</MenuItem>
            </Menu>
            <Buttons>
                <Link href="/cart"><Button>Корзина</Button></Link>
            </Buttons>
        </Wrapper>
    )
}

export default Header;