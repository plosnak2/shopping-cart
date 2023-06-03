import { FC, useContext} from "react";
import { ShoppingContext } from "../context/shoppingContext";
import { ShoppingContextInterface } from "../types/Cart";

export const Navbar: FC = ({}) => {
    const { items, addItem } = useContext(ShoppingContext) as ShoppingContextInterface;
    return (
        <div>
            Navbar
        </div>
    );
};