'use client';
import { useState, useMemo } from 'react';

function fmt(n) { return Math.round(n).toLocaleString('it-IT') + '\u20AC'; }

export default function CalcCedolare() {
  const [canone, setCanone] = useState(700);
  const [reddito, setReddito] = useState(30000);

  const result = useMemo(() => {
    const canoneAnno = canone * 12;
    
    // IRPEF: base imponibile 95%, aliquota marginale
    const redditoTotale = reddito + canoneAnno * 0.95;
    let aliquotaMarginale;
    if (redditoTotale <= 28000) aliquotaMarginale = 0.23;
    else if (redditoTotale <= 50000) aliquotaMarginale = 0.33;
    else aliquotaMarginale = 0.43;

    const irpef = canoneAnno * 0.95 * aliquotaMarginale;
    const registro = canoneAnno * 0.02 * 0.5; // metà a carico locatore
    const addizionali = canoneAnno * 0.95 * 0.02; // stima ~2%
    const totaleIrpef = irpef + registro + addizionali;

    // Cedolare 21%
    const cedolare21 = canoneAnno * 0.21;
    const risparmio21 = totaleIrpef - cedolare21;

    // Cedolare 10% (canone concordato stimato ~75% del libero)
    const canoneConc = canoneAnno * 0.75;
    const cedolare10 = canoneConc * 0.10;
    const risparmio10 = totaleIrpef - cedolare10;

    return {
      canoneAnno,
      aliquotaMarginale: Math.round(aliquotaMarginale * 100),
      totaleIrpef,
      cedolare21,
      risparmio21,
      canoneConc,
      cedolare10,
      risparmio10,
    };
  }, [canone, reddito]);

  const conviene = result.risparmio21 > 0;

  return (
    <div className="calc">
      <div className="calc-hd">
        <div className="calc-tag">Calcolatore</div>
        <h3>Cedolare secca:<br/>conviene a te?</h3>
      </div>
      <div className="calc-bd">
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Canone mensile</span>
            <span className="cl2-v">{fmt(canone)}</span>
          </div>
          <input type="range" className="cslider" min={200} max={2000} step={50} value={canone} onChange={e => setCanone(+e.target.value)} />
        </div>
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Tuo reddito complessivo (senza affitto)</span>
            <span className="cl2-v">{fmt(reddito)}</span>
          </div>
          <input type="range" className="cslider" min={0} max={80000} step={1000} value={reddito} onChange={e => setReddito(+e.target.value)} />
        </div>
        <div className="cdiv"></div>
        <div className="cres">
          <div className="cres-l">{conviene ? '✅ La cedolare conviene' : '⚠️ Valuta con un commercialista'}</div>
          <div className="cres-n">{conviene ? `Risparmi ${fmt(result.risparmio21)}/anno` : `Costa ${fmt(-result.risparmio21)} in più`}</div>
          <div className="cres-s">Canone annuo: {fmt(result.canoneAnno)} &middot; Aliquota IRPEF marginale: {result.aliquotaMarginale}%</div>
          <div className="cres-grid">
            <div className="cbi"><span>Con IRPEF (tasse + registro + addiz.)</span><span className="cbv">{fmt(result.totaleIrpef)}</span></div>
            <div className="cbi"><span>Con cedolare secca 21%</span><span className="cbv">{fmt(result.cedolare21)}</span></div>
            <div className="cbi"><span>Con concordato 10% (~{fmt(result.canoneConc)}/anno)</span><span className="cbv">{fmt(result.cedolare10)}</span></div>
          </div>
          <p style={{fontSize:'12px',color:'var(--text-3)',marginTop:'12px',lineHeight:'1.4'}}>Stima indicativa. Non considera detrazioni personali, trattamento integrativo e addizionali regionali/comunali specifiche. Per un calcolo preciso consulta un commercialista.</p>
        </div>
      </div>
    </div>
  );
}
