'use client';
import { useState, useMemo } from 'react';

function fmt(n) { return Math.round(n).toLocaleString('it-IT') + '\u20AC'; }

export default function CalcBustaPaga() {
  const [ral, setRal] = useState(28000);
  const [mensilita, setMensilita] = useState(14);

  const result = useMemo(() => {
    const lordoMese = ral / mensilita;

    // Contributi INPS lavoratore ~9.19%
    const inps = lordoMese * 0.0919;
    const imponibileFiscale = lordoMese - inps;

    // IRPEF su base annua poi divisa per mese
    const imponibileAnno = imponibileFiscale * mensilita;
    let irpefAnno = 0;
    if (imponibileAnno <= 28000) {
      irpefAnno = imponibileAnno * 0.23;
    } else if (imponibileAnno <= 50000) {
      irpefAnno = 28000 * 0.23 + (imponibileAnno - 28000) * 0.33;
    } else {
      irpefAnno = 28000 * 0.23 + 22000 * 0.33 + (imponibileAnno - 50000) * 0.43;
    }

    // Detrazioni lavoro dipendente (formula semplificata)
    let detrazione = 0;
    if (ral <= 15000) detrazione = 1955;
    else if (ral <= 28000) detrazione = 1910 + 1190 * ((28000 - ral) / 13000);
    else if (ral <= 50000) detrazione = 1910 * ((50000 - ral) / 22000);

    const irpefNettaAnno = Math.max(0, irpefAnno - detrazione);
    const irpefMese = irpefNettaAnno / mensilita;

    // Addizionali stimate ~2%
    const addizionaliMese = (imponibileAnno * 0.02) / mensilita;

    // Trattamento integrativo (ex bonus Renzi)
    let bonusMese = 0;
    if (ral <= 15000) bonusMese = 100;
    else if (ral <= 28000) bonusMese = 100 * ((28000 - ral) / 13000);

    const nettoMese = lordoMese - inps - irpefMese - addizionaliMese + bonusMese;
    const nettoAnno = nettoMese * mensilita;
    const tfrMese = ral / 13.5 / 12;

    return { lordoMese, inps, irpefMese, addizionaliMese, bonusMese, nettoMese, nettoAnno, tfrMese };
  }, [ral, mensilita]);

  return (
    <div className="calc">
      <div className="calc-hd">
        <div className="calc-tag">Calcolatore</div>
        <h3>Dal lordo al netto:<br/>quanto prendi?</h3>
      </div>
      <div className="calc-bd">
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">RAL (stipendio annuo lordo)</span>
            <span className="cl2-v">{fmt(ral)}</span>
          </div>
          <input type="range" className="cslider" min={10000} max={80000} step={500} value={ral} onChange={e => setRal(+e.target.value)} />
        </div>
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Mensilità</span>
            <span className="cl2-v">{mensilita}</span>
          </div>
          <div style={{display:'flex',gap:'8px',marginTop:'8px'}}>
            {[13, 14].map(m => (
              <button key={m} onClick={() => setMensilita(m)} style={{padding:'8px 20px',borderRadius:'8px',border:'1px solid rgba(15,76,92,.2)',background: mensilita===m ? 'var(--tc)' : 'transparent',color: mensilita===m ? '#fff' : 'var(--t2)',fontSize:'14px',cursor:'pointer',fontFamily:'var(--font-dm)'}}>{m} mensilità</button>
            ))}
          </div>
        </div>
        <div className="cdiv"></div>
        <div className="cres">
          <div className="cres-l">Netto mensile stimato</div>
          <div className="cres-n">~{fmt(result.nettoMese)}</div>
          <div className="cres-s">Netto annuo: ~{fmt(result.nettoAnno)}</div>
          <div className="cres-grid">
            <div className="cbi"><span>Lordo mensile</span><span className="cbv">{fmt(result.lordoMese)}</span></div>
            <div className="cbi"><span>Contributi INPS (9,19%)</span><span className="cbv">-{fmt(result.inps)}</span></div>
            <div className="cbi"><span>IRPEF netta</span><span className="cbv">-{fmt(result.irpefMese)}</span></div>
            <div className="cbi"><span>Addizionali (~2%)</span><span className="cbv">-{fmt(result.addizionaliMese)}</span></div>
            {result.bonusMese > 0 && <div className="cbi"><span>Trattamento integrativo</span><span className="cbv">+{fmt(result.bonusMese)}</span></div>}
            <div className="cbi"><span>TFR accantonato/mese</span><span className="cbv">~{fmt(result.tfrMese)}</span></div>
          </div>
          <p style={{fontSize:'12px',color:'var(--text-3)',marginTop:'12px',lineHeight:'1.4'}}>Stima indicativa per lavoratore single senza figli a carico. Addizionali regionali/comunali variano per residenza. Non considera detrazioni specifiche.</p>
        </div>
      </div>
    </div>
  );
}
