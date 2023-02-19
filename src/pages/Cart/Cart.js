import { cartContext } from "../../context/cartContext";
import { useContext, useState } from "react";
import {
  collection,
  addDoc,
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, comprar } = useContext(cartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  if (cart.length === 0) {
    return <h1 className="m-5"> Carrito vacio </h1>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const querySnapshot = collection(db, "orders");
    const newOrder = {
      buyer,
      item: cart.map((product) => {
        const { name, price, id, quantity } = product;
        return { name, price, id, quantity };
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    };

    const updateStockProducts = () => {
      cart.forEach((product) => {
        const querySnapshot = doc(db, "products", product.id);
        updateDoc(querySnapshot, {
          stock: product.stock - product.quantity,
        })
          .then(() => {})
          .catch((error) => console.log(error));
      });
    };

    addDoc(querySnapshot, newOrder).then((response) => {
      updateStockProducts();
      });
  };
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return (
    <div className=" m-5">
      <div className="cart-container">
        <ul className="cart-list">
          {cart.map((product) => (
            <li key={product.id} className="cart-item">
              <img
                src={product.image}
                alt={product.name}
                className="cart-img"
              />
              <div className="cart-details">
                <p className="cart-name">{product.name}</p>
                <p className="cart-price">${product.price}</p>
                <p className="cart-quantity">Cantidad ={product.quantity}</p>
                <button
                  onClick={() => removeItem(product.id)}
                  className="cart-remove-button"
                >
                  Eliminar del Carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
        <div className="cart-clear-container">
          <button onClick={() => clear()} className="cart-clear-button">
            {" "}
            Vaciar Carrito
          </button>
        </div>
      </div>
      <h1 className="m-3">Total = $ {total}</h1>
      </div>
      <form onSubmit={handleSubmit} className="cart-form w-50 ">
        <input
          type="text"
          name="fullName"
          placeholder="Nombre Completo"
          value={buyer.name}
          onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
          className="cart-form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
          className="cart-form-input"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
          className="cart-form-input"
        />

        <button
          onClick={() => comprar()}
          type="submit"
          className="cart-form-button"
        >
          Comprar
        </button>
      </form>
    </div>
  );
};
export default Cart;
