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
    p3: "#F8B3E1",
  },
  {
    porcentaje: "Nivel Medio",
    p3: "#F06BC0",
  },
  {
    porcentaje: "Nivel Alto",
    p3: "#E00B97",
  },
];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================

export const candidatoData = [
  {
    partido: 3,
    nombre: "ROSALIA ARTEAGA",
    url: img("imagenes_presidentes/1998/ROSALIAARTEAGA_1998.png"),
    logo: img("logos_partidos_politicos/1998/MIRA_1998.png"),
    color: "#E00B97",
    nombrePartido: "COMPLETAR", //EL candidato pertenece al partido MIRA
    json: "COMPLETAR",
  }
];
