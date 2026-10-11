import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';

// Componente recursivo para representación interactiva del Árbol de Componentes
const TreeNode = ({ name, type, description, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = children && children.length > 0;

  return (
    <div style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '8px' }}>
      <div
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          cursor: hasChildren ? 'pointer' : 'default',
          userSelect: 'none',
          transition: 'all 0.2s ease'
        }}
      >
        {hasChildren && (
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
            {isOpen ? '▼' : '▶'}
          </span>
        )}
        <strong style={{ color: type === 'Layout' ? '#38bdf8' : type === 'Page' ? '#a78bfa' : '#f472b6' }}>
          &lt;{name} /&gt;
        </strong>
        <span style={{ fontSize: '0.75rem', opacity: 0.6, background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
          {type}
        </span>
        {description && (
          <span style={{ fontSize: '0.85rem', opacity: 0.75, marginLeft: '6px' }}>
            — {description}
          </span>
        )}
      </div>

      {hasChildren && isOpen && (
        <div style={{ borderLeft: '2px dashed rgba(255, 255, 255, 0.15)', marginLeft: '10px', paddingLeft: '6px' }}>
          {children.map((child, index) => (
            <TreeNode key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Tree = () => {
  // Jerarquía real de componentes de la aplicación React del equipo
  const componentTreeData = {
    name: 'App',
    type: 'Root Component',
    description: 'Contenedor principal con configuración de React Router',
    children: [
      {
        name: 'Layout',
        type: 'Layout',
        description: 'Estructura principal con Sidebar y área de contenido dinámico',
        children: [
          {
            name: 'Sidebar',
            type: 'Component',
            description: 'Menú lateral de navegación con selector de tema Claro/Oscuro'
          },
          {
            name: 'Home',
            type: 'Page',
            description: 'Portada principal con presentación del equipo NEXUS y acceso a perfiles',
            children: [
              { name: 'MemberCard', type: 'Component', description: 'Tarjetas individuales para acceder al perfil de cada integrante' }
            ]
          },
          {
            name: 'Members',
            type: 'Page',
            description: 'Vista con listado de perfiles del equipo'
          },
          {
            name: 'MemberProfile',
            type: 'Page',
            description: 'Página individual del perfil de cada integrante con interacción funcional'
          },
          {
            name: 'Resources',
            type: 'Page',
            description: 'Listado dinámico del archivo JSON local con buscador y filtros',
            children: [
              { name: 'ResourceCard', type: 'Component', description: 'Tarjeta reutilizable para mostrar cada recurso del JSON' }
            ]
          },
          {
            name: 'ApiPage',
            type: 'Page',
            description: 'Sección con consumo de la API de clima Open-Meteo en vivo',
            children: [
              { name: 'GlassCard', type: 'Component', description: 'Contenedor con efecto de transparencia Glassmorphism' }
            ]
          },
          {
            name: 'Tree',
            type: 'Page',
            description: 'Visualización interactiva e investigativa del árbol de componentes'
          },
          {
            name: 'Bitacora',
            type: 'Page',
            description: 'Registro de avances del equipo con filtros y desplegables'
          },
          {
            name: 'AiUsage',
            type: 'Page',
            description: 'Declaración detallada del uso de Inteligencia Artificial por integrante'
          }
        ]
      }
    ]
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2>Árbol de Componentes del Proyecto</h2>
      <p style={{ opacity: 0.85 }}>
        Estructura jerárquica e interactiva de los componentes de React utilizados en la aplicación. Podés hacer clic en los componentes con la flecha para <strong>desplegar o contraer</strong> sus componentes hijos.
      </p>

      <GlassCard style={{ padding: '24px' }}>
        <TreeNode {...componentTreeData} />
      </GlassCard>
    </div>
  );
};

export default Tree;