import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDrinks } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = ({ saludo }) => {

  const { categoryId } = useParams();

  const getDrinksFromFirestore = () => getDrinks(categoryId)

  const { data, error, isLoading } = useAsync(getDrinksFromFirestore, [categoryId]);

  if(isLoading) {
    return <h1>Cargando productos...</h1>
}

if(error) {
    return <h1>Hubo un error</h1>
}

if(data.length === 0) {
    return categoryId ? <h1>No hay productos en la categoría {categoryId}</h1> : <h1>No hay productos disponibles</h1>
}
  
  return (
    <>
      <h2>{saludo}</h2>
      <div>
        <ItemList cocktails={data} />
      </div>
    </>
  );
};


export default ItemListContainer;
