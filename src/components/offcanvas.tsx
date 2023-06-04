import { Offcanvas } from "react-bootstrap";
import { FC } from "react";
import { json } from "../data/json";

interface IProps {
    show: boolean;
    handleClose: () => void
}

export const CustomCanvas: FC<IProps> = ({show, handleClose}) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                
            </Offcanvas.Body>
        </Offcanvas>
    )      
};