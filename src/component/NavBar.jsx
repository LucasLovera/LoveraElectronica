import Nav from "react-bootstrap/Nav";
import { CartWidget } from "./CartWidget";

function NavBar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">PCs y Laptops </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Audio</Nav.Link>
      </Nav.Item><Nav.Item>
        <Nav.Link eventKey="link-3">Hogar</Nav.Link>
      </Nav.Item><Nav.Item>
        <Nav.Link eventKey="link-4">Celulares</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">
          <CartWidget />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
