'use client';
import { useState, useMemo } from 'react';

function fmt(n) { return Math.round(n).toLocaleString('it-IT') + '\u20AC'; }

export default function CalcIMU() {
  const [rendita, setRendita] = useState(500);
  const [aliquota, setAliquota] = useState(10.6);
  const [riduzione, setRiduzione] = useState('nessuna');

  const result = useMemo(() => {
    const rivalutata = rendita * 1.05;
    const base = rivalutata * 160;

    let riduzionePerc = 1;
    if (riduzione === 'comodato') riduzionePerc = 0.5;
    else if (riduzione === 'concordato') riduzionePerc = 0.75;
    else if (riduzione === 'aire') riduzionePerc = 0.5;
    else if (riduzione === 'inagibile') riduzionePerc = 0.5;

    const baseRidotta = base * riduzionePerc;
    const imuAnnua = baseRidotta * (aliquota / 1000);
    const acconto = imuAnnua / 2;
    const saldo = imuAnnua / 2;

    return { rivalutata, base, baseRidotta, imuAnnua, acconto, saldo, riduzionePerc };
  }, [rendita, aliquota, riduzione]);

  return (
    <div className="calc">
      <div className="calc-hd">
        <div className="calc-tag">Calcolatore</div>
        <h3>Calcola la tua IMU<br/>seconda casa</h3>
      </div>
      <div className="calc-bd">
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Rendita catastale</span>
            <span className="cl2-v">{fmt(rendita)}</span>
          </div>
          <input type="range" className="cslider" min={100} max={3000} step={50} value={rendita} onChange={e => setRendita(+e.target.value)} />
        </div>
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Aliquota comunale (&permil;)</span>
            <span className="cl2-v">{aliquota.toFixed(1)}&permil;</span>
          </div>
          <input type="range" className="cslider" min={4} max={11.4} step={0.1} value={aliquota} onChange={e => setAliquota(+e.target.value)} />
        </div>
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Agevolazione</span>
            <span className="cl2-v">{riduzione === 'nessuna' ? 'Nessuna' : riduzione === 'comodato' ? '-50% comodato' : riduzione === 'concordato' ? '-25% concordato' : riduzione === 'aire' ? '-50% AIRE' : '-50% inagibile'}</span>
          </div>
          <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginTop:'8px'}}>
            {[['nessuna','Nessuna'],['comodato','-50% comodato'],['concordato','-25% concordato'],['aire','-50% AIRE'],['inagibile','-50% inagibile']].map(([val,label]) => (
              <button key={val} onClick={() => setRiduzione(val)} style={{padding:'6px 12px',borderRadius:'8px',border:'1px solid rgba(15,76,92,.2)',background: riduzione===val ? 'var(--tc)' : 'transparent',color: riduzione===val ? '#fff' : 'var(--t2)',fontSize:'13px',cursor:'pointer',fontFamily:'var(--font-dm)'}}>{label}</button>
            ))}
          </div>
        </div>
        <div className="cdiv"></div>
        <div className="cres">
          <div className="cres-l">IMU annua stimata</div>
          <div className="cres-n">{fmt(result.imuAnnua)}</div>
          <div className="cres-s">Base imponibile: {fmt(result.baseRidotta)}{result.riduzionePerc < 1 ? ` (ridotta da ${fmt(result.base)})` : ''}</div>
          <div className="cres-grid">
            <div className="cbi"><span>Rendita rivalutata 5%</span><span className="cbv">{fmt(result.rivalutata)}</span></div>
            <div className="cbi"><span>Base imponibile (&times;160)</span><span className="cbv">{fmt(result.base)}</span></div>
            <div className="cbi"><span>Acconto (16 giugno)</span><span className="cbv">{fmt(result.acconto)}</span></div>
            <div className="cbi"><span>Saldo (16 dicembre)</span><span className="cbv">{fmt(result.saldo)}</span></div>
          </div>
          <p style={{fontSize:'12px',color:'var(--text-3)',marginTop:'12px',lineHeight:'1.4'}}>Stima indicativa per abitazioni (moltiplicatore 160). L&apos;aliquota effettiva dipende dal Comune. Verifica su finanze.gov.it.</p>
        </div>
      </div>
    </div>
  );
}
