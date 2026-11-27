import './App.css'
import { useState } from "react";
import Button from './Button.jsx'
import { sculptureList } from './data.jsx';



export default function Galeria() {

  const [index, setIndex] = useState(0);


  function onSeguinteClick() {
    if (index < sculptureList.length -1){
      setIndex (index+1);
    }else {
      setIndex(0);
    }
    console.log(sculptureList.length);
  }


  function onDetalles() {
  }



  let escultura = sculptureList[index];
  return (
    <>
      <Button onClick={onSeguinteClick}> Seguinte </Button>
      <h2>{escultura.name}</h2>
      <Button onClick={onDetalles}>Amosar detalles</Button>
      <p>{escultura.description}</p>
      <img src={escultura.url} alt={escultura.alt} className="imagen"/>
      <h3>Imaxe {index+1} de {sculptureList.length}</h3>
    </>
  );
}

