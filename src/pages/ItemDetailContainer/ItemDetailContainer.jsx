import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../../ItemDetail/ItemDetailMap";
const ItemDetailContainer = ({}) => {
  const [products, setProducts] = useState({});
  const [filterProduct, serFilterProduct]= useState([])
  const {category} = useParams ();
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
  useEffect (()=>{
    if(category){
      const removeCaracter=category.includes('%20')
      ? category.replace('%20',' ')
      : category;
      const filterProduct = products.filter((product)=>{
        return product.category === removeCaracter;
      });
      serFilterProduct(filterProduct)
    }
  },[category])
  return (
    <div>
      <ItemDetail productos={category ? filterProduct: products} />
    </div>
  );
};

export default ItemDetailContainer;
