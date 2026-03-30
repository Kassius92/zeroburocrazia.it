'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function GuideSpidContent({ faqItems }) {
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
              <span>Documenti</span>
            </div>

            <div className="guide-hero-top">
              <span className="guide-tag documenti">Documenti</span>
              <span className="guide-hero-date">Mar 2026</span>
            </div>

            <h1>Come Fare lo SPID nel 2026: Gratis con CIE</h1>

            <p className="guide-hero-sub">
              La tua identit&agrave; digitale, spiegata semplice. Come ottenerla in 15 minuti, quale provider scegliere e perch&eacute; nel 2026 non puoi farne a meno.
            </p>

            <div className="guide-hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                8 min di lettura
              </span>
            </div>
          </div>

          <div className="guide-hero-img">
            <img src="/hero-spid.png" alt="Guida SPID 2026" style={{width:'100%',height:'100%',objectFit:'contain'}} />
          </div>
          </div>
        </div>

        {/* BODY */}
        <div className="guide-body">

          {/* KEY TAKEAWAYS */}
          <div className="guide-section rv">
            <div className="guide-callout" style={{borderLeftColor:'var(--blue)'}}>
              <strong style={{display:'block',marginBottom:'8px',fontSize:'16px'}}>In questa guida imparerai:</strong>
              <ul style={{paddingLeft:'18px',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',lineHeight:'1.6'}}>
                <li>Cos&apos;&egrave; lo SPID e perch&eacute; ti serve per tutto</li>
                <li>Come farlo gratis con la CIE (il metodo pi&ugrave; veloce)</li>
                <li>Quale provider scegliere (confronto completo)</li>
                <li>Un esempio reale: Marco fa lo SPID in 12 minuti</li>
                <li>Le risposte alle domande pi&ugrave; comuni</li>
              </ul>
            </div>
          </div>

          {/* TOC */}
          <div className="guide-section rv" style={{paddingTop:'0'}}>
            <div className="guide-section-label">Indice</div>
            <nav className="guide-toc">
              <a href="#cose">Cos&apos;&egrave; lo SPID</a>
              <a href="#serve">A cosa serve</a>
              <a href="#come-si-fa">Come si fa</a>
              <a href="#provider">Quale provider scegliere</a>
              <a href="#documenti">Cosa ti serve</a>
              <a href="#esempio">Esempio: il caso di Marco</a>
              <a href="#faq">Domande frequenti</a>
            </nav>
          </div>

          {/* COS'È */}
          <div className="guide-section rv" id="cose">
            <div className="guide-section-label">Le basi</div>
            <h2>Cos&apos;&egrave; lo SPID, <em>spiegato semplice</em></h2>

            <p>Pensa allo SPID come al <strong>documento d&apos;identit&agrave; per internet</strong>. Quando vai in posta o al Comune, mostri la carta d&apos;identit&agrave; per dimostrare chi sei. Online funziona uguale: quando entri su un sito della Pubblica Amministrazione (INPS, Agenzia delle Entrate, il tuo Comune), il sito ti chiede &quot;chi sei?&quot; &mdash; e tu rispondi con lo SPID.</p>

            <p>In pratica &egrave; un <strong>nome utente + una password + una conferma dal telefono</strong>. Lo fai una volta sola, e da quel momento in poi accedi a tutto. Non scade, non costa nulla, e ti evita code e raccomandate per sempre.</p>

            <h3>Le parole che devi conoscere</h3>
            <p><strong>SPID</strong> &mdash; Sistema Pubblico di Identit&agrave; Digitale. Il tuo documento d&apos;identit&agrave; online per accedere ai servizi della PA.</p>
            <p><strong>Provider</strong> &mdash; L&apos;azienda che ti rilascia lo SPID (Poste, Aruba, Lepida). Sono autorizzati dallo Stato. Lo SPID &egrave; identico qualunque provider scegli.</p>
            <p><strong>CIE</strong> &mdash; Carta d&apos;Identit&agrave; Elettronica. La carta con il chip NFC. Se l&apos;hai fatta dopo il 2017, ce l&apos;hai. Puoi usarla per fare lo SPID senza uscire di casa.</p>
            <p><strong>Riconoscimento</strong> &mdash; Il momento in cui il provider verifica che sei davvero tu. Pu&ograve; avvenire di persona, con la CIE, con videochiamata, o con firma digitale.</p>

            <div className="guide-callout">
              <strong>SPID vs CIE: qual &egrave; la differenza?</strong> La CIE fa molte delle stesse cose. La differenza: la CIE la devi avvicinare al telefono ogni volta. Lo SPID &egrave; pi&ugrave; pratico. Il consiglio: <strong>fatti entrambi</strong>.
            </div>
          </div>

          {/* A COSA SERVE */}
          <div className="guide-section rv" id="serve">
            <div className="guide-section-label">Utilizzo</div>
            <h2>A cosa serve <em>in concreto</em></h2>

            <p>Nel 2026, senza SPID non fai quasi nulla online con la PA. Ecco le cose pi&ugrave; comuni per cui ti serve:</p>

            <h3>I servizi pi&ugrave; usati</h3>
            <p><strong>Fare il 730</strong> &mdash; Accedi alla precompilata su agenziaentrate.gov.it</p>
            <p><strong>Fare l&apos;ISEE</strong> &mdash; Serve per bonus, agevolazioni, rette universit&agrave;</p>
            <p><strong>Chiedere bonus</strong> &mdash; Assegno unico, bonus nido, bonus trasporti, bonus psicologo</p>
            <p><strong>Fascicolo Sanitario</strong> &mdash; Referti, ricette, certificati vaccinali</p>
            <p><strong>Cambio residenza</strong> &mdash; Online in 10 minuti invece della coda all&apos;anagrafe</p>
            <p><strong>Certificati e visure</strong> &mdash; Stato di famiglia, certificato di residenza, visure catastali</p>

            <p>E poi: iscriversi all&apos;universit&agrave;, consultare i contributi INPS, prenotare visite mediche, firmare digitalmente, accedere a tutti i servizi regionali e comunali.</p>

            <div className="guide-callout warn">
              <strong>Senza SPID il 730 ti costa 30-80&euro; in pi&ugrave;.</strong> Vuoi fare il 730 da solo online? Ti serve lo SPID (o la CIE) per accedere alla precompilata gratis. Senza, l&apos;unica alternativa &egrave; andare al CAF e pagare.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
              <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#5B7EC5" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">SERVIZI CON SPID</text>
                <rect x="16" y="50" width="308" height="36" rx="10" fill="#5B7EC5"/>
                <text x="28" y="74" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">730 Precompilata &mdash; gratis</text>
                <rect x="16" y="94" width="280" height="36" rx="10" fill="#2D8A6E"/>
                <text x="28" y="118" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">ISEE Online &mdash; 15 minuti</text>
                <rect x="16" y="138" width="250" height="36" rx="10" fill="#E8724A"/>
                <text x="28" y="162" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Bonus e agevolazioni</text>
                <rect x="16" y="182" width="220" height="36" rx="10" fill="#8B6CC1"/>
                <text x="28" y="206" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Fascicolo Sanitario</text>
                <rect x="16" y="226" width="190" height="36" rx="10" fill="#C49A2A"/>
                <text x="28" y="250" fill="white" fontFamily="sans-serif" fontSize="13" fontWeight="600">Certificati online</text>
              </svg>
            </div>
          </div>

          {/* COME SI FA */}
          <div className="guide-section rv" id="come-si-fa">
            <div className="guide-section-label">Procedura</div>
            <h2>Come si fa lo SPID</h2>

            <p>10-20 minuti in tutto. Il processo ha 3 fasi: scegli il provider, registrati online, verifica la tua identit&agrave;.</p>

            <p><strong>Passo 1: Scegli il provider</strong> &mdash; Lo SPID lo rilasciano aziende autorizzate dallo Stato. I pi&ugrave; usati: PosteID, Aruba, Lepida. Lo SPID &egrave; identico qualunque provider scegli.</p>
            
            <p><strong>Passo 2: Registrati sul sito del provider</strong> &mdash; Vai sul sito, clicca &quot;Richiedi SPID&quot; e compila i tuoi dati: nome, cognome, codice fiscale, email, telefono.</p>
            
            <p><strong>Passo 3: Verifica la tua identit&agrave;</strong> &mdash; Il provider deve confermare che sei davvero tu. Ci sono 4 modi: di persona all&apos;ufficio postale (gratis), con la CIE dal telefono (gratis, 2 minuti), con videochiamata (circa 10&euro;), o con firma digitale (gratis).</p>
            
            <p><strong>Passo 4: Imposta password e scarica l&apos;app</strong> &mdash; Dopo la verifica, scegli la password e scarica l&apos;app del provider. L&apos;app ti serve per confermare l&apos;accesso ogni volta.</p>
            
            <p><strong>Passo 5: Fatto!</strong> &mdash; Prova subito su inps.it. Se funziona, hai finito. Per sempre.</p>

            <div className="guide-callout">
              <strong>Il metodo pi&ugrave; veloce in assoluto:</strong> Hai una CIE (carta con chip) e un telefono con NFC? Scegli Lepida o Aruba: avvicini la carta al telefono, confermi il PIN, e lo SPID &egrave; attivo in 5 minuti. Senza uscire di casa, senza pagare.
            </div>
          </div>

          {/* PROVIDER */}
          <div className="guide-section rv" id="provider">
            <div className="guide-section-label">Confronto</div>
            <h2>Quale provider <em>scegliere</em></h2>

            <p>Tutti i provider rilasciano lo <strong>stesso identico SPID</strong>. La differenza sta nel costo e nel metodo di riconoscimento.</p>

            <h3>PosteID</h3>
            <p><strong>Costo:</strong> Gratis. <strong>Come:</strong> Di persona in ufficio postale, con CIE, o con carta Bancoposte. Il pi&ugrave; usato in Italia. Code possibili.</p>

            <h3>Lepida</h3>
            <p><strong>Costo:</strong> Gratis. <strong>Come:</strong> CIE (tutto online in 5 minuti). Ottimo se hai la CIE.</p>

            <h3>Aruba</h3>
            <p><strong>Costo:</strong> Gratis con CIE/firma digitale, 9,90&euro; con videochiamata. <strong>Come:</strong> CIE, firma digitale, o videochiamata.</p>

            <div className="guide-callout">
              <strong>Hai la CIE?</strong> &rarr; Scegli Lepida o Aruba. Gratis, online, 5 minuti.<br/>
              <strong>Non hai la CIE?</strong> &rarr; Scegli PosteID. Vai in ufficio postale, gratis, 15 minuti.<br/>
              <strong>Vuoi farlo dal divano senza CIE?</strong> &rarr; Aruba con videochiamata a 9,90&euro;.
            </div>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#FBF5E6,#f5edd4)'}}>
              <svg viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#C49A2A" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CONFRONTO PROVIDER</text>
                
                <rect x="16" y="50" width="308" height="50" rx="12" fill="white"/>
                <text x="28" y="72" fill="#1A1A2E" fontFamily="sans-serif" fontSize="14" fontWeight="700">PosteID</text>
                <text x="28" y="90" fill="#2D8A6E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Gratis &middot; Ufficio postale o CIE</text>
                
                <rect x="16" y="108" width="308" height="50" rx="12" fill="white"/>
                <text x="28" y="130" fill="#1A1A2E" fontFamily="sans-serif" fontSize="14" fontWeight="700">Lepida</text>
                <text x="28" y="148" fill="#2D8A6E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Gratis &middot; Solo CIE &middot; 5 minuti online</text>
                
                <rect x="16" y="166" width="308" height="50" rx="12" fill="white"/>
                <text x="28" y="188" fill="#1A1A2E" fontFamily="sans-serif" fontSize="14" fontWeight="700">Aruba</text>
                <text x="28" y="206" fill="#5B7EC5" fontFamily="sans-serif" fontSize="12" fontWeight="600">CIE gratis &middot; Videochiamata 9,90&euro;</text>
              </svg>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="guide-section rv" id="documenti">
            <div className="guide-section-label">Checklist</div>
            <h2>Cosa ti serve</h2>

            <h3>Per tutti i metodi</h3>
            <p><strong>Documento d&apos;identit&agrave; valido</strong> &mdash; Carta d&apos;identit&agrave; o passaporto in corso di validit&agrave;</p>
            <p><strong>Tessera sanitaria / codice fiscale</strong> &mdash; Serve il codice fiscale</p>
            <p><strong>Telefono cellulare</strong> &mdash; Per SMS di verifica e app di conferma</p>
            <p><strong>Email personale</strong> &mdash; Per confermare la registrazione</p>

            <h3>Se usi la CIE (metodo pi&ugrave; veloce)</h3>
            <p><strong>Carta d&apos;Identit&agrave; Elettronica</strong> &mdash; Quella con il chip NFC (dal 2017 in poi)</p>
            <p><strong>PIN della CIE</strong> &mdash; 8 cifre: prime 4 dal Comune, ultime 4 nella lettera</p>
            <p><strong>Telefono con NFC</strong> &mdash; Quasi tutti gli smartphone dal 2018</p>

            <div className="guide-img" style={{background:'linear-gradient(135deg,#ECF0FA,#dce4f5)'}}>
              <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="16" y="28" fill="#5B7EC5" fontFamily="sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">CHECKLIST DOCUMENTI SPID</text>
                
                <rect x="16" y="50" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="75" r="14" fill="#E4F3ED"/>
                <path d="M37 75l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="80" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Documento</text>
                
                <rect x="174" y="50" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="75" r="14" fill="#E4F3ED"/>
                <path d="M195 75l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="224" y="72" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Tessera</text>
                <text x="224" y="87" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">sanitaria</text>
                
                <rect x="16" y="108" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="133" r="14" fill="#E4F3ED"/>
                <path d="M37 133l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="66" y="138" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Telefono</text>
                
                <rect x="174" y="108" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="133" r="14" fill="#E4F3ED"/>
                <path d="M195 133l5 5 10-10" stroke="#2D8A6E" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="224" y="138" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Email</text>
                
                <text x="16" y="190" fill="#5B7EC5" fontFamily="sans-serif" fontSize="11" fontWeight="700">SOLO CON CIE:</text>
                
                <rect x="16" y="200" width="150" height="50" rx="12" fill="white"/>
                <circle cx="44" cy="225" r="14" fill="#FDF0EB"/>
                <text x="66" y="222" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">CIE +</text>
                <text x="66" y="237" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">PIN 8 cifre</text>
                
                <rect x="174" y="200" width="150" height="50" rx="12" fill="white"/>
                <circle cx="202" cy="225" r="14" fill="#FDF0EB"/>
                <text x="224" y="222" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">Telefono</text>
                <text x="224" y="237" fill="#1A1A2E" fontFamily="sans-serif" fontSize="12" fontWeight="600">con NFC</text>
              </svg>
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="guide-section rv" id="esempio">
            <div className="guide-section-label">Caso reale</div>
            <h2>L&apos;esempio di <em>Marco</em></h2>

            <p><strong>Marco ha 28 anni</strong>, vive a Roma e lavora come cameriere. Non ha mai fatto lo SPID perch&eacute; &quot;tanto vado di persona quando serve&quot;. Poi succedono tre cose nello stesso mese:</p>

            <p>1. Deve fare l&apos;ISEE per l&apos;esenzione ticket. Il sito INPS chiede lo SPID.<br/>
            2. Vuole fare il 730 per recuperare 400&euro;. L&apos;Agenzia Entrate chiede lo SPID.<br/>
            3. Deve scaricare un certificato di residenza. Il Comune chiede lo SPID.</p>

            <p>Marco capisce che senza SPID non pu&ograve; fare niente da solo online. L&apos;alternativa: tre appuntamenti, tre code, tre mattinate perse.</p>

            <h3>Marco fa lo SPID</h3>
            <p>Marco ha la CIE. Sceglie <strong>Lepida</strong> perch&eacute; &egrave; gratis e si fa tutto dal telefono.</p>

            <p><strong>Minuto 0-3:</strong> Va su lepida.it, inserisce i suoi dati.<br/>
            <strong>Minuto 3-5:</strong> Conferma SMS ed email.<br/>
            <strong>Minuto 5-8:</strong> Avvicina la CIE al telefono, inserisce il PIN. Fatto.<br/>
            <strong>Minuto 8-12:</strong> Sceglie password, scarica l&apos;app, prova su inps.it. Funziona.</p>

            <div className="guide-compare" style={{marginTop:'24px'}}>
              <div className="guide-compare-item before">
                <strong>Prima (senza SPID)</strong>
                ISEE: appuntamento CAF<br />
                730: commercialista 50&euro;<br />
                Certificato: coda all&apos;anagrafe<br />
                <strong style={{marginTop:'8px',display:'block'}}>3 mattinate perse</strong>
              </div>
              <div className="guide-compare-item after">
                <strong>Dopo (con SPID)</strong>
                ISEE: 20 min online<br />
                730: gratis, 15 min<br />
                Certificato: 2 min<br />
                <strong style={{marginTop:'8px',display:'block',fontSize:'18px'}}>49 minuti totali</strong>
              </div>
            </div>

            <p>In 49 minuti totali (SPID incluso), Marco ha fatto quello che prima gli avrebbe richiesto <strong>3 mattinate di ferie</strong>.</p>
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
              <Link href="/isee" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#FDF0EB,#fce4da)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#E8724A" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">ISEE 2026</text>
                    <rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="110" r="8" fill="#E4F3ED" />
                    <text x="68" y="113" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">1</text>
                    <rect x="84" y="106" width="100" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="68" cy="132" r="8" fill="#E4F3ED" />
                    <text x="68" y="135" textAnchor="middle" fill="#2D8A6E" fontSize="9" fontWeight="bold">2</text>
                    <rect x="84" y="128" width="80" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="240" cy="44" r="16" fill="#2D8A6E" opacity=".9" />
                    <path d="M234 44l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Come Fare l&apos;ISEE 2026</h4>
                <p>Il passo successivo: serve lo SPID per farlo online.</p>
              </Link>
              <Link href="/730" className="guide-related-card">
                <div className="guide-related-img" style={{background:'linear-gradient(135deg,#E4F3ED,#d0ebdf)'}}>
                  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'80%',maxWidth:'260px'}}>
                    <rect x="40" y="20" width="240" height="160" rx="12" fill="white" style={{filter:'drop-shadow(0 4px 12px rgba(0,0,0,.08))'}} />
                    <rect x="56" y="36" width="60" height="8" rx="4" fill="#2D8A6E" opacity=".3" />
                    <text x="56" y="62" fill="#1A1A2E" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold">730 / 2026</text>
                    <rect x="56" y="74" width="180" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="86" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="110" width="208" height="24" rx="6" fill="#2D8A6E" />
                    <text x="160" y="126" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="10" fontWeight="bold">Rimborso: 847&euro;</text>
                    <rect x="56" y="142" width="100" height="5" rx="2.5" fill="#E8E0D4" />
                    <rect x="56" y="154" width="140" height="5" rx="2.5" fill="#E8E0D4" />
                    <circle cx="240" cy="44" r="16" fill="#E8724A" opacity=".9" />
                    <text x="240" y="49" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">&euro;</text>
                  </svg>
                </div>
                <h4>Come Fare il 730 nel 2026</h4>
                <p>La dichiarazione dei redditi online, passo per passo.</p>
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
