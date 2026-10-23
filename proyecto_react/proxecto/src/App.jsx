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


export default function Pista() {
  const selectCourt = (name, price, address, rating) => {
    // Función de exemplo para xestionar o click
    console.log(`Seleccionado: ${name}`);
  };

  return (
    <div
      data-category="sintetico luz"
      data-name="pista podenco c/ podenco 14"
      onClick={() => selectCourt('Pista Podenco', 26, 'C/ Podenco, 14', '4.9')}
      className="court-item bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-ry-600 transition-all cursor-pointer tap-effect"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full">
              Popular
            </span>
            <span className="text-[11px] font-extrabold text-amber-800 dark:text-amber-400">
              <i className="fa-solid fa-star mr-0.5" />
              4.9 (84)
            </span>
          </div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white mt-1">
            Pista Podenco
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 flex items-center space-x-1 mt-0.5">
            <i className="fa-solid fa-location-dot text-ry-700 dark:text-emerald-400 text-xs" />
            <span>
              C/ Podenco, 14 • <strong className="text-slate-800 dark:text-slate-100">1.2 km</strong>
            </span>
          </p>
        </div>
        <div className="text-right">
          <span className="text-lg font-black text-ry-700 dark:text-emerald-400">26€</span>
          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 block">
            / hora
          </span>
        </div>
      </div>
      <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[11px]">
        <span className="text-slate-600 dark:text-slate-300 font-medium">
          <i className="fa-solid fa-layer-group mr-1" /> Césped Sintético
        </span>
        <span className="text-emerald-700 dark:text-emerald-400 font-bold">
          <i className="fa-solid fa-circle text-[7px] mr-1" /> Disponible hoy
        </span>
      </div>
    </div>
  );
}

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
