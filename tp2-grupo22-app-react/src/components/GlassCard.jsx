export default function GlassCard({ children, className = "", ...props }) {
  return (
    <article className={`glass-card ${className}`} {...props}>
      {children}
    </article>
  );
}