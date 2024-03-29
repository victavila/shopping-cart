import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Nav from './components/Nav';
import { calculateTotals } from './features/cartSlice';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  const { cartItems } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/shopping-cart/" element={<Home />} />
          <Route path="/shopping-cart/shop" element={<Shop />} />
          <Route path="/shopping-cart/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
