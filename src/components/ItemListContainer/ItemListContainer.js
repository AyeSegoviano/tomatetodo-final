import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getCocktails } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ( { saludo } ) => {
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        getCocktails().then(cocktails => {
            setCocktails(cocktails);
        })
    }, [])

   // const cocktailsComp = cocktails.map(drink => <li key={drink.id}>{drink.name}</li>)

    return (
        <div>
        <h1>{saludo}</h1> 
        <ItemList cocktails={cocktails}/>
        </div>   
         )
};

export default ItemListContainer;