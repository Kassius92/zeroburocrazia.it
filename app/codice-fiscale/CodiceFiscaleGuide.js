'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import {
  GuideHero, Section, StepCards, FAQAccordion,
  ExampleBlock, InfoBox, CTABanner
} from '@/components/redesign';

const sections = [
  {id:'cose',label:"Cos'è"},
  {id:'neonati',label:'Per i neonati'},
  {id:'duplicato',label:'Duplicato online'},
  {id:'stranieri',label:'Per gli stranieri'},
  {id:'tessera',label:'Tessera sanitaria'},
  {id:'faq',label:'FAQ'},
];

export default function CodiceFiscaleGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="documenti"
        categoryLabel="Documenti &middot; Aggiornato marzo 2026"
        title="Codice"
        titleEm="Fiscale"
        subtitle="Cos'\u00e8, come richiederlo per la prima volta, come ottenere il duplicato se l'hai perso. Neonati, stranieri e tessera sanitaria."
        stats={[
          { value: '0\u20ac', label: 'sempre gratuito' },
          { value: 'Online', label: 'duplicato con SPID' },
          { value: '16', label: 'caratteri alfanumerici' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; il codice fiscale" titleEm="e a cosa serve">
        <div className="v8-prose rv">
          <p>Il codice fiscale &egrave; un <strong>codice di 16 caratteri</strong> (lettere e numeri) che ti identifica in modo univoco davanti allo Stato italiano. Lo usi per tutto: dichiarazione dei redditi, contratti, apertura di conti correnti, visite mediche, iscrizioni scolastiche, richiesta di bonus e pratiche burocratiche di ogni tipo. Senza non puoi fare praticamente nulla.</p>
          <p>Viene generato automaticamente dai tuoi dati anagrafici: <strong>nome, cognome, data e luogo di nascita, sesso</strong>. Non cambia mai (salvo rarissimi casi di omocodia). &Egrave; stampato sulla <strong>tessera sanitaria</strong> &mdash; la tessera plastificata verde che usi dal medico e in farmacia.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Come si legge il codice fiscale</h3>
          <p>Le prime <strong>3 lettere</strong> vengono dal cognome, le successive <strong>3 dal nome</strong>. Poi: 2 cifre per l&apos;anno di nascita, 1 lettera per il mese, 2 cifre per il giorno (per le donne il giorno + 40). Le ultime 4 sono il codice del Comune di nascita pi&ugrave; 1 carattere di controllo.</p>
          <p>Esempio: Mario Rossi nato a Roma il 15 marzo 1985 &rarr; <strong>RSSMRA85C15H501E</strong>.</p>
          <p>Il codice fiscale non va confuso con la <strong>partita IVA</strong> (che serve per l&apos;attivit&agrave; professionale) o con l&apos;<strong>ISEE</strong> (che misura la ricchezza familiare). Il codice fiscale &egrave; il tuo &ldquo;nome&rdquo; per lo Stato.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Non cambia mai.</strong> Anche se ti trasferisci all&apos;estero, cambi residenza, ti sposi o divorzi, il codice fiscale resta sempre lo stesso. &Egrave; legato ai dati di nascita, non a quelli anagrafici attuali.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="neonati" title="Codice fiscale" titleEm="per i neonati" subtitle="Non devi fare nulla: lo assegna automaticamente il Comune.">
        <div className="v8-prose rv">
          <p>Se sei appena diventato genitore, <strong>non devi fare nulla</strong>. Il codice fiscale del neonato viene assegnato automaticamente dal Comune al momento della prima iscrizione all&apos;anagrafe tramite il sistema ANPR. La tessera sanitaria arriva a casa entro 60 giorni.</p>
        </div>
        <StepCards steps={[
          { title: 'Dichiarazione di nascita', text: 'La fai in ospedale (la maggior parte dei casi) o al Comune di residenza entro 10 giorni dalla nascita.' },
          { title: 'Il Comune assegna il codice fiscale', text: 'Tramite il collegamento telematico con l\'Anagrafe tributaria, il codice viene generato automaticamente.' },
          { title: 'La tessera sanitaria arriva a casa', text: 'La prima tessera (validit\u00e0 1 anno) viene spedita all\'indirizzo di residenza. Dopo l\'iscrizione alla ASL e la scelta del pediatra, arriva quella con validit\u00e0 6 anni.' },
        ]} />
        <InfoBox type="tip">
          <p><strong>Se hai urgenza</strong> (es. per scegliere il pediatra): puoi richiederlo online con SPID nell&apos;area riservata dell&apos;Agenzia delle Entrate, tramite il servizio &ldquo;Richiesta attribuzione codice fiscale al neonato&rdquo;. Oppure vai di persona a un ufficio dell&apos;Agenzia con il modello AA4/8 e il certificato di nascita.</p>
        </InfoBox>
      </Section>

      <Section id="duplicato" title="Hai perso la tessera?" titleEm="Il duplicato &egrave; online">
        <div className="v8-prose rv">
          <p>Hai smarrito la tessera sanitaria o il tesserino del codice fiscale? Nessun problema: il duplicato si richiede in pochi minuti online, &egrave; completamente gratuito e la nuova tessera arriva a casa per posta.</p>
        </div>
        <StepCards steps={[
          { title: 'Vai sul sito dell\'Agenzia delle Entrate', text: 'Accedi all\'area riservata con SPID, CIE o CNS. Cerca "Richiesta di riemissione della Tessera Sanitaria".' },
          { title: 'Indica il motivo', text: 'Smarrimento, furto, deterioramento o mancato recapito. Per sicurezza ti chiede alcuni dati della tua ultima dichiarazione dei redditi.' },
          { title: 'Ricevi la nuova tessera', text: 'Il numero della nuova tessera \u00e8 disponibile nel portale entro 24-48 ore. La tessera fisica arriva per posta entro 15-20 giorni.' },
        ]} />
        <InfoBox type="tip">
          <p>Se non puoi usare il servizio online, puoi inviare il <strong>modello AA4/8</strong> con copia del documento d&apos;identit&agrave; via PEC a un ufficio dell&apos;Agenzia delle Entrate. Oppure presentarti di persona: nessun appuntamento necessario, nessun costo.</p>
        </InfoBox>
        <div className="v8-prose rv" style={{marginTop:'24px'}}>
          <CrossLink>
            <Link href="/spid">Serve lo SPID per richiedere il duplicato online &rarr;</Link>
          </CrossLink>
        </div>
      </Section>

      <Section bg="warm" id="stranieri" title="Codice fiscale" titleEm="per gli stranieri">
        <div className="v8-prose rv">
          <p>Se sei un cittadino straniero, il codice fiscale ti viene assegnato automaticamente in queste situazioni: durante la <strong>domanda di ingresso per lavoro o ricongiungimento</strong> (lo assegna lo Sportello Unico per l&apos;Immigrazione), al <strong>rilascio o rinnovo del permesso di soggiorno</strong> (lo assegna la Questura se non ce l&apos;hai gi&agrave;), o tramite il <strong>Consolato italiano</strong> nel tuo Paese se sei residente all&apos;estero.</p>
          <p><strong>Non devi andare all&apos;Agenzia delle Entrate</strong> &mdash; il codice viene assegnato direttamente dagli enti sopra indicati. Solo in casi eccezionali (es. omocodia) la Questura pu&ograve; inviarti all&apos;Agenzia per la risoluzione.</p>
        </div>
        <InfoBox type="tip">
          <p>L&apos;Agenzia delle Entrate pubblica una <strong>guida al codice fiscale per stranieri disponibile in 17 lingue</strong> sul suo sito ufficiale. Cercala nella sezione &ldquo;Codice fiscale e tessera sanitaria&rdquo;.</p>
        </InfoBox>
      </Section>

      <Section id="tessera" title="Tessera sanitaria" titleEm="e CNS">
        <div className="v8-prose rv">
          <p>Il codice fiscale &egrave; stampato sulla <strong>tessera sanitaria</strong> &mdash; la tessera plastificata che usi dal medico e in farmacia. Se ha il <strong>microchip attivato</strong>, funziona anche come Carta Nazionale dei Servizi (CNS) e ti permette di accedere ai servizi online della PA.</p>
          <p>La tessera si <strong>rinnova automaticamente</strong>: alla scadenza (6 anni), se risulti iscritto al SSN, la nuova tessera arriva a casa senza doverla richiedere. Dal 2026 puoi visualizzare e stampare la copia digitale della tessera nell&apos;area riservata dell&apos;Agenzia delle Entrate con SPID. Per gli stranieri non iscritti al SSN, l&apos;Agenzia rilascia un semplice tesserino di codice fiscale (senza le funzionalit&agrave; sanitarie).</p>
          <p>Il <strong>codice fiscale e la tessera sanitaria non sono la stessa cosa</strong>: il codice fiscale &egrave; il numero di 16 caratteri. La tessera &egrave; il documento fisico che lo contiene. Puoi avere il codice anche senza la tessera.</p>
        </div>
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/spid" className="v8-related-card rv rv-d1"><h4>Faccio lo SPID</h4><p>Serve per richiedere il duplicato online.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/cie" className="v8-related-card rv rv-d2"><h4>CIE</h4><p>La carta d&apos;identit&agrave; elettronica, l&apos;altro documento digitale.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/isee" className="v8-related-card rv rv-d3"><h4>Faccio l&apos;ISEE</h4><p>Il codice fiscale &egrave; il primo dato che ti chiedono per l&apos;ISEE.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}

function CrossLink({ children }) {
  return <div style={{marginTop:'16px'}}>{children}</div>;
}
