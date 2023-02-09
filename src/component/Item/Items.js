import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({producto}) {
  return (
    <Card key={producto.id} style={{ width: '18rem' }}>
      <Card.Img className='itemImage' variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>$
        {producto.price}
        </Card.Text> 
        <Link key={producto.id} to={`/item/${producto.id}`}>
        <Button variant="primary">VER MAS</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;