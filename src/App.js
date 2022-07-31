import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter'
import Footer from './components/Footer/Footer';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es de ${quantity} unidades`)
  }

  return (
    <div className="App">
      

        <Navbar />
        <ItemListContainer />
        <Counter stock={10} onAdd={handleOnAdd}/>
        <Footer />

    </div>
  );
};


export default App;