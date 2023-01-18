  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function  ItemDetaill({producto}) {
  return (
    <Card>
      <Card.Header as="h5">{producto.title}</Card.Header>
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
            <img src={producto.image} alt="" />
        {producto.description}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
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
