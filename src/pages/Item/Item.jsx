import { useEffect, useState } from "react";
import ItemList from "../../component/ItemList/ItemLIst";
import { useParams } from "react-router-dom";
import Loading from "../../component/Loading/Loading";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);
   const { category } = useParams();
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");
    if (category) {
      console.log(category)
      const newConfiguration = query(
        querySnapshot,
        where('category', '==', category)
      );

      getDocs(newConfiguration)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });

          setLoading(false);
          setProducts(data);
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setLoading(false);
          setProducts(data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <ItemList productos={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
