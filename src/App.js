import "./App.css";
import Navbar from "./components/navegacion/navbar";
import inicio from "./components/paginas/inicio";
import remeras from "./components/paginas/remeras";
import tazas from "./components/paginas/tazas";
import Cards from "./components/Cards/Cards";
import FlexWrapper from "./components/flexWrapper/flexWrapper";
import Button from "./components/button/Button";


import imgRemeras from "./assets/img/Remeras.png";
import GRIZZY from "./assets/img/GRIZZY.png";
import TazaRafa from "./assets/img/TazaRafa.png";
import Llaveros from './assets/img/llaveros.png'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>

      <hr />

      <FlexWrapper>
        
        <Cards
       
          title="Remeras"
          price={2000}
          detail="Remera de Gato"
          imgurl={imgRemeras}
        />
        <Cards
          title="Taza de Rafa"
          price={1200}
          detail="Taza Rafa 250ml"
          imgurl={TazaRafa}
        />
        <Cards
          title="Set de Jardin"
          price={1500}
          detail="Set de Jardin completo"
          imgurl={GRIZZY}
        />
        <Cards
          title="Llavero Argentina"
          price={500}
          detail="Llavero de camiseta argentina"
          imgurl={Llaveros}
        />
      </FlexWrapper>
      
      
    </>
  );
}

export default App;
