import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import './Cart.css'

const Cart =()=> {
    const { cart, removeItem, clear } = useContext(cartContext)
    if (cart.length ===0){
      return (<h1> Carrito vacio </h1>)
    }
return (<div>
    <ul className="cart-list">
    {cart.map(product => (
      <li key={product.id} className="cart-item">
        <img src={product.image} alt={product.name} className="cart-img"/>
        <div className="cart-details">
          <p className="cart-name">{product.name}</p>
          <p className="cart-price">{product.price}</p>
          <p>{ product.quantity}</p>
          <button onClick={()=>removeItem(product.id)}>Eliminar del Carrito</button>
        </div>
      </li>
    ))}
  </ul>
  <div> 
<button onClick={()=>clear()}> Vaciar Carrito</button>
  </div>
  </div>
);
};

export default Cart 