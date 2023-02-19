import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/ItemDetailMap";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "../../component/Loading/Loading";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "items", id);
    getDoc(querySnapshot)
      .then((reponse) => {
        setProducts({ id: reponse.id, ...reponse.data() });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div className="detail">
      {loading === true ? <Loading /> : <ItemDetail productos={products} />}
    </div>
  );
};

export default ItemDetailContainer;
