import logo from './logo.svg';
import './App.css';
import {router as RouterPage} from './components/router'
import { navbar as Navbar } from './components/navbars/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterPage/>
    </div>
  );
}

export default App;
