import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (cocktailToAdd) => {
        if(!isInCart(cocktailToAdd.id)) {
            setCart([...cart, cocktailToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === cocktailToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: cocktailToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getQuantity = () => {
        let acumular = 0

        cart.forEach(prod => {
        acumular += prod.quantity
        })

        return acumular
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    
    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;