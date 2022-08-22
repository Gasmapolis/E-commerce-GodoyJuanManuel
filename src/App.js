
import './App.css';
import NavBar from './components/NavBar/navBar';
import Title from './components/Text/title';

function App() {
  return (
    <div className="App">
      <header className="header">
      <Title msj="Mi primera App React" />
      <NavBar />
      </header>

    </div>
  );
}

export default App;
