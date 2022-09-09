import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [cocktail, setCocktails] = useState();
  const [loading, setLoading] = useState(true);

  const { cocktailId } = useParams();

  useEffect(() => {
    getDoc(doc(database, "cocktails", cocktailId))
      .then((response) => {
        const data = response.data();
        const cocktailsAdapted = { id: response.id, ...data };
        setCocktails(cocktailsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cocktailId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h2>{cocktail?.name}</h2>
      <ItemDetail {...cocktail} />
    </div>
  );
};

export default ItemDetailContainer;
