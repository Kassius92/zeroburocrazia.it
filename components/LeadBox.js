'use client';

export default function LeadBox({ guida = '', titolo = 'Non vuoi farlo da solo?', sottotitolo = 'Trova un professionista nella tua zona. Gratis, senza impegno.' }) {
  return (
    <div className="lead-box lead-box-soon" id="trova-professionista">
      <div className="lead-header">
        <div className="lead-icon">📍</div>
        <div>
          <div className="lead-title">{titolo}</div>
          <div className="lead-sub">{sottotitolo}</div>
        </div>
      </div>
      <div className="lead-soon">
        <div className="lead-soon-badge">Prossimamente</div>
        <p>Stiamo selezionando i migliori professionisti zona per zona. Questa funzione sarà attiva a breve.</p>
      </div>
    </div>
  );
}
