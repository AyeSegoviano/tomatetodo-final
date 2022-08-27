import './Cart.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
const Cart = () => {
    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext)  

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <p className='nada-carrito'>No tenés nada en el carrito.
            ¿Qué estás esperando?
            </p>
        )
    }

    return (     
        <div>
            <h1>Carrito de Compras</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="boton-carrito">Limpiar carrito</button>
        </div>
    )
}

export default Cart;