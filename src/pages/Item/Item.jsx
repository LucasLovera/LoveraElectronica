import { useEffect, useState } from "react";
import ItemList from "../../component/ItemList/ItemLIst";
import { useParams } from "react-router-dom";
const ItemLisContainer = ({}) => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((reponse) => {
        console.log(reponse);
        setProducts(reponse);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const filtroProductos = products.filter(
      (product) => product.category === category
    );
    setProducts(filtroProductos);
  }, [category]);
  return (
    <div>
      <ItemList productos={products} />
    </div>
  );
};

export default ItemLisContainer;
