'use client';
import { useState } from 'react';

export default function QuizSpeseMediche() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '\u2705 Puoi sicuramente detrarre le spese mediche nel 730. Continua a leggere: trovi l\u2019elenco completo di cosa si pu\u00F2 scaricare e come farlo.' });
    else if (a && !b) setResult({ type: 'al', text: '\u26A0\uFE0F Hai speso meno di 129,11\u20AC — purtroppo sotto questa soglia (franchigia) non c\u2019\u00E8 detrazione. Ma conserva tutto: se hai altre spese mediche da aggiungere, potresti superarla.' });
    else if (!a && b) setResult({ type: 'neu', text: '\uD83E\uDD14 Non hai fatto spese mediche quest\u2019anno, ma questa guida ti spiega cosa potrai detrarre quando ne avrai. Conservala per il prossimo 730.' });
    else setResult({ type: 'neu', text: '\uD83D\uDCA1 Nessuna spesa medica sotto i 129\u20AC? Per ora non hai nulla da detrarre, ma leggere la guida ti far\u00E0 risparmiare in futuro.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">{'\u2705'} Serve a me?</div>
      <div className="quiz-q">
        Hai sostenuto spese mediche nel 2025 (visite, farmaci, esami, dentista)?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>S&igrave;</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Il totale supera i 130&euro; circa?
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
