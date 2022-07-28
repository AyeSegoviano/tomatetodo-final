import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">

        <Navbar />
        <ItemListContainer saludo='Sitio en construcción'/>

    </div>
  );
};


export default App;