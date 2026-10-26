import GlassCard from "../components/GlassCard";

const rows = [
  [
    "Dominguez Angel",
    "ChatGPT y Codex",
    "GPT-6.1 Sol en ambas aplicaciones",
    "Perfil React, redacción y revisión del README, ejecución local, orientación sobre GitHub y revisión de la consigna."
  ],
  [
    "Cimar Gomez Torrez",
    "ChatGPT",
    "GPT-6.1 Sol",
    "Personalización del perfil, identidad visual y portada; generación del emblema de Equipo Nexus; fondos, animaciones y estilos para ambos temas; adaptación del árbol a distintas pantallas."
  ],
  [
    "David Carlos Ruiz Flores",
    "No utilizó IA",
    "No aplica",
    "Sin tareas asistidas por IA."
  ],
  [
    "Rodrigo Nicolás Molina",
    "Gemini",
    "Gemini 1.5 Pro",
    "Consumo de la API de clima con carga, error y reintento; refactorización y diseño interactivo del árbol de componentes; integración de la bitácora y maquetación del perfil 4."
  ],
  [
    "Kevin Martínez Cáceres",
    "ChatGPT, según su declaración",
    "No confirmado",
    "Asistencia para crear la plantilla React con cinco perfiles editables, estilo Glassmorphism y modos claro y oscuro."
  ]
];

export default function AiUsage() {
  return (
    <section>
      <div className="page-title">
        <span className="eyebrow">Criterio 15</span>
        <h1>Declaración de uso de IA</h1>
        <p>La tabla diferencia la aplicación utilizada del modelo empleado y del trabajo realizado.</p>
      </div>

      <GlassCard className="table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Integrante</th><th>Aplicación</th><th>Modelo</th><th>Uso</th></tr>
            </thead>
            <tbody>
              {rows.map(row => <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}
            </tbody>
          </table>
        </div>
        <p className="note"> 
            Se recopilaron las declaraciones del equipo. David declaró no haber
            utilizado IA. Quedan pendientes de confirmación el modelo y las
            verificaciones realizadas por Kevin.
        </p>
      </GlassCard>
    </section>
  );
}