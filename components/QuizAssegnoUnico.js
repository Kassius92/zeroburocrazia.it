'use client';
import { useState } from 'react';

export default function QuizAssegnoUnico() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '\u2705 Hai diritto all\u2019Assegno Unico! L\u2019importo dipende dal tuo ISEE e dal numero di figli. Continua a leggere per scoprire quanto ti spetta e come fare domanda.' });
    else if (a && !b) setResult({ type: 'al', text: '\u26A0\uFE0F Hai figli a carico ma non hai l\u2019ISEE? Puoi comunque ricevere l\u2019Assegno Unico al minimo (58,30\u20AC/mese per figlio minore). Per\u00F2 con l\u2019ISEE potresti prendere fino a 203,80\u20AC. Leggi la guida ISEE per farlo subito.' });
    else if (!a && b) setResult({ type: 'neu', text: '\uD83E\uDD14 Non hai figli a carico? L\u2019Assegno Unico non fa per te. Ma se stai pensando di avere un figlio, questa guida ti far\u00E0 capire quanto riceverai.' });
    else setResult({ type: 'neu', text: '\uD83D\uDCA1 Senza figli a carico l\u2019Assegno Unico non si applica. Salva questa guida per il futuro!' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">{'\u2705'} Serve a me?</div>
      <div className="quiz-q">
        Hai figli a carico sotto i 21 anni (o sei in gravidanza dal 7&deg; mese)?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>S&igrave;</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Hai un ISEE in corso di validit&agrave; (2026)?
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
