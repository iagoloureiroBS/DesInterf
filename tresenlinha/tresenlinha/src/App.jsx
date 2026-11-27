import './App.css'
import Toolbar from './Toolbar.jsx'
import Galeria from './Galeria.jsx'
import Cabeceira from "./Cabeceira.jsx";
import ProductoList from "./ProductoList.jsx";
import { productos  } from "./Productos";




export default function App() {
  return (
    <>
    {/* <Toolbar 
      onPelicula = {() => alert('Reproducindo!')}
      onImaxe = {() => alert('Cargando imaxe!')}
    />     */}
    <Cabeceira />
      <h2>Perifericos </h2>
      const perifericos = productos.filter((p) => p.category=="Periféricos")
      <ProductoList productos={perifericos}/>
      <h2>Dispoñibles </h2>
      const dispoñibles = productos.filter((p) => p.stock.status=="dispoñible")
      <ProductoList productos={dispoñibles}/>
    <Galeria />
  </>
  );
}

