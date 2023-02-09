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
      <NavLink className="nav-link" to="category/akai">
        Akai
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="category/arturia">
        Arturia
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="category/korg">
        Korg
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink className="nav-link" to="category/nektar">
        Nektar
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
