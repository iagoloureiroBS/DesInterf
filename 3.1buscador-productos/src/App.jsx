
import { useState } from 'react';


const PRODUCTOS = [
  'Teclado mecánico',
  'Rato sen fíos',
  'Monitor 4K',
  'Auriculares bluetooth',
  'Alfombrilla RGB',
  'Cámara web HD'
];


function BarraBusca({ textoBusca, setTextoBusca }) {
  return (
    <input
      type="text"
      placeholder="Buscar produtos..."
      value={textoBusca}
      onChange={(e) => setTextoBusca(e.target.value)}
    />
  );
}


function ListaProductos({ productos, textoBusca }) {
  if (productos.length === 0) {
    return (
      <p>Non se atoparon resultados para: {textoBusca}</p>
    );
  }

  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto}>{producto}</li>
      ))}
    </ul>
  );
}


function App() {
  const [textoBusca, setTextoBusca] = useState('');

  const productosFiltrados = PRODUCTOS.filter((producto) =>
    producto.toLowerCase().includes(textoBusca.toLowerCase())
  );

  return (
    <div>
      <h1>Buscador de produtos</h1>

      <BarraBusca
        textoBusca={textoBusca}
        setTextoBusca={setTextoBusca}
      />

      <ListaProductos
        productos={productosFiltrados}
        textoBusca={textoBusca}
      />
    </div>
  );
}

export default App;

