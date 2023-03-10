import Item from "../Item/Items";
import "./style.css";
const ItemList = ({ productos }) => {
  return (
    <ul className="map">
      {productos.map((producto) => (
        <Item key={producto.id} className="map" producto={producto} />
      ))}
    </ul>
  );
};
export default ItemList;
