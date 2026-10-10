import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Boxes,
  CloudSun,
  GitBranch,
  BookOpen,
  Sparkles,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";
import { useState } from "react";

const links = [
  ["/", "Inicio", Home],
  ["/integrantes", "Integrantes", Users],
  ["/recursos", "Recursos", Boxes],
  ["/api", "API pública", CloudSun],
  ["/arbol", "Árbol", GitBranch],
  ["/bitacora", "Bitácora", BookOpen],
  ["/ia", "Uso de IA", Sparkles]
];

export default function Sidebar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Abrir menú">
        {open ? <X /> : <Menu />}
      </button>

      <aside className={open ? "sidebar open" : "sidebar"}>
        <div className="brand">
          <div className="brand-mark">G</div>
          <div>
            <strong>Equipo Glass</strong>
            <span>TP2 · React</span>
          </div>
        </div>

        <nav>
          {links.map(([to, label, Icon]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          {darkMode ? "Modo claro" : "Modo oscuro"}
        </button>

        <div className="sidebar-footer">
          <span>Proyecto grupal</span>
          <small>2026 · Front End</small>
        </div>
      </aside>
    </>
  );
}