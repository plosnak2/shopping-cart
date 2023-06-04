import { FC, useContext } from "react";
import { IItem } from "../types/Cart";
import './styles.css'
import { ShoppingContext } from "../context/shoppingContext";
import { ShoppingContextInterface } from "../types/Cart";
import Button from 'react-bootstrap/Button';

export const CartItem: FC<IItem> = ({name, image, price}) => {
    const { items, addItem, removeItem } = useContext(ShoppingContext) as ShoppingContextInterface

    const itemsInCart = (name: string): number => {
        if (items.some(e => e.name === name)) {
            return items.filter(e => e.name === name).length
        }
        return 0
    }

    return (
        <div className="cartItem">
            <img src={image} alt="placeholder"/>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <h3>{name}</h3>
                <p>{price}€</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <p>Pieces in cart: {itemsInCart(name)}</p>
                <div style={{display:"flex"}}>
                    <Button variant="success" onClick={() => addItem({name: name, image: image, price: price})}>+</Button>
                    <div style={{width:"5px"}}></div>
                    <Button variant="success" onClick={() => removeItem({name: name, image: image, price: price})}>-</Button>
                </div>
            </div>
        </div>
    )      
};