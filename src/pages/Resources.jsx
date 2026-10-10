import { useMemo, useState } from "react";
import { Search, RotateCcw } from "lucide-react";
import resources from "../data/resources.json";
import ResourceCard from "../components/ResourceCard";

export default function Resources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const categories = ["Todas", ...new Set(resources.map(item => item.category))];

  const filtered = useMemo(() => {
    return resources.filter(item => {
      const text = `${item.name} ${item.description} ${item.category}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesCategory = category === "Todas" || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const reset = () => {
    setSearch("");
    setCategory("Todas");
  };

  return (
    <section>
      <div className="page-title">
        <span className="eyebrow">Datos locales · JSON</span>
        <h1>Recursos del equipo</h1>
        <p>20 registros cargados desde un archivo JSON y renderizados dinámicamente.</p>
      </div>

      <div className="filters glass-card">
        <label className="search-box">
          <Search size={18} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar por nombre o descripción..."
          />
        </label>

        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(item => <option key={item}>{item}</option>)}
        </select>

        <button className="ghost-button" onClick={reset}>
          <RotateCcw size={16} /> Restablecer
        </button>
      </div>

      <p className="results-count">{filtered.length} resultado(s)</p>

      {filtered.length ? (
        <div className="resource-grid">
          {filtered.map(resource => <ResourceCard key={resource.id} resource={resource} />)}
        </div>
      ) : (
        <div className="empty-state glass-card">
          <h3>No hay resultados</h3>
          <p>Probá con otro texto o restablecé los filtros.</p>
          <button className="primary-button" onClick={reset}>Mostrar todo</button>
        </div>
      )}
    </section>
  );
}