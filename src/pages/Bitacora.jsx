import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import GlassCard from "../components/GlassCard";

const entries = [
  { date: "Etapa 1", title: "Organización inicial", text: "Definimos la estructura del proyecto, los roles y las secciones que debía contener la aplicación." },
  { date: "Etapa 2", title: "Diseño visual", text: "Elegimos glassmorphism como identidad visual y planteamos la convivencia entre modo claro y oscuro." },
  { date: "Etapa 3", title: "Componentización", text: "Creamos Layout, Sidebar, tarjetas reutilizables y páginas independientes mediante React Router." },
  { date: "Etapa 4", title: "Datos y filtros", text: "Creamos el JSON local con 20 registros e incorporamos búsqueda, filtro y restablecimiento." },
  { date: "Etapa 5", title: "API y pruebas", text: "Integramos una API pública, agregamos estados de carga/error y comprobamos la navegación." }
];

export default function Bitacora() {
  const [open, setOpen] = useState(0);

  return (
    <section>
      <div className="page-title">
        <span className="eyebrow">Proceso de trabajo</span>
        <h1>Bitácora</h1>
        <p>Registros breves de decisiones, avances y dificultades resueltas.</p>
      </div>

      <div className="timeline">
        {entries.map((entry, index) => (
          <GlassCard className="timeline-item" key={entry.title}>
            <button
              className="timeline-button"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
              aria-controls={`bitacora-entry-${index}`}
            >
              <span className="timeline-number">{index + 1}</span>
              <span>
                <small>{entry.date}</small>
                <strong>{entry.title}</strong>
              </span>
              {open === index ? <ChevronDown /> : <ChevronRight />}
            </button>
            <div
              className="timeline-text"
              id={`bitacora-entry-${index}`}
              role="region"
              aria-label={`Detalle: ${entry.title}`}
              hidden={open !== index}
            >
              {entry.text}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}