import './ItemDetail.css';
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'


const Item = ({ id, name, img, description, price, stock }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd);
    }

    const productQuantity = getProductQuantity(id)
   
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
    <div>

            {
                quantityToAdd === 0 ? (
                    <Counter onAdd={ handleOnAdd } stock={stock} initial={productQuantity}/>
                ) : (
                    <Link to='/cart'>Finalizar compra</Link>
                    )
            }
    </div>
</div>
    );
};


export default Item;