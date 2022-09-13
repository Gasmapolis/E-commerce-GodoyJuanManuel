
import './App.css';
import NavBar from './components/NavBar/navBar';
import Title from './components/Text/title';

import './components/NavBar/navBar.css'; 
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/container/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="header">
          <Title msj="Primera app" />
          <NavBar />
        </nav>
        <body className="d-flex justify-content-center">
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/producto/:productoId" element={<ItemDetailContainer />}/>

          </Routes>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
