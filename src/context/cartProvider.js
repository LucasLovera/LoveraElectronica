import { useState } from "react";
import { cartContext } from "./cartContext";
import Swal from 'sweetalert2'
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    
    if(isInCart(item.id)){
      alert('El Producto ya esta Agregado!')
    } else {
    const newProduct = {
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: quantity,
      image: item.image,
      category : item.category,
      stock: item.stock,
      description: item.description
    };
    setCart([...cart, newProduct]);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto Agregado al carrito!',
      showConfirmButton: false,
      timer: 1500
    })
   
  }}
  const removeItem= (id)=>{
    setCart (cart.filter((product)=>product.id !==id))

  };
  function comprar() {
    setTimeout(() => {
    setCart([]);
    }, 1000);
    
  }
  function clear() {
    return setCart([]);
  }
  const isInCart = (id)=>{
    return cart.some((item)=> item.id === id)
  }

  return (
    <cartContext.Provider value={{ cart, addItem, clear, removeItem, comprar }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartProvider;
