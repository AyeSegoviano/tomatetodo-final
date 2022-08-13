import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return ( 
            <Link to='/cart' className="cart-container">
                <img src='../img/cart.svg' alt='Carrito'/>
                <p className="cart-number">{ quantity }</p>
            </Link>

    )
}

export default CartWidget;