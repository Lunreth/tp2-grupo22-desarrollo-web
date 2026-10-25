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
    description: 'Gestiona el tema y las rutas; está dentro de BrowserRouter',
    children: [
      {
        name: 'Layout',
        type: 'Layout',
        description: 'Organiza la navegación y el contenido',
        children: [
          {
            name: 'Sidebar',
            type: 'Component',
            description: 'Navegación, menú móvil y selector de tema'
          },
          {
            name: 'Routes',
            type: 'Router',
            description: 'Muestra la página que corresponde a la URL; las páginas son alternativas',
            children: [
              {
                name: 'Home',
                type: 'Page',
                description: 'Portada del equipo',
                children: [
                  {
                    name: 'GlassCard',
                    type: 'Component',
                    description: 'Tarjetas de presentación'
                  },
                  {
                    name: 'MemberCard',
                    type: 'Component',
                    description: 'Una tarjeta por integrante',
                    children: [
                      { name: 'GlassCard', type: 'Component' }
                    ]
                  }
                ]
              },
              {
                name: 'Members',
                type: 'Page',
                description: 'Listado del equipo',
                children: [
                  {
                    name: 'MemberCard',
                    type: 'Component',
                    description: 'Una tarjeta por integrante',
                    children: [
                      { name: 'GlassCard', type: 'Component' }
                    ]
                  }
                ]
              },
              {
                name: 'MemberProfile',
                type: 'Page',
                description: 'Perfil seleccionado e interacción de aportes',
                children: [
                  {
                    name: 'GlassCard',
                    type: 'Component',
                    description: 'Presentación, habilidades, hobbies o aportes'
                  }
                ]
              },
              {
                name: 'Resources',
                type: 'Page',
                description: 'JSON local con búsqueda y filtro',
                children: [
                  {
                    name: 'ResourceCard',
                    type: 'Component',
                    description: 'Una tarjeta por recurso visible',
                    children: [
                      { name: 'GlassCard', type: 'Component' }
                    ]
                  }
                ]
              },
              {
                name: 'ApiPage',
                type: 'Page',
                description: 'Consulta Open-Meteo y gestiona carga, error y actualización',
                children: [
                  { name: 'GlassCard', type: 'Component' }
                ]
              },
              {
                name: 'Tree',
                type: 'Page',
                description: 'Esquema de los componentes propios y la navegación',
                children: [
                  {
                    name: 'GlassCard',
                    type: 'Component',
                    children: [
                      {
                        name: 'TreeNode',
                        type: 'Component',
                        description: 'Renderiza cada nodo y sus hijos recursivamente'
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Bitacora',
                type: 'Page',
                description: 'Registros con desplegables',
                children: [
                  {
                    name: 'GlassCard',
                    type: 'Component',
                    description: 'Una tarjeta por registro'
                  }
                ]
              },
              {
                name: 'AiUsage',
                type: 'Page',
                description: 'Declaración de uso de IA',
                children: [
                  {
                    name: 'GlassCard',
                    type: 'Component',
                    description: 'Contiene la tabla de declaraciones'
                  }
                ]
              },
              {
                name: 'Navigate',
                type: 'Router',
                description: 'Vuelve al inicio cuando la ruta no existe'
              }
            ]
          }
        ]
      }
    ]
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="page-title">
        <h1>Árbol de Componentes del Proyecto</h1>
        <p>
          Estructura jerárquica e interactiva de los componentes de React
          utilizados en la aplicación. Podés hacer clic en los componentes
          con la flecha para <strong>desplegar o contraer</strong> sus
          componentes hijos.
        </p>
      </div>

      <GlassCard style={{ padding: '24px' }}>
        <TreeNode {...componentTreeData} />
      </GlassCard>
    </div>
  );
};

export default Tree;