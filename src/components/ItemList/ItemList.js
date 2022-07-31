import Item from "../Item/Item";

const ItemList = ({cocktails}) => {
    return(
   <ul className="list">
            {cocktails.map(drink => <Item key={drink.id} cocktail={drink}/>)}
    </ul> 
    )
}

export default ItemList;