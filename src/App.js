import './App.css';
import Brand from './component/brand';
import NavBar from'./component/NavBar';
import { ItemListContainer } from './component/ItemListContainer';

function App() {
  return (
    <div className="App">
  <Brand/>
  <NavBar/>
  <ItemListContainer title="Sean Bienvenidos"/>
    </div>
  );
}

export default App;
