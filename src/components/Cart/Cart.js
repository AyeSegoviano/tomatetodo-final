import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext);

  const totalQuantity = getQuantity();
  const total = getTotal();

  if (totalQuantity === 0) {
    return (
      <p className="nada-carrito">
        No tenés nada en el carrito. ¿Qué estás esperando?
      </p>
    );
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <Link to="/checkout" className="boton-carrito">
        Finalizar compra
      </Link>
      <button onClick={() => clearCart()} className="boton-carrito">
        Limpiar carrito
      </button>
      <Link to="/" className="boton-carrito">
        Seguir comprando
      </Link>
    </div>
  );
};

export default Cart;
