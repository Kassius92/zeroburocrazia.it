'use client';
import { useState } from 'react';

export default function QuizForfettario() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '\u2705 Ottimo \u2014 sei nel forfettario o puoi entrarci. Continua a leggere: ti spieghiamo come funziona davvero, quanto paghi e gli errori da evitare.' });
    else if (a && !b) setResult({ type: 'al', text: '\u26A0\uFE0F Attenzione: se fatturi pi\u00F9 di 85.000\u20AC non puoi stare nel forfettario. Se superi la soglia durante l\u2019anno, esci dal regime dall\u2019anno dopo. Leggi la guida per capire le regole.' });
    else if (!a && b) setResult({ type: 'neu', text: '\uD83E\uDD14 Non hai ancora P.IVA ma vuoi capire il forfettario? Perfetto, questa guida ti spiega tutto prima di aprirla.' });
    else setResult({ type: 'neu', text: '\uD83D\uDCA1 Se non hai P.IVA e pensi di fatturare molto, il forfettario potrebbe non fare per te. Leggi comunque per capire la differenza con l\u2019ordinario.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">{'\u2705'} Serve a me?</div>
      <div className="quiz-q">
        Hai gi&agrave; una partita IVA (o stai per aprirla)?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>S&igrave;</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Il tuo fatturato annuo &egrave; (o sar&agrave;) sotto gli 85.000&euro;?
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
