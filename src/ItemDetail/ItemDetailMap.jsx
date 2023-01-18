import ItemDetaill from "./ItemDetail";
const ItemDetail = ({ productos }) => {
  return (
    <ul>
      <ItemDetaill producto={productos} />
    </ul>
  );
};
export default ItemDetail;
