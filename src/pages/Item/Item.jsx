import { useEffect, useState } from "react";
import ItemList from "../../component/ItemList/ItemLIst";
import { useParams } from "react-router-dom";
const ItemLisContainer = ({}) => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct]= useState([])
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
  // useEffect(() => {
  //   const filtroProductos = products.filter(
  //     (product) => product.category === category
  //   );
  //   setProducts(filtroProductos);
  // }, [category]);
  useEffect (()=>{
    if(category){
      const removeCaracter=category.includes('%20')
      ? category.replace('%20',' ')
      : category;
      const filterProduct = products.filter((product)=>{
        return product.category === removeCaracter;
      });
      setFilterProduct(filterProduct)
    }
  },[category])
  return (
    <div>
      <ItemList productos={category ? filterProduct: products} />
    </div>
  );
};

export default ItemLisContainer;
