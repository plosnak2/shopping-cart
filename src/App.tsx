import React, { useContext } from 'react';
import ShoppingProvider from './context/shoppingContext';
import { ShoppingContext } from './context/shoppingContext';
import { ShoppingContextInterface } from './types/Cart';
import { Navbar } from './components/navbar';

function App() {
  return (
    <ShoppingProvider>
      <Navbar />
    </ShoppingProvider>
  );
}

export default App;
