export default function SidebarFiscozen() {
  return (
    <div className="sb-fz">
      <img src="/fiscozen-logo.png" alt="Fiscozen" className="sb-fz-logo" width="100" height="20" />
      <div className="sb-fz-label">Partner ufficiale</div>
      <div className="sb-fz-title">Servizio online per la gestione della partita IVA</div>
      <div className="sb-fz-text">Apertura P.IVA inclusa, commercialista dedicato, fatturazione e dichiarazione dei redditi.</div>
      <div className="sb-fz-discount">Consulenza gratuita + 50&euro; di sconto</div>
      <a href="https://fiscozen.it/invitoZEROBUROCRAZIA50A" target="_blank" rel="noopener sponsored" className="sb-fz-btn">
        Ottieni lo sconto {'\u2192'}
      </a>
    </div>
  );
}
