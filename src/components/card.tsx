import { FC, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IItem } from "../types/Cart";
import './styles.css';
import { ShoppingContext } from "../context/shoppingContext";
import { ShoppingContextInterface } from "../types/Cart";


export const CustomCard: FC<IItem> = ({name, image, price}) => {
    const { items, addItem, removeItem } = useContext(ShoppingContext) as ShoppingContextInterface

    const itemsInCart = (name: string): number => {
        if (items.some(e => e.name === name)) {
            return items.filter(e => e.name === name).length
        }
        return 0
    }
    return (
        <Card className="item">
            <Card.Img variant="top" src={image} style={{objectFit:"cover", height:"100%"}}/>
            <Card.Body>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}€</Card.Title>
                </div>
                {
                    itemsInCart(name) === 0 ? <div style={{paddingTop:"1.51px", paddingBottom:"1.51px"}}><Button variant="success" onClick={() => addItem({name: name, image: image, price: price})}>Add to cart</Button></div> : 
                    <div className="card-adder">
                        <Button variant="success" onClick={() => addItem({name: name, image: image, price: price})}>+</Button>
                        <p>In cart: {itemsInCart(name)}</p>
                        <Button variant="success" onClick={() => removeItem({name: name, image: image, price: price})}>-</Button>
                    </div>
                }
            </Card.Body>
        </Card>
    );
};