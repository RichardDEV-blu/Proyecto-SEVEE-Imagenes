// ============================================================
// ARCHIVO: src/assets/data/2023/CandidatosData.js
// DESCRIPCIÓN: Configuración de candidatos, colores y logos para 2023
// ============================================================

// Importación glob de TODAS las imágenes (Lazy Loading)
const imageModules = import.meta.glob("../../img/**/*.{png,jpg,jpeg,svg}", { eager: false });

// Helper para resolver imágenes
const img = (path) => {
  const fullPath = `../../img/${path}`;
  const loader = imageModules[fullPath];

  if (loader) {
    return async () => {
      const mod = await loader();
      return mod.default;
    };
  }
  // Fallback si no encuentra la imagen
  return async () => "";
};

// ============================================================
// 1. LEYENDA DE COLORES (Escala de intensidad para mapas de calor si se usa)
// ============================================================
export const dessertsData = [
  {
    porcentaje: "Nivel Bajo",
    p4: "#fcdabc",
  },
  {
    porcentaje: "Nivel Medio",
    p4: "#f8c89c",
  },
  {
    porcentaje: "Nivel Alto",
    p4: "#e69237",
  },
];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS 2023
// ============================================================

export const candidatoData = [
  {
    partido: 6,
    nombre: "JAN TOPIC",
    url: img("imagenes_presidentes/2023/candidato_003.png"),
    logo: img("logos_partidos_politicos/PSC.png"),
    color: "#FFFF00", // Amarillo PSC (o rojo secundario)
    nombrePartido: "PSC/PSP/CD",
    json: "PSC/PSP/CD",
  }
];
