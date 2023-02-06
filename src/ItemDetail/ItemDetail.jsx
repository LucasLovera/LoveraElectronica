import "./ItemDetail.css"
import ItemCount from "../component/ItemCount/ItemCount";
import { useState, useContext } from "react";
import { cartContext } from "../context/cartContext";

function  ItemDetaill({producto}) {
const [contador, setContador]= useState(1);
const {addItem} = useContext(cartContext)
const stock = 4 ;
  return (
    <div className='card'>
      <img  className='detailImage' src={producto.image} alt="" />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <ItemCount contador = {contador} setContador= {setContador} stock ={stock}/>
     
      <button onClick={()=> addItem(producto, contador)} className="m-3">Agregar al Carro</button>
    </div>
  );
  
}

export default ItemDetaill ;
