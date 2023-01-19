import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../../ItemDetail/ItemDetailMap";
const ItemDetailContainer = ({}) => {
  const [products, setProducts] = useState({});
  const [filterProduct, serFilterProduct]= useState([])
  const {id}= useParams();
  const getProduct =  fetch(`https://fakestoreapi.com/products/${id}`, { method: 'GET' ,});
  useEffect(() => {
   getProduct
      .then((res) => {
        return res.json();
      })
      .then((reponse) => {
        console.log(reponse);
        setProducts(reponse);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ItemDetail productos={products} />
    </div>
  );
};

export default ItemDetailContainer;
