import { ItemListContainer, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Hola Mundo' />
    </div>
  );
}

export default App;
