import Nav from "react-bootstrap/Nav";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./StyleNavBar.css";

function NavBar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home
          </NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="category/electronics"
          >
            Electronica{" "}
          </NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="category/jewelery"
          >
            Joyas{" "}
          </NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="category/men's clothing"
          >
            Ropa de Hombre{" "}
          </NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="category/women's clothing"
          >
            Ropa de mujer{" "}
          </NavLink>
        </Nav.Link>
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
