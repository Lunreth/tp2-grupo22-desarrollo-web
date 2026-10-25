import GlassCard from "../components/GlassCard";

const rows = [
  [
    "Dominguez Angel",
    "ChatGPT y Codex",
    "GPT-6.1 Sol en ambas aplicaciones",
    "Perfil React, redacción y revisión del README, ejecución local, orientación sobre GitHub y revisión de la consigna."
  ],
  ["Cimar Gomez Torrez", "Pendiente de confirmar", "Pendiente de confirmar", "Pendiente de confirmar"],
  ["David Carlos Ruiz Flores", "Pendiente de confirmar", "Pendiente de confirmar", "Pendiente de confirmar"],
 
  ["Rodrigo Nicolás Molina", "Gemini", "Gemini 1.5 Pro", 
    "refactorización y diseño interactivo del Árbol de componentes; integración de la Bitácora y maquetación del Perfil 4"],
 
    ["Kevin Martínez Cáceres", "Pendiente de confirmar", "Pendiente de confirmar", "Pendiente de confirmar"]
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
          La declaración de Dominguez Angel está confirmada. Las declaraciones
          de los demás integrantes están pendientes de recopilación.
        </p>
      </GlassCard>
    </section>
  );
}