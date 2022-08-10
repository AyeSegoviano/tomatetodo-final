import Counter from '../Counter/Counter';
import './ItemDetail.css';

const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es de ${quantity} unidades`);
  };

const Item = ({ id, name, img, description, price }) => {
   
    return (

        <div className="section-container">
    <div className="card-container">
        <div className="card">
                <img className="card-img-top" src={img} alt={name} />
            <div className="card-body">
                 <h3 className="card-title">{name}</h3>
                 <p className="card-text">{description}</p>

                 <p className="precio">
                    Precio: ${price}
                </p>
            </div>
        </div>
    </div> 
    <Counter stock={10} onAdd={handleOnAdd}/>
</div>
    );
};


export default Item;