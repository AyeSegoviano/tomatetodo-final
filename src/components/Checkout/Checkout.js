import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { database } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext) 

    const volverAlInicio = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: 'Aye',
                    lastName: 'Segoviano',
                    phone: '123456789',
                    address: 'CalleFalsa 123'
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(database, 'cocktails')
    
            const agregadoDesdeFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = agregadoDesdeFirestore
    
            const fueraDeStock = []
    
            const batch = writeBatch(database)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDatabase = dataDoc.stock
    
                const agregadoAlCarrito = cart.find(prod => prod.id === doc.id)
                const prodQuantity = agregadoAlCarrito?.quantity
    
                if(stockDatabase >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDatabase - prodQuantity})
                } else {
                    fueraDeStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(fueraDeStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(database, 'orders')
                const ordenAgregada = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${ordenAgregada.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    volverAlInicio('/')
                }, 3000)
            } else {
                console.log('Algunos productos están fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>Tu orden está siendo generada...</h1>
    }

    if(orderCreated) {
        return <h1>¡Orden generada correctamente!</h1>
    }

    return (
        <>
            <h2>Finalizá tu compra</h2>
            <button onClick={createOrder} className="boton-carrito">Generar Orden</button>
        </>
    )
};

export default Checkout;