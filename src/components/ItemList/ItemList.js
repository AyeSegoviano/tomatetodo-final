import Item from "../Item/Item";

const ItemList = ({cocktails}) => {
    return(
   <div className="list">
            {cocktails.map(drink => <Item key={drink.id} {...drink}/>)}
    </div> 
    )
}

export default ItemList;