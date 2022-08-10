import './CartWidget.css'

const CartWidget = () => {

    return ( 
            <div className="cart-container">
                <img src='../img/cart.svg' alt='Carrito'/>
                <p className="cart-number">0</p>
            </div>

    )
}

export default CartWidget;