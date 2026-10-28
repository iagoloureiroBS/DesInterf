/*
const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 },
  { id: 2, nome: "Rato", prezo: 15 },
];
*/
// <></> Raiz
// T mayus en tenda
//class < className
//key en el map
// "/" faltante en logo.png

/*export default function Tenda() {
  return (
    <>
      <h1 className="titulo">Tenda</h1>
      <img src="/logo.png" alt="Logo" />
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.nome} - {p.prezo} €
          </li>
        ))}
      </ul>
    </>
  );
}
*/
/*
export default function Persona() {
  const nome = "Lucío Pérez"
  const rol = "Deseñadore web"
  const foto = "/foto.png"
  const inicio = 2019

  return (
    <>
      <h1 style={{fontSize: "40px"}}>{nome}</h1>

      <img src={foto} alt={`Foto de ${nome}`} className="foto" width={200} />

      <p className="rol">{rol}</p>

      <label htmlFor="correo">Correo</label>

      <input id="correo" type="email"/>
      
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <p style={{fontSize: "24px"}}>Años de experiencia: {2026 - inicio} años</p>
    </>
  );
}

export default function Perfil() {
  const nome = "Iago"
  const foto = "/producto.png"
  const descripcion = "Desarrollador"
 

  return(
    <>
    <h1 style={{fontSize: "40px"}}>{nome}</h1>

    
    </>
  )
}


function Cadrado({valor}) {
  

  const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      {valores.map((valor) => <button key={valor} className="square">{valor}</button>)}
    </>
    )
}



export default function Taboleiro() {

  return (    
  <>
    <div className="board-row">
        <Cadrado />
    </div>
  </>);
}


function Avatar({}){}

import { getImageUrl } from "./utils.js";

function Profile({ persona, tamImagen = 70 }) {
  return (
    <section className="profile">
      <h2>{persona.nombre}</h2>
      <img
        className="avatar"
        src={getImageUrl(persona.imagen)}
        alt={persona.nombre}
        width={tamImagen}
        height={tamImagen}
      />
      <ul>
        <li>
          <b>Profesión: </b>
          {persona.profesion}
        </li>
        <li>
          <b>Premios: {persona.premios.length}</b> ({persona.premios.join(", ")}
          )
        </li>
        <li>
          <b>Descubrió: </b>
          {persona.descubrimiento}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile
        persona={{
          nombre: "Maria Skłodowska-Curie",
          imagen: "szV5sdG",
          profesion: "Física y química",
          premios: [
            "Premio Nobel de Física",
            "Premio Nobel de Química",
            "Medalla Davy",
            "Medalla Matteucci",
          ],
          descubrimiento: "polonio (elemento químico)",
        }}
      />
      <h1>Científicos Notables</h1>
      <Profile
        persona={{
          nombre: "Katsuko Saruhashi",
          imagen: "YfeOqp2",
          profesion: "geoquímica",
          premios: ["Premio Miyake de geoquímica", "Premio Tanaka"],
          descubrimiento:
            "un método para medir el dióxido de carbono en el agua de mar",
        }}
      />
    </div>
  );
}
*/

/*
const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 },
  { id: 2, nome: "Rato", prezo: 15 },
];

export default function Tenda() {
  return (
    <>
      <h1 className="titulo">Tenda</h1>
      <img src="logo.png" alt="Logo" />
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>{p.nome} - {p.prezo} €</li>
        ))}
      </ul>
    </>
  );
}

export default function App() {
  const nome = "Lucía Pérez";
  const rol = "Deseñadora web";
  const foto = "foto.jpg";
  const inicio = 2019;

  return (
    <>
      <h1>{nome}</h1>
      <img src={foto} alt={nome} className="foto" />
      <p className="rol">{rol}</p>

      <label htmlFor="correo">Correo</label>
      <input id="correo" type="email" tabIndex="1" />

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <p style={{ color: "gray", fontSize: "14px" }}>
        Dispoñible para proxectos ({2026 - inicio} anos de experiencia)
      </p>
    </>
  );
}

export default function App() {
  const tituloPagina = "Perfil de Desenvolvedor";
  const fotoPerfil = "foto.jpg";
  const nivelActual = "2º curso";
  const anoInicio = 2024;

  return (
    <>
      <h1>{tituloPagina}</h1>
      <img src={fotoPerfil} alt={tituloPagina} />

      <p>Benvido á miña páxina persoal feita con React.</p>
      <p>Actualmente estou estudando {nivelActual} de DAM.</p>
      <p>Levo xa {2026 - anoInicio} anos aprendendo a programar e preparando o proxecto de fin de ciclo.</p>

      <ul>
        <li>Desenvolvemento de interfaces con React</li>
        <li>Programación multimedia e dispositivos móbiles</li>
        <li>Sistemas de xestión empresarial (ERP/CRM)</li>
        <li>Acceso a datos e servizos REST</li>
      </ul>
    </>
  );
}

const linguaxes = [
  { id: 0, nome: "JavaScript", tipo: "interpretada", ano: 1995 },
  { id: 1, nome: "Java", tipo: "compilada", ano: 1995 },
  { id: 2, nome: "Python", tipo: "interpretada", ano: 1991 },
  { id: 3, nome: "C", tipo: "compilada", ano: 1972 },
  { id: 4, nome: "PHP", tipo: "interpretada", ano: 1995 },
  { id: 5, nome: "Go", tipo: "compilada", ano: 2009 },
];

export default function App() {
  const elementos = linguaxes.filter(tipo => tipo === "interpretada").map((linguaxe) => (
    <li key={linguaxe.id}>
      <b>{linguaxe.nome}</b> ({linguaxe.tipo}, {linguaxe.ano})
    </li>
  ));

  return (
    <article>
      <h1>Linguaxes de programación</h1>
      <ul>{elementos}</ul>
    </article>
  );
}
*/
// RETO 2 · Listas aniñadas nun só compoñente
//
// Cada playlist ten un array de cancións, pero agora só se mostra o seu nome.
// Cambia o compoñente para que debaixo de cada nome apareza a lista das súas cancións.
//
// Como usalo: copia este código en src/App.jsx.
// Comproba que non hai avisos na consola do navegador.

const playlists = [
  {
    id: 1,
    nome: "Para estudar",
    cancions: ["Mañá de luns", "Bosque de cores", "Cafeteira"],
  },
  {
    id: 2,
    nome: "Para correr",
    cancions: ["Tren de medianoite", "Ritmo de présa", "Costa arriba", "Meta"],
  },
  {
    id: 3,
    nome: "Para cociñar",
    cancions: ["Sal e pementa", "Lume lento"],
  },
];

export default function App() {
  const elementos = playlists.map((playlist) => (
    <section key={playlist.id}>
      <h2>{playlist.nome}</h2>
      {playlist.cancions.map(cancions => (<p>{cancions}</p>))}
    </section>
  ));

  return (
    <article>
      <h1>As miñas playlists</h1>
      {elementos}
    </article>
  );
}
