import { members } from "../data/members";
import MemberCard from "../components/MemberCard";

export default function Members() {
  return (
    <section>
      <div className="page-title">
        <span className="eyebrow">Equipo</span>
        <h1>Integrantes</h1>
        <p>Cinco perfiles editables para completar con la información real del grupo.</p>
      </div>
      <div className="member-grid">
        {members.map(member => <MemberCard key={member.id} member={member} />)}
      </div>
    </section>
  );
}