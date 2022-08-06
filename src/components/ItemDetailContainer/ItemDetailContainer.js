import { useState, useEffect } from "react"
import { getCocktailsById } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [cocktail, setCocktails] = useState()

    const { cocktailId } = useParams()

      useEffect(() => { 
        getCocktailsById(cocktailId)
            .then(cocktail => {
             setCocktails(cocktail)
        })
        .catch(error => {
          console.log(error)
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