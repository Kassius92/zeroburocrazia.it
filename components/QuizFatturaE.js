'use client';
import { useState } from 'react';

export default function QuizFatturaE() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '\u2705 S\u00EC, devi fare la fattura elettronica. Continua a leggere: ti spieghiamo come funziona, quali strumenti usare (anche gratis) e gli errori da evitare.' });
    else if (a && !b) setResult({ type: 'pos', text: '\u2705 Anche i forfettari dal 2024 devono fare fattura elettronica (tranne chi fattura sotto 25.000\u20AC lordi). Leggi la guida per capire come fare.' });
    else if (!a && b) setResult({ type: 'neu', text: '\uD83E\uDD14 Se non hai ancora la P.IVA ma stai pensando di aprirla, questa guida ti sar\u00E0 utile quando inizierai. Intanto leggi la nostra guida alla P.IVA.' });
    else setResult({ type: 'neu', text: '\uD83D\uDCA1 Se non hai P.IVA e non la aprirai, la fattura elettronica non ti riguarda direttamente. Per\u00F2 potresti riceverle come cliente \u2014 in quel caso trovi le risposte qui.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">{'\u2705'} Serve a me?</div>
      <div className="quiz-q">
        Hai una partita IVA?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>S&igrave;</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Sai gi&agrave; cos&apos;&egrave; il Sistema di Interscambio (SDI)?
        <div className="qbtns">
          <button className={`qbtn${q2 === true ? ' sy' : ''}`} onClick={() => ans2(true)}>S&igrave;</button>
          <button className={`qbtn${q2 === false ? ' sn' : ''}`} onClick={() => ans2(false)}>No</button>
        </div>
      </div>
      {result && (
        <div className={`quiz-res ${result.type}`}>{result.text}</div>
      )}
    </div>
  );
}
