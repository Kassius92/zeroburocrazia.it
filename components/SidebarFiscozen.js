export default function SidebarFiscozen() {
  return (
    <div className="sb-fz">
      <img src="/fiscozen-logo.png" alt="Fiscozen" className="sb-fz-logo" width="100" height="20" />
      <div className="sb-fz-label">Partner ufficiale</div>
      <div className="sb-fz-title">Commercialista online per P.IVA</div>
      <div className="sb-fz-text">Apertura gratuita, fatturazione inclusa, commercialista dedicato.</div>
      <div className="sb-fz-discount">Sconto di 50&euro; con ZeroBurocrazia</div>
      <a href="https://fiscozen.it/invitoZEROBUROCRAZIA50A" target="_blank" rel="noopener sponsored" className="sb-fz-btn">
        Ottieni lo sconto {'\u2192'}
      </a>
    </div>
  );
}
