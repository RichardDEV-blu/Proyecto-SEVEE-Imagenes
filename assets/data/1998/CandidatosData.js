// ============================================================
// ARCHIVO: src/assets/data/1998/CandidatosData.js
// ============================================================

const imageModules = import.meta.glob('../../img/**/*.{png,jpg,jpeg,svg}', {
  eager: false
});

const img = (path) => {
  const fullPath = `../../img/${path}`;
  const loader = imageModules[fullPath];

  if (loader) {
    return async () => {
      const mod = await loader();
      return mod.default;
    };
  }

  console.warn(`⚠️ Imagen no encontrada en glob: ${path}`);
  return async () => "";
};

// ============================================================
// 1. LEYENDA DE COLORES
// ============================================================

export const dessertsData = [
  {
    porcentaje: "Nivel Bajo",
    p1: "#FFB3B3", // Rojo muy claro
  },
  {
    porcentaje: "Nivel Medio",
    p1: "#FF4D4D", // Rojo de intensidad media
  },
  {
    porcentaje: "Nivel Alto",
    p1: "#CC0000", // Rojo oscuro (Color principal del MPD)
  },
];


// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================

export const candidatoData = [
  {
    partido: 1,
    nombre: "MARIA EUGENIA LIMA",
    url: img("imagenes_presidentes/1998/MaríaEugeniaLima_1998.png"),
    logo: img("logos_partidos_politicos/1998/MovimientoPopularDemocrático_1998.png"),
    color: "#CC0000",
    nombrePartido: "COMPLETAR", // este candidato pertenece al Movimiento Popular Democrático (MPD)
    json: "COMPLETAR",
  }
];