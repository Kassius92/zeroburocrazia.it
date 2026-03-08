'use client';

export default function BrevoForm({ pageName = 'default' }) {
  return (
    <div className="remind-box">
      <div className="remind-inner">
        <div className="remind-icon">🔔</div>
        <div className="remind-title">Resta aggiornato</div>
        <div className="remind-desc">Novità, consigli e guide nuove direttamente nella tua inbox. Gratis, niente spam.</div>
        <div className="lead-soon-badge" style={{marginTop:'12px'}}>Prossimamente</div>
      </div>
    </div>
  );
}
