'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:"Come funziona"},
  {id:'requisiti',label:'Requisiti'},
  {id:'consap',label:'Garanzia Consap'},
  {id:'tassi',label:'Fisso o variabile'},
  {id:'come',label:'Come si chiede'},
  {id:'errori',label:'Errori comuni'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function MutuoGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="casa"
        categoryLabel="Casa &middot; Aggiornato marzo 2026"
        title="Il mutuo"
        titleEm="prima casa"
        subtitle="Come funziona il mutuo nel 2026: requisiti, tassi fisso e variabile, la garanzia Consap per chi ha meno del 20% di anticipo e come presentare la domanda."
        stats={[
          { value: '80%', label: 'max finanziato dalla banca' },
          { value: '100%', label: 'con Consap under 36' },
          { value: '19%', label: 'detrazione interessi' },
        ]}
      />

      <Section id="cose" title="Come funziona" titleEm="il mutuo">
        <div className="v8-prose rv">
          <p>Il mutuo &egrave; un finanziamento a lungo termine garantito dall&apos;immobile che acquisti (ipoteca). La banca ti presta una somma e tu la rimborsi in rate mensili per 15, 20, 25 o 30 anni. Se smetti di pagare, la banca pu&ograve; pignorare e vendere l&apos;immobile per recuperare il credito.</p>
          <p>La banca normalmente finanzia al massimo l&apos;<strong>80% del valore dell&apos;immobile</strong> stimato dal suo perito (che pu&ograve; essere diverso dal prezzo che paghi). Devi avere in tasca almeno il 20% come anticipo, pi&ugrave; le spese accessorie.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>LTV (Loan to Value)</strong> &mdash; Il rapporto tra importo del mutuo e valore dell&apos;immobile. L&apos;80% &egrave; il limite standard. Con Consap si arriva al 100%.</p>
          <p><strong>TAEG</strong> &mdash; Il costo totale del mutuo espresso in percentuale annua, incluse tutte le spese (interessi + assicurazioni + spese istruttoria). Usalo per confrontare offerte diverse.</p>
          <p><strong>Pre-delibera</strong> &mdash; La risposta della banca che conferma in via preliminare che &egrave; disponibile a finanziarti. Non &egrave; ancora il contratto di mutuo definitivo.</p>
          <p><strong>Perizia</strong> &mdash; La valutazione dell&apos;immobile fatta dal tecnico incaricato dalla banca. Il valore periziato determina il massimo erogabile.</p>
          <p><strong>Surroga</strong> &mdash; Il trasferimento del mutuo da una banca all&apos;altra per ottenere condizioni migliori. &Egrave; gratuita per legge.</p>
        </div>
      </Section>

      <Section bg="warm" id="requisiti" title="Chi pu&ograve;" titleEm="chiedere il mutuo">
        <div className="v8-prose rv">
          <p>Non esistono requisiti fissi uguali per tutte le banche, ma i criteri che valutano sempre sono: <strong>reddito stabile e dimostrabile</strong> (busta paga, 730, dichiarazione dei redditi), <strong>rata sostenibile</strong> (non oltre il 30-35% del reddito netto mensile), <strong>storia creditizia pulita</strong> (niente protesti, niente rate insolute), <strong>anticipo disponibile</strong> (almeno il 20% del valore + spese).</p>
          <p>Con un <strong>contratto a tempo indeterminato</strong> si ottiene il mutuo pi&ugrave; facilmente. Con un contratto a tempo determinato &egrave; pi&ugrave; difficile ma non impossibile: alcune banche valutano la continuit&agrave; lavorativa, altre richiedono un co-obbligato (es. un genitore).</p>
          <p>I <strong>lavoratori autonomi</strong> vengono valutati in base alle ultime 2-3 dichiarazioni dei redditi. Se il reddito &egrave; stabile o in crescita, il mutuo &egrave; accessibile. Se &egrave; molto variabile, le banche sono pi&ugrave; caute.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>La rata non dovrebbe superare il 30-35% del reddito netto mensile.</strong> Se guadagni 2.000&euro;/mese netto, la rata massima sostenibile &egrave; 600-700&euro;/mese. Supera questa soglia e le banche potrebbero rifiutare o chiedere garanzie aggiuntive.</p>
        </InfoBox>
      </Section>

      <Section id="consap" title="Garanzia Consap:" titleEm="mutuo al 100% per under 36">
        <div className="v8-prose rv">
          <p>Il Fondo di Garanzia Consap permette di ottenere il mutuo fino al <strong>100% del valore dell&apos;immobile</strong> senza anticipo. Lo Stato garantisce fino all&apos;80% del mutuo alla banca, riducendo il rischio per l&apos;istituto di credito.</p>
          <p><strong>Requisiti principali nel 2026:</strong> et&agrave; under 36; ISEE non superiore a 40.000&euro;; acquisto di prima casa; immobile non di lusso (non categorie A/1, A/8, A/9).</p>
          <p>La garanzia Consap <strong>non &egrave; automatica</strong>: la richiedi attraverso la banca al momento della domanda di mutuo. La banca istruisce la pratica e la trasmette al Consap, che ha 20 giorni per rispondere. I tempi totali si allungano di 3-4 settimane rispetto a un mutuo ordinario.</p>
          <p>Con la garanzia Consap puoi comprare casa anche senza avere il 20% di anticipo. Devi per&ograve; avere comunque i soldi per le spese accessorie (notaio, imposta, perizia, agenzia: circa 5-10% del prezzo).</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Attenzione: zero anticipo non significa zero soldi.</strong> Anche con il 100% finanziato dalla banca, ti servono 10.000-20.000&euro; per le spese di rogito, perizia, agenzia e imposte. Non trascurarle nel calcolo.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="tassi" title="Tasso fisso" titleEm="o variabile?">
        <div className="v8-prose rv">
          <p>Nel 2026 i tassi fissi si aggirano attorno al <strong>2,8-3,1%</strong>. &Egrave; il livello pi&ugrave; basso degli ultimi anni dopo il picco del 2023. Il variabile parte leggermente pi&ugrave; basso ma &egrave; indicizzato all&apos;Euribor, che pu&ograve; salire.</p>
          <p>Il <strong>tasso fisso</strong> &egrave; la scelta giusta per chi: vuole certezza sulla rata per tutta la durata, non si pu&ograve; permettere aumenti anche temporanei, ha un mutuo lungo (20-30 anni). Il tasso &egrave; pi&ugrave; alto all&apos;inizio ma non cambia mai.</p>
          <p>Il <strong>tasso variabile</strong> pu&ograve; convenire per chi: ha un mutuo breve (10-15 anni), ha redditi che possono assorbire aumenti di rata, vuole sfruttare eventuali cali dell&apos;Euribor. Il rischio &egrave; che i tassi salgano di nuovo.</p>
          <p>Esiste anche il <strong>tasso misto</strong> (fisso per i primi anni, poi variabile o viceversa) e il <strong>tasso variabile con cap</strong> (variabile ma con un tetto massimo). Queste opzioni danno pi&ugrave; flessibilit&agrave; ma di solito costano di pi&ugrave;.</p>
          <p><strong>Regola pratica 2026:</strong> con tassi fissi sotto il 3%, il fisso &egrave; molto conveniente. Blocca il tasso adesso se puoi.</p>
        </div>
      </Section>

      <Section id="come" title="Come si chiede" titleEm="il mutuo">
        <StepCards steps={[
          { title: 'Chiedi la pre-delibera PRIMA di trovare casa', text: 'Vai in 2-3 banche diverse (o usa un broker mutui) e chiedi quanto sei disposto a prestarti. La pre-delibera ti dice il budget reale. Cos\u00ec non perdi tempo su immobili fuori portata.' },
          { title: 'Trova casa e firma il compromesso con clausola sospensiva', text: 'Quando trovi la casa, nel compromesso inserisci una clausola sospensiva legata all\'ottenimento del mutuo. Se la banca rifiuta, non perdi la caparra.' },
          { title: 'Presenta la domanda di mutuo', text: 'Porta alla banca: ultime 3 buste paga (o dichiarazioni dei redditi), contratto di lavoro, estratto conto degli ultimi 3 mesi, dati dell\'immobile (visura catastale, planimetria). La banca istruisce la pratica.' },
          { title: 'Perizia e delibera', text: 'La banca manda un perito a valutare l\'immobile (~200-500\u20ac a tuo carico). Poi delibera: di solito in 2-4 settimane. Se c\'è Consap, aggiungi 3-4 settimane.' },
          { title: 'Rogito e erogazione', text: 'Dal notaio si firma prima l\'atto di mutuo (la banca eroga i fondi) poi il rogito. Il notaio trascrive l\'ipoteca. La casa \u00e8 tua.' },
        ]} />
      </Section>

      <Section bg="warm" id="errori" title="Errori" titleEm="pi&ugrave; comuni">
        <InfoBox type="warn"><p><strong>Cercare casa prima della pre-delibera.</strong> Trovi la casa dei sogni, fai un&apos;offerta, firmi il compromesso, e poi la banca ti dice no. Perdi la caparra. Prima la pre-delibera, poi la ricerca.</p></InfoBox>
        <InfoBox type="warn"><p><strong>Prendere il mutuo dalla prima banca che risponde.</strong> La differenza di tasso tra le banche pu&ograve; valere decine di migliaia di euro sull&apos;intera durata. Confronta almeno 3 offerte con il TAEG, non solo il tasso nominale.</p></InfoBox>
        <InfoBox type="warn"><p><strong>Non calcolare le spese accessorie.</strong> Notaio, perizia, agenzia, imposte: facile arrivare a 15-20.000&euro; di spese oltre al prezzo. Tienile nel budget dal primo giorno.</p></InfoBox>
        <InfoBox type="warn"><p><strong>Sottovalutare la rata nel lungo periodo.</strong> La rata che oggi &egrave; sostenibile potrebbe pesare tra 10 anni se cambiano le tue condizioni. Non andare al limite massimo: lascia un margine.</p></InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Giulia e Marco"
          story="<strong>Giulia ha 31 anni</strong> (dipendente, 1.900\u20ac/mese netto) e <strong>Marco ha 33 anni</strong> (dipendente, 2.100\u20ac/mese netto). ISEE familiare: 34.000\u20ac. Vogliono comprare un appartamento da 220.000\u20ac. Hanno 30.000\u20ac risparmiati."
          lines={[
            { label: 'Valore immobile', value: '220.000\u20ac' },
            { label: 'Consap: possono ottenere 100% (under 36, ISEE < 40.000\u20ac)', value: '220.000\u20ac di mutuo' },
            { label: 'Spese accessorie (notaio, imposta, perizia)', value: '~12.000\u20ac' },
            { label: 'Rata stimata (220.000\u20ac, 25 anni, tasso fisso 3%)', value: '~1.043\u20ac/mese' },
          ]}
          total={{ label: 'Rata / reddito netto coppia (4.000\u20ac): 26% \u2013 sostenibile', value: '\u2713' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/compro-casa" className="v8-related-card rv rv-d1"><h4>Compro casa</h4><p>Tutto il processo di acquisto, dal compromesso al rogito.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/730" className="v8-related-card rv rv-d2"><h4>Faccio il 730</h4><p>Gli interessi del mutuo prima casa si detraggono al 19%.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/cambio-residenza" className="v8-related-card rv rv-d3"><h4>Cambio residenza</h4><p>Hai 18 mesi dal rogito per trasferire la residenza e non perdere i bonus.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
