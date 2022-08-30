
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
      <body className='d-flex justify-content-center'>
        <ItemListContainer greeting="Productos" />
      </body>
    </div>
  );
}

export default App;
