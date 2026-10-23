const tareas = [
  { id: 1, titulo: 'Estudiar JS', horas: 4, completada: true, prioridad: 'Alta' },
  { id: 2, titulo: 'Hacer compra', horas: 1, completada: false, prioridad: 'Baja' },
  { id: 3, titulo: 'Preparar examen', horas: 6, completada: true, prioridad: 'Alta' },
  { id: 4, titulo: 'Limpiar casa', horas: 2, completada: false, prioridad: 'Media' },
  { id: 5, titulo: 'Practicar reduce', horas: 3, completada: true, prioridad: 'Alta' }
];

const obtenerCompletadas = tareas => tareas.filter(({completada, prioridad}) => completada && prioridad === 'Alta').map(({titulo}) => titulo)

const componentes = [
  { id: 1, nombre: 'Procesador', precio: 220, stock: 4, categoria: 'Hardware' },
  { id: 2, nombre: 'Placa Base', precio: 150, stock: 0, categoria: 'Hardware' },
  { id: 3, nombre: 'Memoria RAM', precio: 80, stock: 8, categoria: 'RAM' },
  { id: 4, nombre: 'Disipador', precio: 35, stock: 2, categoria: 'Refrigeracion' }
];

const ordenarPorStock = componentes => [...componentes].sort((a,b) => b.stock - a.stock)

const calcularValorHardware = componentes => componentes.filter(({categoria}) => categoria === 'Hardware').reduce((acc, c))


const usuarios = [
  { id: 1, nombre: 'Marcos', plan: 'Premium', precio: 18, activo: true },
  { id: 2, nombre: 'Lucia', plan: 'Basico', precio: 10, activo: false },
  { id: 3, nombre: 'David', plan: 'Premium', precio: 18, activo: true },
  { id: 4, nombre: 'Elena', plan: 'Estandar', precio: 14, activo: true }
];

const obtenerNombre = usuarios => usuarios.filter(({plan, activo}) => plan === 'Premium' && activo).map(u => u.nombre)

const aplicarSubidaPrecios = usuarios => usuarios.map(u => ({...u}, u.precio +2))

const jugadores = [
  { alias: 'Shadow', puntos: 4500, partidas: 12 },
  { alias: 'Phoenix', puntos: 6200, partidas: 18 },
  { alias: 'Viper', puntos: 3100, partidas: 8 },
  { alias: 'Nova', puntos: 6200, partidas: 15 }
];

const ordenarPorPuntuacion = jugadores => [...jugadores].sort((a,b) => b.puntos - a.puntos)

const promedioPuntos = jugadores => jugadores.reduce((acc, j) => acc + j.puntos, 0)

const cursos = [
  { id: 1, titulo: 'JavaScript Avanzado', horas: 40, precio: 120, destacado: true },
  { id: 2, titulo: 'HTML & CSS Basico', horas: 15, precio: 50, destacado: false },
  { id: 3, titulo: 'React & Redux', horas: 35, precio: 100, destacado: true },
  { id: 4, titulo: 'Git & GitHub', horas: 10, precio: 30, destacado: false }
];

const marcarOfertaDestacados = cursos => cursos.map(c => c.destacado === true ? {...c, enOferta:true} : {...c, enOferta:false})

const calcularHorasDestacados = cursos => cursos.filter(({destacado}) => destacado === true).reduce((acc,{horas}) => acc + horas, 0)

const socios = [
  { id: 1, nombre: 'Carlos', edad: 22, cuota: 30, activo: true },
  { id: 2, nombre: 'Laura', edad: 31, cuota: 40, activo: false },
  { id: 3, nombre: 'Miguel', edad: 19, cuota: 25, activo: true },
  { id: 4, nombre: 'Sara', edad: 27, cuota: 35, activo: true }
];

const aumentarCuotasActivos = socios => socios.map(s => s.activo ? ({...s, cuota: s.cuota * 1.10}) : s)

const ingresosTotalesActivos = socios => socios.filter(({activo}) => activo).reduce((acc, {cuota}) => acc + cuota, 0)





