import React, { useContext } from 'react';
import ShoppingProvider from './context/shoppingContext';
import { ShoppingContext } from './context/shoppingContext';
import { ShoppingContextInterface } from './types/Cart';
import { CustomNavbar } from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomCard } from './components/card';
import { ItemList } from './components/itemList';

function App() {
  return (
    <ShoppingProvider>
      <CustomNavbar />
      <ItemList />
    </ShoppingProvider>
  );
}

export default App;
