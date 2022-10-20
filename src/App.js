import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import DibujosComplejos from './components/DibujosComplejos';
import DibujoComplejoArray from './components/DibujoComplejoArray';
import PadreDeportes from './components/PadreDeportes';

function App() {
  return (
    <div className="App">
     <Contador Inicio="1"></Contador>

     <DibujosComplejos></DibujosComplejos>

     <DibujoComplejoArray></DibujoComplejoArray>

  

     <PadreDeportes></PadreDeportes>
    </div>
  );
}

export default App;
