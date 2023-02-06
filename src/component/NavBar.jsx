import Nav from "react-bootstrap/Nav";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./StyleNavBar.css";

const NavBar = () => (
  <Nav fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="category/electronics">
        Electronica
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="category/jewelery">
        Joyas
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="category/men's clothing">
        Ropa de Hombre
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="category/women's clothing">
        Ropa de mujer
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="/cart">
        <CartWidget />
      </NavLink>
    </Nav.Item>
  </Nav>
);

export default NavBar;
