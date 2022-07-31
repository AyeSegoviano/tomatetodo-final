//import { getCocktails } from "../../asyncMock";

const Item = ({cocktail}) => {
    return (
<div className="section-container">
    <div className="card-container">
        <div className="card">
                <img className="card-img-top" src={cocktail.img} alt={cocktail.name} />
            <div className="card-body">
                 <h3 className="card-title">{cocktail.name}</h3>
                 <p className="card-text">{cocktail.description}</p>
                 <button className="btn-ver-receta">Ver receta</button>
            </div>
        </div>
    </div> 
</div>
    
    )
}

export default Item;