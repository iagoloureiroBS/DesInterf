
export default function Pista({pista}) {

  return (

    <div className="court-item bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-ry-600 transition-all cursor-pointer tap-effect"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full">
              {pista.etiqueta} • 
            </span>
            <span className="text-[11px] font-extrabold text-amber-800 dark:text-amber-400">
              <i className="fa-solid fa-star mr-0.5" />
                {pista.puntuacion}
            </span>
          </div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white mt-1">
            Pista {pista.nome}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 flex items-center space-x-1 mt-0.5">
            <i className="fa-solid fa-location-dot text-ry-700 dark:text-emerald-400 text-xs" />
            <span>
              {pista.direccion} • <strong className="text-slate-800 dark:text-slate-100">{pista.distancia} km</strong>
            </span>
          </p>
        </div>
        <div className="text-right">
          <span className="text-lg font-black text-ry-700 dark:text-emerald-400">{pista.precio}€</span>
          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 block">
            / hora
          </span>
        </div>
      </div>
      <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[11px]">
        <span className="text-slate-600 dark:text-slate-300 font-medium">
          <i className="fa-solid fa-layer-group mr-1" /> {pista.tipo}
        </span>
        <span className="text-emerald-700 dark:text-emerald-400 font-bold">
          <i className="fa-solid fa-circle text-[7px] mr-1" /> {pista.disponibilidad}
        </span>
      </div>
    </div>
  );
}
