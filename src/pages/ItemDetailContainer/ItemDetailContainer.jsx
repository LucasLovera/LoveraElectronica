import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/ItemDetailMap";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();
 
  const getProducts = ()=> {
    const db = getFirestore();
    const querySnapshot= doc(db, "products", id)
    getDoc(querySnapshot)
    .then((reponse)=>{
      setProducts({id: reponse.id, ...reponse.data()})

    })
    .catch((error)=>{console.log(error)})
  }
  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div>
      <ItemDetail productos={products} />
    </div>
  );
};

export default ItemDetailContainer;
