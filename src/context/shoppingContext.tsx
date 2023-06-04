import * as React from 'react';
import { ShoppingContextInterface, IItem } from '../types/Cart';

export const ShoppingContext = React.createContext<ShoppingContextInterface | null>(null);

interface Props {
    children: React.ReactNode;
  }

const ShoppingProvider: React.FC<Props> = ({ children }) => {
    const [items, setItems] = React.useState<IItem[]>([]);

    const addItem = (item: IItem) => {
        setItems([...items, item])
        return
    }

    const removeItem = (item: IItem) => {
        let index = -1
        items.map((it, ind) =>{
          if(it.name === item.name){
            index = ind
          }
        })
        let array = [...items]
        array.splice(index, 1)
        setItems(array)
        console.log(items)
        return
    }

    return <ShoppingContext.Provider value={{ items, addItem, removeItem }}>{children}</ShoppingContext.Provider>;
  };
  
  export default ShoppingProvider;