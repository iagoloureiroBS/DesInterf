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
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen p-4 font-sans">

      <div className="max-w-md mx-auto space-y-3">

        <div className="flex justify-between items-center text-xs text-slate-600 dark:text-slate-300 pt-0.5">
          <span className="font-bold">
            Mostrando {pistas.length} pistas
          </span>

          <span className="text-xs font-extrabold text-ry-800 dark:text-emerald-300 bg-ry-100 dark:bg-emerald-950 px-2.5 py-0.5 rounded-md border border-ry-200 dark:border-emerald-800">
            Fútbol
          </span>
        </div>

        <div id="court-list-container" className="space-y-3">
          {pistas.map((pista) => (
            <Pista key={pista.id} pista={pista} />
          ))}
        </div>

      </div>
    </div>
  );
}