import { useState } from "react";
import GlassCard from "./GlassCard";

export default function ResourceCard({ resource }) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard className="resource-card">
      <div className="resource-top">
        <span className="tag">{resource.category}</span>
        <span className="level">{resource.level}</span>
      </div>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <button className="ghost-button" onClick={() => setOpen(!open)}>
        {open ? "Ocultar detalle" : "Ver detalle"}
      </button>
      {open && (
        <div className="expand-box">
          Recurso seleccionado: <strong>{resource.name}</strong>. Categoría:
          <strong> {resource.category}</strong>.
        </div>
      )}
    </GlassCard>
  );
}