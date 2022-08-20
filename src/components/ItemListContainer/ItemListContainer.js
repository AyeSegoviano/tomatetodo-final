import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { database } from '../../services/firebase';

const ItemListContainer = ( { saludo } ) => {

    const [cocktails, setCocktails] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {

        const collectionRef = !categoryId ? collection(database, 'cocktails') : query(collection(database, 'cocktails'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            console.log(response)
            const cocktailsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data};
            })
            setCocktails(cocktailsAdapted)
             }).catch(error => {
                console.log(error)
            });
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