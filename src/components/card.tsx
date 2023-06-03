import { FC } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IItem } from "../types/Cart";
import './styles.css';


export const CustomCard: FC<IItem> = ({name, image, price}) => {
    return (
        <Card className="item">
            <Card.Img variant="top" src={image} style={{objectFit:"cover", height:"100%"}}/>
            <Card.Body>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}€</Card.Title>
                </div>
                <Button variant="success">Add to cart</Button>
            </Card.Body>
        </Card>
    );
};