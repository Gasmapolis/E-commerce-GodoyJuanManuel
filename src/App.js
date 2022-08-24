
import './App.css';
import NavBar from './components/NavBar/navBar';
import Title from './components/Text/title';

import './components/NavBar/navBar.css'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="header">
      <Title msj="Mi primera App React" />
      <NavBar />
      </header>
      <body>
        <ItemListContainer greeting="Producto1" />
        <ItemListContainer greeting="Producto2" />
        <ItemListContainer greeting="Producto3" />
        <ItemListContainer greeting="Producto4" />
        <ItemListContainer greeting="Producto5" />
      </body>
    </div>
  );
}

export default App;
