
import Pista from './Pista';

export default function App() {
  const pistas = [
    {
      id: 1,
      nome: "Podenco",
      etiqueta: "Popular",
      puntuacion: "4.9 (84)",
      direccion: "C/ Podenco, 14",
      distancia: "1.2",
      precio: "26",
      tipo: "Césped Sintético",
      disponibilidad: "Disponible hoy",
      disponible: true
    },
    {
      id: 2,
      nome: "Miraflores",
      etiqueta: "Económica",
      puntuacion: "4.7 (42)",
      direccion: "C/ Miraflores, 8",
      distancia: "2.5",
      precio: "18",
      tipo: "Pista Cubierta",
      disponibilidad: "Disponible hoy",
      disponible: true
    },
    {
      id: 3,
      nome: "Olimpia",
      etiqueta: "Premium",
      puntuacion: "4.8 (110)",
      direccion: "Av. De la Dehesa, 2",
      distancia: "3.8",
      precio: "30",
      tipo: "Iluminación Led",
      disponibilidad: "Últimas 2 horas",
      disponible: false
    }
  ]

  return (
    <div id="court-list-container" className="space-y-3">
      <h1 className="font-bold">Mostrando 3 pistas</h1>
      {pistas.map((pista) => (<Pista key={pista.id} pista={pista} />))}
    </div>
  );
}


function Item({ name, isPacked }) {
  if(isPacked){
  return (
    <li className="item">
      {name} {isPacked ? '✅' : 'X'}
    </li>
    );
  }
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Traje de vuelo" 
        />
        <Item 
          isPacked={true} 
          name="Casco con dorado a la hoja" 
        />
        <Item 
          isPacked={false} 
          name="Fotografía de Tam" 
        />
      </ul>
    </section>
  );
}

function Item({ name, importance }) {
  return (
    <li className="item">
      {importance > 0 ? <i>name</i> : name}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item 
          importance={9} 
          name="Traje de vuelo" 
        />
        <Item 
          importance={0} 
          name="Casco con dorado a la hoja" 
        />
        <Item 
          importance={6} 
          name="Fotografía de Tam" 
        />
      </ul>
    </section>
  );
}


const bebidas={
  té:{
    parte: 'hoja',
    cafeina: '1000'
  }
}
function Drink({ name }) {
  let part, caffeine, age
  if(name === 'té'){
    part = 'hoja'
    caffeine = 'grano'
  } else i
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{name === 'té' ? 'hoja' : 'grano'}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{name === 'té' ? '15–70 mg/taza' : '80–185 mg/taza'}</dd>
        <dt>Antigüedad</dt>
        <dd>{name === 'té' ? '4,000+ años' : '1,000+ años'}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}