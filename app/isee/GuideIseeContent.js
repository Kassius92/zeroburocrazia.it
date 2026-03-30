'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideIseeContent({ faqItems }) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('v');
        else e.target.classList.remove('v');
      }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.rv,.rv-scale,.rv-left,.rv-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="guide">
        <div className="guide-hero">
          <div className="guide-hero-inner">
          <div className="guide-hero-text">
            <div className="guide-crumb">
              <Link href="/guide">Guide</Link>
              <span className="guide-crumb-sep">&rsaquo;</span>
              <span>Fisco</span>
            </div>

            <div className="guide-hero-top">
              <span className="guide-tag fisco">Fisco</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>

            <h1>Come Fare l&apos;ISEE nel 2026: Documenti e Procedura</h1>

            <p className="guide-hero-sub">
              Cos&apos;&egrave;, a cosa serve, come si fa, quali documenti servono. Se devi chiedere un bonus o un&apos;agevolazione, parti da qui.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                10 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <img src="/hero-isee.png" alt="Guida ISEE 2026: documento, famiglia, bonus" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--green)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; l&apos;ISEE e perch&eacute; ti serve per quasi tutti i bonus</li>
                <li>Come farlo gratis online o al CAF</li>
                <li>Tutti i documenti necessari (checklist completa)</li>
                <li>Un esempio reale: Laura recupera 4.500&euro; all&apos;anno</li>
                <li>Gli errori pi&ugrave; comuni e come evitarli</li>
              </ul>
            </div>
          </div>

          {/* TOC */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; l&apos;ISEE</a>
              <a href="#serve">A cosa serve</a>
              <a href="#come-si-fa">Come si fa</a>
              <a href="#documenti">I documenti necessari</a>
              <a href="#esempio">Esempio: il caso di Laura</a>
              <a href="#errori">Gli errori da evitare</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; l&apos;ISEE, <em>spiegato semplice</em></h2>

            <p>Immagina che lo Stato voglia sapere quanto &egrave; &quot;ricca&quot; la tua famiglia, per decidere se aiutarti o no. Non guarda solo lo stipendio &mdash; guarda <strong>tutto</strong>: quanto guadagnate, quanto avete in banca, se avete una casa di propriet&agrave;. Mette insieme tutti questi numeri, fa un calcolo, e tira fuori <strong>un solo numero in euro</strong>. Quello &egrave; il tuo ISEE.</p>

            <p>Funziona come un punteggio: pi&ugrave; &egrave; basso, pi&ugrave; bonus puoi ottenere. Con un ISEE di 15.000&euro; hai diritto a quasi tutto. Con 45.000&euro; ti escludono dalla maggior parte delle agevolazioni. &Egrave; la &quot;chiave&quot; che apre (o chiude) le porte dei bonus.</p>

            <p>Per ottenere il tuo ISEE devi compilare un modulo chiamato <strong>DSU</strong> (Dichiarazione Sostitutiva Unica). Lo mandi all&apos;INPS, che fa il calcolo e ti restituisce un documento chiamato <strong>attestazione ISEE</strong>. L&apos;ISEE vale <strong>dal giorno in cui lo fai fino al 31 dicembre</strong> dello stesso anno &mdash; poi ne serve uno nuovo.</p>

            <h3>Le parole che devi conoscere</h3>
            <p><strong>DSU</strong> &mdash; Il modulo dove inserisci tutti i dati della famiglia. Lo compili online sul sito INPS o lo fa il CAF per te.</p>
            <p><strong>Nucleo familiare</strong> &mdash; Le persone che risultano nel tuo stato di famiglia anagrafico. Di solito: tu, il tuo partner (se convivete), i figli.</p>
            <p><strong>Patrimonio mobiliare</strong> &mdash; Soldi sul conto, risparmi, investimenti, azioni, fondi, buoni postali. Anche la PostePay Evolution conta.</p>
            <p><strong>Giacenza media</strong> &mdash; La media dei soldi che hai avuto sul conto durante l&apos;anno. La banca te la d&agrave; insieme al saldo.</p>
            <p><strong>ISEE corrente</strong> &mdash; Una versione aggiornata dell&apos;ISEE per chi ha avuto un cambiamento importante (perso il lavoro, calo di reddito). Vale 6 mesi.</p>

            <div className="guide-callout">
              <strong>ISEE e 730: non sono la stessa cosa.</strong> Il 730 serve a pagare le tasse e recuperare detrazioni. L&apos;ISEE serve a chiedere bonus e agevolazioni. Sono indipendenti. <Link href="/730" style={{color:'var(--green)',fontWeight:600}}>Scopri come fare il 730</Link>
            </div>
          </div>

          {/* A COSA SERVE */}
          <div className="guide-section rv" id="serve">
            <div className="guide-section-label">Utilizzo</div>
            <h2>A cosa serve <em>in concreto</em></h2>

            <p>In Italia, quasi tutti i bonus e le agevolazioni pubbliche richiedono l&apos;ISEE. &Egrave; il biglietto d&apos;ingresso. Se non ce l&apos;hai, non puoi nemmeno fare domanda &mdash; anche se quei soldi ti spetterebbero.</p>

            <h3>I bonus pi&ugrave; richiesti</h3>
            <p><strong>Assegno unico figli</strong> &mdash; Da 58&euro; a 204&euro; al mese per figlio. Senza ISEE ricevi il minimo.</p>
            <p><strong>Rette universitarie</strong> &mdash; Esonero totale sotto i 22.000&euro;. Riduzioni fino a 30.000&euro;.</p>
            <p><strong>Mensa scolastica</strong> &mdash; Il costo cambia in base all&apos;ISEE. Si va da 0&euro; a tariffa piena.</p>
            <p><strong>Bonus nido</strong> &mdash; Fino a 3.600&euro;/anno per l&apos;asilo nido. L&apos;importo dipende dall&apos;ISEE.</p>
            <p><strong>Bonus bollette</strong> &mdash; Sconto automatico su luce, gas e acqua con ISEE basso.</p>
            <p><strong>Ticket sanitari</strong> &mdash; Esenzione dal ticket per visite ed esami con reddito basso.</p>

            <div className="guide-callout warn">
              <strong>Senza ISEE stai regalando soldi.</strong> Hai un figlio e non hai fatto l&apos;ISEE? Ricevi l&apos;assegno unico al minimo: 58&euro; al mese. Ma se il tuo ISEE &egrave; sotto i 17.500&euro;, ti spettano 204&euro; al mese. Differenza: <strong>1.752&euro; all&apos;anno buttati via</strong>. Per un modulo che si compila in 15 minuti.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
              <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">BONUS CON ISEE</text>
                <rect x="16" y="50" width="308" height="36" rx="10" fill="#2D8A6E"/>
                <text x="28" y="74" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Assegno unico &mdash; fino a 204&euro;/mese</text>
                <rect x="16" y="94" width="260" height="36" rx="10" fill="#E8724A"/>
                <text x="28" y="118" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Bonus nido &mdash; fino a 3.600&euro;/anno</text>
                <rect x="16" y="138" width="220" height="36" rx="10" fill="#5B7EC5"/>
                <text x="28" y="162" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Universit&agrave; &mdash; esonero tasse</text>
                <rect x="16" y="182" width="180" height="36" rx="10" fill="#8B6CC1"/>
                <text x="28" y="206" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Bonus bollette</text>
                <rect x="16" y="226" width="140" height="36" rx="10" fill="#C49A2A"/>
                <text x="28" y="250" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Mensa scolastica</text>
              </svg>
            </div>
          </div>

          {/* COME SI FA */}
          <div className="guide-section rv" id="come-si-fa">
            <div className="guide-section-label">Procedura</div>
            <h2>Come si fa l&apos;ISEE</h2>

            <p>Hai 3 strade. Due sono completamente gratuite. Per fare l&apos;ISEE online ti serve lo SPID. Se non ce l&apos;hai, <Link href="/spid" style={{color:'var(--green)',fontWeight:600}}>fallo prima</Link> &mdash; ci vogliono 15 minuti e non costa niente.</p>

            <h3>Opzione 1: Online da solo (la pi&ugrave; veloce)</h3>
            <p>Dal 2024 l&apos;INPS ti mette a disposizione la <strong>DSU precompilata</strong> &mdash; un modulo che ha gi&agrave; dentro quasi tutto: redditi, conti, immobili. Tu controlli, aggiungi quello che manca e confermi. Fine.</p>

            <p><strong>Passo 1:</strong> Vai su inps.it e accedi con SPID. Cerca &quot;ISEE precompilato&quot;.</p>
            <p><strong>Passo 2:</strong> Controlla i dati che l&apos;INPS ha gi&agrave; inserito (redditi, conti, immobili).</p>
            <p><strong>Passo 3:</strong> Completa i dati del nucleo familiare.</p>
            <p><strong>Passo 4:</strong> Conferma e aspetta. L&apos;attestazione compare in 1-3 giorni.</p>

            <h3>Opzione 2: Al CAF (gratis, lo fanno loro)</h3>
            <p>Vai a un CAF con i documenti. Compilano tutto loro e mandano la DSU all&apos;INPS. <strong>&Egrave; gratis al 100%</strong> &mdash; i CAF vengono pagati dallo Stato. Unico problema: nei primi mesi dell&apos;anno c&apos;&egrave; la fila.</p>

            <h3>Opzione 3: Dal commercialista (a pagamento)</h3>
            <p>Il commercialista pu&ograve; farlo, ma <strong>ti chiede 30-80&euro;</strong> per qualcosa che al CAF &egrave; gratis. Ha senso solo se la tua situazione &egrave; molto complicata.</p>

            <div className="guide-callout">
              <strong>Sai usare il computer e hai lo SPID?</strong> &rarr; Fallo online. 15 minuti, zero euro.<br/>
              <strong>Preferisci che qualcuno ti aiuti?</strong> &rarr; Vai al CAF. Gratis, mezz&apos;ora.<br/>
              <strong>Situazione complicata?</strong> &rarr; Commercialista. Paghi, ma eviti errori.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#FBF5E6,#f5edd4)'}}>
              <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#C49A2A" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CONFRONTO METODI</text>
                
                <rect x="16" y="50" width="308" height="60" rx="12" fill="white"/>
                <text x="28" y="75" fill="#1A1A2E" fontFamily="sans-serif" fontSize="14" fontWeight="700">Online (INPS)</text>
                <text x="28" y="95" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="600">Gratis &middot; 15-20 min &middot; Serve SPID</text>
                
                <rect x="16" y="120" width="308" height="60" rx="12" fill="white"/>
                <text x="28" y="145" fill="#1A1A2E" fontFamily="sans-serif" fontSize="14" fontWeight="700">CAF / Patronato</text>
                <text x="28" y="165" fill="#2D8A6E" fontFamily="sans-serif" fontSize="13" fontWeight="600">Gratis &middot; 30 min &middot; Possibile coda</text>
                
                <rect x="16" y="190" width="308" height="60" rx="12" fill="white"/>
                <text x="28" y="215" fill="#1A1A2E" fontFamily="sans-serif" fontSize="14" fontWeight="700">Commercialista</text>
                <text x="28" y="235" fill="#E8724A" fontFamily="sans-serif" fontSize="13" fontWeight="600">30-80&euro; &middot; 15 min &middot; Per casi complessi</text>
              </svg>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Checklist</div>
            <h2>I documenti <em>necessari</em></h2>

            <p>Questi servono per <strong>tutti i componenti del nucleo familiare</strong> &mdash; non solo per te. Se fai la precompilata online, la maggior parte &egrave; gi&agrave; inserita dall&apos;INPS.</p>

            <h3>Sempre necessari</h3>
            <p><strong>Documento d&apos;identit&agrave; e codice fiscale</strong> &mdash; Di ogni componente del nucleo.</p>
            <p><strong>Stato di famiglia</strong> &mdash; Lo scarichi online con SPID dal sito del tuo Comune.</p>

            <h3>Redditi (anno 2024)</h3>
            <p><strong>Ultima dichiarazione dei redditi</strong> (730 o Modello Redditi) &mdash; Quella fatta nel 2025 sui redditi 2024.</p>
            <p><strong>CU 2025</strong> (Certificazione Unica) &mdash; Te la d&agrave; il datore di lavoro.</p>

            <h3>Patrimonio (saldo al 31 dicembre 2024)</h3>
            <p><strong>Saldo e giacenza media di tutti i conti</strong> &mdash; Li trovi nell&apos;home banking.</p>
            <p><strong>Carte prepagate con IBAN</strong> &mdash; PostePay Evolution, Hype, Revolut, N26.</p>
            <p><strong>Titoli, azioni, fondi</strong> &mdash; Valore al 31/12/2024.</p>
            <p><strong>Valore immobili</strong> (rendita catastale) &mdash; Dalla visura catastale.</p>
            <p><strong>Mutuo residuo</strong> &mdash; Abbassa il patrimonio (e quindi l&apos;ISEE).</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
              <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#5B7EC5" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CHECKLIST DOCUMENTI ISEE</text>
                
                <rect x="16" y="50" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="75" r="14" fill="#E4F3ED"/>
                <path d="M37 75l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="80" fill="#1A1A2E" fontFamily="sans-serif" fontSize="13" fontWeight="600">CU 2025</text>
                
                <rect x="16" y="108" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="133" r="14" fill="#E4F3ED"/>
                <path d="M37 133l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="129" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Stato di</text>
                <text x="66" y="144" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">famiglia</text>
                
                <rect x="16" y="166" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="191" r="14" fill="#E4F3ED"/>
                <path d="M37 191l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="187" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Saldi conti</text>
                <text x="66" y="202" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">+ giacenza</text>
                
                <rect x="16" y="224" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="249" r="14" fill="#E4F3ED"/>
                <path d="M37 249l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="254" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Documenti</text>
                
                <rect x="174" y="50" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="75" r="14" fill="#FDF0EB"/>
                <text x="224" y="72" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Visura</text>
                <text x="224" y="87" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">catastale</text>
                
                <rect x="174" y="108" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="133" r="14" fill="#FDF0EB"/>
                <text x="224" y="129" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Mutuo</text>
                <text x="224" y="144" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">residuo</text>
                
                <rect x="174" y="166" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="191" r="14" fill="#FDF0EB"/>
                <text x="224" y="187" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Carte con</text>
                <text x="224" y="202" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">IBAN</text>
                
                <rect x="174" y="224" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="249" r="14" fill="#FDF0EB"/>
                <text x="224" y="245" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Investimenti</text>
                <text x="224" y="260" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">e titoli</text>
              </svg>
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Laura</em></h2>

            <p><strong>Laura ha 32 anni</strong>, vive a Padova con il compagno Marco e il loro figlio Tommaso di 4 anni. Laura lavora part-time come segretaria (1.200&euro; al mese), Marco &egrave; magazziniere (1.500&euro; al mese). Hanno 8.000&euro; di risparmi e vivono in affitto.</p>

            <p>Tommaso va all&apos;asilo nido comunale &mdash; <strong>380&euro; al mese</strong>. Laura riceve l&apos;assegno unico, ma siccome non ha mai fatto l&apos;ISEE, prende il minimo: <strong>58&euro; al mese</strong>. Alla mensa paga la tariffa piena: <strong>7&euro; al giorno</strong>.</p>

            <p>Un&apos;amica le dice: <em>&quot;Ma hai fatto l&apos;ISEE? Io con l&apos;ISEE pago la met&agrave; del nido.&quot;</em></p>

            <h3>Laura fa l&apos;ISEE</h3>
            <p>Va sul sito dell&apos;INPS con lo SPID. Apre la DSU precompilata. I redditi suoi e di Marco sono gi&agrave; dentro. Controlla, conferma. <strong>Tempo totale: 20 minuti.</strong></p>

            <p>Dopo 2 giorni, l&apos;attestazione compare. Risultato: <strong>ISEE 16.800&euro;</strong>.</p>

            <div className="guide-compare" style={{marginTop:'24px'}}>
              <div className="guide-compare-item before">
                <strong>Prima (senza ISEE)</strong>
                Assegno unico: 58&euro;/mese<br />
                Bonus nido: 0&euro;/anno<br />
                Mensa: 7&euro;/giorno
              </div>
              <div className="guide-compare-item after">
                <strong>Dopo (con ISEE)</strong>
                Assegno unico: 189&euro;/mese<br />
                Bonus nido: 2.500&euro;/anno<br />
                Mensa: 3&euro;/giorno<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>+4.572&euro;/anno</strong>
              </div>
            </div>

            <p>Laura non ci credeva. <strong>4.572&euro; in pi&ugrave; all&apos;anno</strong> &mdash; soldi che le spettavano da sempre ma che non ha mai chiesto. E quell&apos;anno prima senza ISEE? Perso. Non si recupera.</p>
          </div>

          {/* ERRORI */}
          <div className="guide-section rv" id="errori">
            <div className="guide-section-label">Da evitare</div>
            <h2>Gli errori <em>pi&ugrave; comuni</em></h2>

            <h3>Dimenticare un conto corrente</h3>
            <p>Hai una PostePay Evolution che usi poco? Un conto Revolut aperto per curiosit&agrave;? <strong>Va dichiarato.</strong> L&apos;INPS incrocia i dati con le banche. Se scopre un conto che hai &quot;dimenticato&quot;, annulla l&apos;ISEE.</p>

            <h3>Sbagliare il nucleo familiare</h3>
            <p>Il nucleo ISEE non &egrave; sempre chi vive con te fisicamente. Sei separato di fatto ma non legalmente? Il tuo ex &egrave; ancora nel tuo nucleo. Se hai dubbi, chiedi al CAF.</p>

            <h3>Mettere solo il saldo e non la giacenza media</h3>
            <p>La banca ti d&agrave; due numeri: il saldo al 31/12 e la giacenza media. Nell&apos;ISEE va <strong>il pi&ugrave; alto dei due</strong>. Molti mettono solo il saldo e poi si stupiscono del risultato.</p>

            <h3>Non fare l&apos;ISEE corrente quando serve</h3>
            <p>Hai perso il lavoro? Il tuo reddito &egrave; calato di almeno il 25%? Puoi fare l&apos;<strong>ISEE corrente</strong> che fotografa la situazione di adesso. Se non lo fai, perdi agevolazioni.</p>
          </div>

          {/* FAQ */}
          <div className="guide-section rv" id="faq">
            <div className="guide-section-label">Risposte rapide</div>
            <h2>Domande <em>frequenti</em></h2>
            <FAQ items={faqItems} />
          </div>

          {/* GUIDE CORRELATE */}
          <div className="guide-section rv">
            <div className="guide-section-label">Continua a leggere</div>
            <h2>Guide <em>correlate</em></h2>
            <div className="guide-related">
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#E8724A" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 / 2026</text>
                    <rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="110" r="8" fill="#E4F3ED" />
                    <text x="68" y="113" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">1</text>
                    <rect x="84" y="106" width="100" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="132" r="8" fill="#E4F3ED" />
                    <text x="68" y="135" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">2</text>
                    <rect x="84" y="128" width="80" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="154" r="8" fill="#E4F3ED" />
                    <text x="68" y="157" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">3</text>
                    <rect x="84" y="150" width="120" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="240" cy="44" r="16" fill="#E8724A" opacity=".9" />
                    <text x="240" y="49" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">&euro;</text>
                  </svg>
                </div>
                <h4>Come Fare il 730 nel 2026</h4>
                <p>Detrazioni, scadenze, rimborso. Tutto sulla dichiarazione dei redditi.</p>
              </Link>
              <Link href="/spid" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#5B7EC5" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">Accedi con SPID</text>
                    <rect x="56" y="78" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1" />
                    <text x="68" y="96" fill="#B5B0A8" fontFamily="sans-serif" fontSize="10">Email o username</text>
                    <rect x="56" y="114" width="208" height="28" rx="6" fill="#FAF8F4" stroke="#E8E0D4" strokeWidth="1" />
                    <text x="68" y="132" fill="#B5B0A8" fontFamily="sans-serif" fontSize="10">Password</text>
                    <rect x="56" y="150" width="208" height="24" rx="6" fill="#5B7EC5" />
                    <text x="160" y="166" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="10" fontWeight="bold">Entra con SPID</text>
                    <circle cx="240" cy="44" r="16" fill="#5B7EC5" opacity=".9" />
                    <path d="M240 36v8M236 40h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Come Fare lo SPID in 15 Minuti</h4>
                <p>Per fare l&apos;ISEE online ti serve lo SPID. Ecco come ottenerlo gratis.</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="guide-cta rv">
            <h2>Altre guide gratuite</h2>
            <p>33 guide sulla burocrazia italiana, tutte gratuite e aggiornate.</p>
            <Link href="/guide" className="guide-cta-btn">
              Esplora tutte le guide
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
