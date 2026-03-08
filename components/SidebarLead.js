'use client';

export default function SidebarLead({ guida = '' }) {
  return (
    <div className="sb-lead sb-lead-soon">
      <div className="sb-lead-t">📍 Trova professionista</div>
      <div className="sb-lead-d">Commercialista, CAF o consulente nella tua zona.</div>
      <div className="sb-lead-soon-badge">Prossimamente</div>
    </div>
  );
}
