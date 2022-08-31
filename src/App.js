import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <div className="App">
      
      <CartContextProvider>
        <BrowserRouter> 
           <Navbar />

            <Routes>
              <Route path='/' element= {<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
              <Route path='/detail/:cocktailId' element= {<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/> 
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 - La página no existe... todavía 😏</h1>} /> 
            </Routes>

           <Footer />
        </BrowserRouter>
     </CartContextProvider>


    </div>
  );
};


export default App;