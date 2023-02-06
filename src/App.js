import React from "react";
import "./App.css";
import Brand from "./component/brand";
import NavBar from "./component/NavBar";
import ItemLisContainer from "./pages/Item/Item";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/cartProvider";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Brand />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemLisContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemLisContainer />} />
          <Route path="cart" element = {<Cart />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
