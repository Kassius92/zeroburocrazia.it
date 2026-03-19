'use client';
import { useState } from 'react';
import Link from 'next/link';

const filters = [
  { label: 'Tutti', value: 'all' },
  { label: '\uD83D\uDCB0 Fisco', value: 'fisco' },
  { label: '\uD83C\uDFE0 Casa', value: 'casa' },
  { label: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67 Famiglia', value: 'famiglia' },
  { label: '\uD83D\uDCBC Lavoro', value: 'lavoro' },
  { label: '\uD83E\uDEAA Documenti', value: 'documenti' },
  { label: '\uD83D\uDCCA Partita IVA', value: 'piva' },
];

const items = [
  // FISCO
  { cat: 'fisco', badge: 'big', title: 'Tre scaglioni IRPEF definitivi', text: 'La riforma IRPEF diventa strutturale. Fino a 28.000\u20AC paghi il 23%, da 28.001\u20AC a 50.000\u20AC il 33% (prima era 35%), oltre 50.000\u20AC il 43%. Risparmio per chi guadagna tra 28.000\u20AC e 50.000\u20AC: circa 440\u20AC/anno.', guide: '/730', guideName: '730' },
  { cat: 'fisco', badge: 'warn', title: 'Reddito sopra 75.000\u20AC: detrazioni ridotte', text: 'Le detrazioni al 19% vengono tagliate progressivamente fino ad azzerarsi a 100.000\u20AC. Restano intatte: spese sanitarie, interessi mutuo prima casa (stipulati entro 2024) e rate ristrutturazioni gi\u00E0 iniziate.', guide: '/spese-mediche', guideName: 'Spese mediche' },
  { cat: 'fisco', badge: 'warn', title: 'Figli a carico: limite dei 30 anni', text: 'I figli possono essere fiscalmente a carico solo fino ai 30 anni (prima non c\u2019era limite). Unica eccezione: figli con disabilit\u00E0 certificata Legge 104.', guide: '/730', guideName: '730' },
  { cat: 'fisco', title: 'Detrazione lavoro dipendente aumentata', text: 'Per chi guadagna meno di 15.000\u20AC lordi, la detrazione sale da 1.880\u20AC a 1.955\u20AC (+75\u20AC).', guide: '/730', guideName: '730' },
  { cat: 'fisco', title: 'Spese scolastiche: tetto a 1.000\u20AC', text: 'Il tetto massimo per le spese di istruzione passa da 800\u20AC a 1.000\u20AC per figlio. Il risparmio massimo sale da 152\u20AC a 190\u20AC.', guide: '/730', guideName: '730' },
  { cat: 'fisco', title: 'Bonus affitto per neoassunti', text: 'Assunto a tempo indeterminato nel 2025 e trasferito per lavoro a pi\u00F9 di 100 km? I rimborsi del datore per affitto non fanno reddito per 2 anni, fino a 5.000\u20AC/anno.', guide: '/730', guideName: '730' },
  { cat: 'fisco', badge: 'warn', title: 'Farmaci: serve pagamento tracciabile', text: 'Dal 2025 anche i farmaci da banco senza ricetta richiedono pagamento con carta o bonifico per essere detraibili. In contanti restano detraibili solo farmaci con ricetta e visite in strutture SSN.', guide: '/spese-mediche', guideName: 'Spese mediche' },

  // CASA
  { cat: 'casa', badge: 'big', title: 'Bonus ristrutturazione: 50% prima casa, 36% seconda', text: 'Detrazione confermata al 50% per la prima casa (tetto 96.000\u20AC), scende al 36% per gli altri immobili. Sconto in fattura e cessione del credito non sono pi\u00F9 disponibili.', guide: '/ristrutturare', guideName: 'Ristrutturare' },
  { cat: 'casa', title: 'Ecobonus e Sismabonus: stesse aliquote', text: '50% per la prima casa, 36% per le altre. Tetti di spesa invariati.', guide: '/ristrutturare', guideName: 'Ristrutturare' },
  { cat: 'casa', title: 'Bonus mobili: confermato al 50%', text: 'Detrazione del 50% su mobili e grandi elettrodomestici fino a 5.000\u20AC, solo con ristrutturazione in corso o conclusa nell\u2019anno.', guide: '/bonus-mobili', guideName: 'Bonus mobili' },

  // FAMIGLIA
  { cat: 'famiglia', title: 'Assegno unico: importi rivalutati', text: 'Con ISEE sotto 17.090\u20AC l\u2019importo sale a 200,99\u20AC/mese per figlio minore. Con ISEE oltre 45.574\u20AC il minimo \u00E8 57,45\u20AC/mese. Se presenti ISEE entro il 30 giugno, arretrati da gennaio.', guide: '/assegno-unico', guideName: 'Assegno unico' },
  { cat: 'famiglia', title: 'Bonus mamme lavoratrici: esteso alle autonome', text: 'Il bonus contributivo per le madri lavoratrici con 2 o pi\u00F9 figli si estende anche alle lavoratrici autonome.', guide: '/figlio', guideName: 'Aspetto un figlio' },

  // LAVORO
  { cat: 'lavoro', title: 'NASpI: nessun cambiamento sostanziale', text: 'Requisiti e modalit\u00E0 restano invariati. Gli importi massimi sono rivalutati annualmente dall\u2019INPS.', guide: '/naspi', guideName: 'NASpI' },
  { cat: 'lavoro', title: 'Dimissioni online: procedura invariata', text: 'Le dimissioni volontarie continuano a essere obbligatoriamente telematiche tramite il portale del Ministero del Lavoro (accessibile con SPID).', guide: '/dimissioni', guideName: 'Dimissioni' },

  // DOCUMENTI
  { cat: 'documenti', title: 'IT Wallet: patente e tessera sanitaria su app IO', text: 'Da marzo 2026 puoi avere patente e tessera sanitaria in formato digitale nell\u2019app IO. Serve lo SPID per attivarle. Sono documenti validi a tutti gli effetti.', guide: '/spid', guideName: 'SPID' },

  // PIVA
  { cat: 'piva', title: 'Forfettario: soglia confermata a 85.000\u20AC', text: 'Il limite di ricavi per il regime forfettario resta a 85.000\u20AC. Aliquote invariate: 15% (o 5% per i primi 5 anni).', guide: '/regime-forfettario', guideName: 'Regime forfettario' },
  { cat: 'piva', title: 'Flat tax incrementale: non rinnovata', text: 'La flat tax incrementale al 15% sugli incrementi di reddito non \u00E8 stata rinnovata per il 2026.', guide: '/piva', guideName: 'Partita IVA' },
];

const catLabels = { fisco: '\uD83D\uDCB0 Fisco', casa: '\uD83C\uDFE0 Casa', famiglia: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67 Famiglia', lavoro: '\uD83D\uDCBC Lavoro', documenti: '\uD83E\uDEAA Documenti', piva: '\uD83D\uDCCA Partita IVA' };
const catColors = { fisco: 'var(--tc)', casa: 'var(--teal)', famiglia: '#9B5DE5', lavoro: '#D97706', documenti: '#2A9D8F', piva: 'var(--tc)' };

export default function NovitaContent() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? items : items.filter(i => i.cat === active);

  return (
    <>
      <div className="nov-hero">
        <div className="nov-label">{'\uD83D\uDCCB'} Aggiornato a marzo 2026</div>
        <h1>Cosa cambia nel 2026</h1>
        <p>Tutti i cambiamenti della Legge di Bilancio 2026 e delle circolari INPS. Solo cose certe, gi&agrave; in vigore. Niente rumor.</p>
      </div>

      <div className="filters">
        {filters.map(f => (
          <button
            key={f.value}
            className={`filter-pill${active === f.value ? ' active' : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="posts">
        {filtered.map((item, i) => (
          <div key={i} className="nov-card">
            <div className="nc-top">
              <span className="nc-cat" style={{ color: catColors[item.cat] }}>{catLabels[item.cat]}</span>
              {item.badge === 'big' && <span className="nc-badge nc-badge-big">Importante</span>}
              {item.badge === 'warn' && <span className="nc-badge nc-badge-warn">Attenzione</span>}
            </div>
            <h3 className="nc-title">{item.title}</h3>
            <p className="nc-text">{item.text}</p>
            {item.guide && (
              <Link href={item.guide} className="nc-guide">
                {'\uD83D\uDCD6'} Leggi la guida: {item.guideName} &rarr;
              </Link>
            )}
          </div>
        ))}

        <div className="nov-footer-note">
          <p><strong>Fonti:</strong> Legge di Bilancio 2026 (L. 199/2025), Agenzia delle Entrate, circolari INPS, D.Lgs. 216/2023 (riforma IRPEF). Ultimo aggiornamento: marzo 2026.</p>
          <p>Le informazioni in questa pagina sono a scopo informativo. Per decisioni importanti, consulta un professionista.</p>
        </div>
      </div>
    </>
  );
}
