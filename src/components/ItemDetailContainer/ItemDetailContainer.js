import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../services/firebase";

const ItemDetailContainer = () => {
    const [cocktail, setCocktails] = useState()

    const { cocktailId } = useParams()

      useEffect(() => { 

        getDoc(doc(database, 'cocktails', cocktailId)).then(response => {
          const data = response.data()
          const cocktailsAdapted = { id: response.id, ...data }
          setCocktails(cocktailsAdapted)
        })
      }, [cocktailId]);

    return(
      <div>
        <h2>{cocktail?.name}</h2>
        <ItemDetail {...cocktail} />
      </div>
    );
  };

  export default ItemDetailContainer;