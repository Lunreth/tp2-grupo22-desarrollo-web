import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";

export default function MemberCard({ member }) {
  return (
    <GlassCard className="member-card">
      <div className="avatar">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectFit: "cover"
            }}
          />
        ) : (
          member.initials
        )}
      </div>
      <div className="member-card-content">
        <span className="eyebrow">{member.role}</span>
        <h3>{member.name}</h3>
        <p>{member.shortBio}</p>
        <Link className="text-link" to={`/integrantes/${member.id}`}>
          Ver perfil <ArrowUpRight size={16} />
        </Link>
      </div>
    </GlassCard>
  );
}