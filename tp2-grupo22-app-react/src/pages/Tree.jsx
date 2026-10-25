import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';

// Componente recursivo para representación interactiva del Árbol de Componentes
const TreeNode = ({ name, type, description, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = Boolean(children?.length);

  return (
    <div
      style={{
        minWidth: 0,
        maxWidth: '100%',
        marginTop: '8px',
        marginBottom: '8px'
      }}
    >
      <div
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '8px',
          minWidth: 0,
          maxWidth: '100%',
          boxSizing: 'border-box',
          padding: '6px 12px',
          borderRadius: '8px',
          background: 'var(--tree-card-bg)',
          border: '1px solid var(--tree-card-border)',
          cursor: hasChildren ? 'pointer' : 'default',
          userSelect: 'none',
          transition: 'background 0.2s ease'
        }}
      >
        {hasChildren && (
          <span
            style={{
              fontSize: '0.8rem',
              opacity: 0.8,
              flexShrink: 0
            }}
          >
            {isOpen ? '▼' : '▶'}
          </span>
        )}

        <strong
          style={{
            color:
              type === 'Layout' ? '#38bdf8' :
              type === 'Page' ? '#a78bfa' :
              '#f472b6',
            minWidth: 0,
            maxWidth: '100%',
            overflowWrap: 'anywhere'
          }}
        >
          &lt;{name} /&gt;
        </strong>

        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--tree-label-color)',
            background: 'var(--tree-label-bg)',
            border: '1px solid var(--tree-card-border)',
            padding: '2px 6px',
            borderRadius: '4px',
            minWidth: 0,
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflowWrap: 'anywhere'
          }}
        >
          {type}
        </span>

        {description && (
          <span
            style={{
              fontSize: '0.85rem',
              opacity: 0.75,
              minWidth: 0,
              maxWidth: '100%',
              flex: '0 1 auto',
              overflowWrap: 'anywhere'
            }}
          >
            — {description}
          </span>
        )}
      </div>

      {hasChildren && isOpen && (
        <div
          className="tree-branch-spacing"
          style={{
            minWidth: 0,
            borderLeft: '2px dashed var(--tree-line-color)',
            marginLeft: 'clamp(2px, 1vw, 10px)',
            paddingLeft: 'clamp(4px, 1vw, 6px)'
          }}
        >
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