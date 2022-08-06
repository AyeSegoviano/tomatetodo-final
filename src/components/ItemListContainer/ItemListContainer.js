import { useState, useEffect } from 'react';
import { getCocktails, getCocktailsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ( { saludo } ) => {

    const [cocktails, setCocktails] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getCocktailsByCategory : getCocktails

        asyncFunction(categoryId).then(cocktails => {
            setCocktails(cocktails)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])


    return (
        <>
        <h2>{saludo}</h2> 
        <div>
         <ItemList cocktails={cocktails}/> 
        </div>   
        </>
         )
};

export default ItemListContainer;