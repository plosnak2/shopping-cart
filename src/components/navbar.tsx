import { FC, useContext, useState} from "react";
import { ShoppingContext } from "../context/shoppingContext";
import { ShoppingContextInterface } from "../types/Cart";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from 'react-icons/fi';
import './styles.css';
import { CustomCanvas } from "./offcanvas";

export const CustomNavbar: FC = ({}) => {
    const { items } = useContext(ShoppingContext) as ShoppingContextInterface;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <CustomCanvas show={show} handleClose={handleClose}/>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding:0}}>
                <Container>
                    <Navbar.Brand>React-Typescript-Shopping Cart</Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <div className="cart" onClick={handleShow}>
                                <FiShoppingCart size={20} color="black"/>
                                {
                                    items.length === 0 ? null : <div className="indicator">{items.length}</div>
                                }
                            </div>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};