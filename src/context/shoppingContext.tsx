import * as React from 'react';
import { ShoppingContextInterface, IItem } from '../types/Cart';

export const ShoppingContext = React.createContext<ShoppingContextInterface | null>(null);

interface Props {
    children: React.ReactNode;
  }

const ShoppingProvider: React.FC<Props> = ({ children }) => {
    const [items, setItems] = React.useState<IItem[]>([]);

    const addItem = (item: IItem) => {
        console.log("adding item")
        return
    }

    const removeItem = (item: IItem) => {
        console.log("deleting item")
        return
    }

    return <ShoppingContext.Provider value={{ items, addItem, removeItem }}>{children}</ShoppingContext.Provider>;
  };
  
  export default ShoppingProvider;