import { useState } from "react";
import { cartContext } from "./cartContext";
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    
    if(isInCart(item.id)){
      alert('Producto Agregado')
    } else {
    const newProduct = {
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: quantity,
      image: item.image
    };
    setCart([...cart, newProduct]);
   
  }}
  const removeItem= (id)=>{
    setCart (cart.filter((product)=>product.id !=id))

  };
  const clear =()=>
  setCart([]);
  const isInCart = (id)=>{
    return cart.some((item)=> item.id === id)
  }

  return (
    <cartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartProvider;
