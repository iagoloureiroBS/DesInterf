
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

