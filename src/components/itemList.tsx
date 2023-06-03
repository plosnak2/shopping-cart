import { FC } from "react";
import { json } from "../data/json";
import { CustomCard } from "./card";

export const ItemList: FC = ({}) => {
    return (
        <div className="container main">
            <div className="items">
            {
                json.map((item, index) => {
                    return(
                    <CustomCard name={item.name} image={item.image} price={item.price}/>
                    )
                })
            }
            </div>
        </div>
    );
};