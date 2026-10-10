import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { members } from "../data/members";
import GlassCard from "../components/GlassCard";

export default function MemberProfile() {
  const { id } = useParams();
  const [showContributions, setShowContributions] = useState(false);

  const member = members.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="section-container">
        <h2>Integrante no encontrado</h2>
        <p>No pudimos encontrar la información del perfil seleccionado.</p>
        <Link to="/integrantes" className="back-link">
          ← Volver al equipo
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/integrantes" className="back-link">
        ← Volver al equipo
      </Link>

      <div className="profile-layout">
        {/* Tarjeta Principal */}
        <GlassCard className="profile-main">
          <div className="profile-header">
            {member.avatar ? (
              <img
                src={member.avatar}
                alt={member.name}
                className="profile-avatar"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className="profile-avatar">{member.initials}</div>
            )}
            <div className="profile-identity">
              <h1>{member.name}</h1>
            </div>
          </div>

          <p className="profile-bio">{member.bio}</p>

          <div className="profile-actions">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub ↗
              </a>
            )}

            {member.contributions && (
              <button
                type="button"
                onClick={() => setShowContributions(!showContributions)}
                className="primary-button"
              >
                {showContributions ? "Ver Habilidades y Hobbies" : "Ver mis aportes"}
              </button>
            )}
          </div>
        </GlassCard>

        {/* Columna Lateral */}
        <div className="profile-side">
          {showContributions ? (
            <GlassCard>
              <p className="eyebrow" style={{ marginBottom: '8px' }}>
                {member.role}
              </p>
              <h3>Mis aportes al TP2</h3>
              <ul className="contribution-list">
                {member.contributions?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </GlassCard>
          ) : (
            <>
              {member.skills && member.skills.length > 0 && (
                <GlassCard>
                  <h3 style={{ marginBottom: '12px' }}>Habilidades</h3>
                  <div className="chip-list">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="profile-chip">
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              )}

              {member.hobbies && member.hobbies.length > 0 && (
                <GlassCard>
                  <h3 style={{ marginBottom: '12px' }}>Hobbies</h3>
                  <div className="chip-list">
                    {member.hobbies.map((hobby, index) => (
                      <span key={index} className="profile-chip">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}