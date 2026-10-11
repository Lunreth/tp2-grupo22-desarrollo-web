import GlassCard from "../components/GlassCard";

const rows = [
  ["Integrante 1", "ChatGPT", "GPT-5.6 Luna", "Arquitectura React y componentes"],
  ["Integrante 2", "ChatGPT", "GPT-5.6 Luna", "Diseño glassmorphism y CSS"],
  ["Integrante 3", "ChatGPT", "GPT-5.6 Luna", "JSON, búsqueda y filtros"],
  ["Integrante 4", "ChatGPT", "GPT-5.6 Luna", "API pública y estados"],
  ["Integrante 5", "ChatGPT", "GPT-5.6 Luna", "Documentación y pruebas"]
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
        <p className="note">Reemplazar los datos de ejemplo por el registro real del equipo antes de entregar.</p>
      </GlassCard>
    </section>
  );
}