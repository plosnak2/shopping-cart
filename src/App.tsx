import React, { useContext } from 'react';
import ShoppingProvider from './context/shoppingContext';
import { ShoppingContext } from './context/shoppingContext';
import { ShoppingContextInterface } from './types/Cart';
import { CustomNavbar } from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ShoppingProvider>
      <CustomNavbar />
    </ShoppingProvider>
  );
}

export default App;
