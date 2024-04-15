//import logo from './logo.svg';
import './App.css';
import {Link,Route,Routes} from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ariklient from './pages/Ariklient';
import Esindused from './pages/Esindused';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';


function App() {
  return (
    <div className="App">
      
      <Link to="avaleht">
        <img className="pilt" src="https://joelkirsimaa.com/wp-content/uploads/2022/11/Nobe-car-@-Pirita.jpeg" alt="" />
      </Link>

      <Link to="esindused">
        <button className ="nupp"> Nupp </button>
      </Link>

      <Link to="arikliendile">
        <button className ="nupp"> Nupp </button>
      </Link>
      <Link to="osta-kinkekaart">
        <button className ="nupp"> Nupp </button>
      </Link>
      <Link to="ostukorv">
        <button className ="nupp"> Nupp </button>
      </Link>
      <Link to="seaded">
        <button className ="nupp"> Nupp </button>
      </Link>
      

    <Routes>
      <Route path="avaleht" element={<Avaleht/>} ></Route>
      <Route path="esindused" element={<Esindused/>} ></Route>
      <Route path="arikliendile" element={<Ariklient/>} ></Route>
      <Route path="osta-kinkekaart" element={<Kinkekaart/>} ></Route>
      <Route path="ostukorv" element={<Ostukorv/>} ></Route>
      <Route path="seaded" element={<Seaded/>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
