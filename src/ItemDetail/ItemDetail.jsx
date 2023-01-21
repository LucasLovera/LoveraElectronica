  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
  
    // <Card>
    //   <Card.Header as="h5">${producto.price}</Card.Header>
    //   <Card.Body>
    //     <Card.Title>{producto.title}</Card.Title>
    //      <img className='w-10' src={producto.title} alt="" /><Card.Text >
           
    //     {producto.description}
    //     </Card.Text>
    //     <Button variant="primary">Comprar</Button>
    //   </Card.Body>
    // </Card>
}

export default ItemDetaill ;

// const Item = ({producto}) => {
//     return (
//       <li key={producto.id}>
//         <h2> {producto.title}</h2>
//         <h2> {producto.category}</h2>
//       </li>
//     );
//   };
//   export default Item;
