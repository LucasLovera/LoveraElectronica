import "./ItemDetail.css"

function  ItemDetaill({producto}) {
  return (
    <div className='card'>
      <img src={producto.image} alt="" />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <button onClick={() => alert("Producto comprado!")}>Comprar</button>
    </div>
  );
  
}

export default ItemDetaill ;
