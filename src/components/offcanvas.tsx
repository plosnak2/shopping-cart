import { Offcanvas } from "react-bootstrap";
import { FC, useContext } from "react";
import { json } from "../data/json";
import { CartItem } from "./cartItem";
import { ShoppingContext } from "../context/shoppingContext";
import { ShoppingContextInterface } from "../types/Cart";

interface IProps {
    show: boolean;
    handleClose: () => void
}

export const CustomCanvas: FC<IProps> = ({show, handleClose}) => {
    const { items } = useContext(ShoppingContext) as ShoppingContextInterface

    const cartPrice = () : number => {
        let initialValue = 0
        const sumWithInitial = items.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price,
            initialValue
        );
        return sumWithInitial
    }

    const itemInCart = (name: string) : boolean => {
        let found = false
        items.forEach((item) => {
            if(item.name === name){
                console.log(items)
                found = true
            }
        })
        return found
    }   

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h3>Total amount: </h3>
                    <h3>{cartPrice()}€</h3>
                </div>
                {
                    json.map((item) => {
                        console.log(itemInCart(item.name))
                        return(
                            itemInCart(item.name) && <CartItem name={item.name} price={item.price} image={item.image}/>
                        )
                    })
                }
            </Offcanvas.Body>
        </Offcanvas>
    )      
};