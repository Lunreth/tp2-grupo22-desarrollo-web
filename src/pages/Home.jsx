import { ArrowRight, Code2, Layers3, Palette, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import MemberCard from "../components/MemberCard";
import { members } from "../data/members";

export default function Home() {
  return (
    <>
      <section className="hero glass-card">
        <div className="hero-content">
          <span className="eyebrow"><Sparkles size={15} /> TP2 · Proyecto React</span>
          <h1>Somos <span>Equipo Glass</span>.</h1>
          <p className="hero-lead">
            Una aplicación creada para presentar quiénes somos, qué sabemos hacer
            y cómo construimos una experiencia web colaborativa.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/integrantes">
              Conocer al equipo <ArrowRight size={17} />
            </Link>
            <Link className="secondary-button" to="/recursos">
              Explorar recursos
            </Link>
          </div>
        </div>
        <div className="hero-orb">
          <div className="orb-inner">G</div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Nuestra identidad</span>
            <h2>Una experiencia compartida</h2>
          </div>
          <p>Diseño, código y contenido reunidos en una sola aplicación.</p>
        </div>

        <div className="feature-grid">
          <GlassCard><Code2 /><h3>React</h3><p>Componentes reutilizables y navegación con React Router.</p></GlassCard>
          <GlassCard><Palette /><h3>Glassmorphism</h3><p>Superficies translúcidas, blur, profundidad y modo claro/oscuro.</p></GlassCard>
          <GlassCard><Layers3 /><h3>Contenido</h3><p>Perfiles, datos locales, API, árbol de componentes y bitácora.</p></GlassCard>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">El equipo</span>
            <h2>Conocé a sus integrantes</h2>
          </div>
          <Link className="text-link" to="/integrantes">Ver todos <ArrowRight size={16} /></Link>
        </div>

        <div className="member-grid">
          {members.map(member => <MemberCard key={member.id} member={member} />)}
        </div>
      </section>
    </>
  );
}