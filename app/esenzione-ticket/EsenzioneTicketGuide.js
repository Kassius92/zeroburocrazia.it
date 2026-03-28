'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:"Cos'è il ticket"},
  {id:'reddito',label:'Esenzione per reddito'},
  {id:'patologia',label:'Esenzione per patologia'},
  {id:'invalidita',label:'Per invalidità'},
  {id:'come',label:'Come ottenerla'},
  {id:'faq',label:'FAQ'},
];

export default function EsenzioneTicketGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="salute"
        categoryLabel="Salute &middot; Aggiornato marzo 2026"
        title="Esenzione"
        titleEm="ticket sanitario"
        subtitle="Chi non paga il ticket nel 2026: esenzioni per reddito, patologie croniche, et\u00e0 e invalidit\u00e0. Codici esenzione, come richiederla e quanto dura."
        stats={[
          { value: '0\u20ac', label: 'ticket se esente' },
          { value: 'E01-E04', label: 'codici per reddito' },
          { value: 'Automatica', label: 'per reddito E01/E03/E04' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; il ticket" titleEm="e come funziona">
        <div className="v8-prose rv">
          <p>Il ticket sanitario &egrave; la quota che il cittadino paga per le prestazioni del Servizio Sanitario Nazionale: visite specialistiche, esami diagnostici (sangue, ecografie, radiografie), farmaci di fascia A. Chi &egrave; esente non paga nulla per quelle prestazioni.</p>
          <p>Le esenzioni si dividono in tre grandi categorie: esenzione per <strong>reddito o condizione lavorativa</strong> (codici E01-E04), esenzione per <strong>patologia cronica</strong> (codici numerici come 013 per il diabete), esenzione per <strong>invalidit&agrave; o condizione speciale</strong> (codici come H99, L99, ecc.).</p>
          <p>Il codice di esenzione compare sulla ricetta del medico di base. Se hai diritto all&apos;esenzione e il medico non la indica, fallo presente: &egrave; suo compito inserirla.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Ticket</strong> &mdash; La quota a carico del cittadino per prestazioni SSN. Varia per tipo di prestazione e Regione.</p>
          <p><strong>Codice di esenzione</strong> &mdash; Il codice alfanumerico che il medico scrive sulla ricetta per indicare che sei esente. Determina per quali prestazioni non paghi.</p>
          <p><strong>Reddito complessivo del nucleo</strong> &mdash; Il reddito lordo di tutti i componenti del nucleo familiare, come risulta dalla dichiarazione dei redditi. Non &egrave; l&apos;ISEE: sono cose diverse.</p>
        </div>
      </Section>

      <Section bg="warm" id="reddito" title="Esenzione" titleEm="per reddito ed et&agrave;">
        <div className="v8-prose rv">
          <p><strong>E01</strong> &mdash; Reddito complessivo del nucleo familiare non superiore a 36.151,98&euro; + titolare di pensione minima con et&agrave; superiore a 60 anni. L&apos;esenzione &egrave; automatica: il Sistema Tessera Sanitaria la verifica dai dati fiscali.</p>
          <p><strong>E02</strong> &mdash; Disoccupato e familiare a carico, con reddito familiare non superiore a 8.263,31&euro; (+516&euro; per coniuge, +516&euro; per ogni figlio). Non &egrave; automatica: devi presentare un&apos;autocertificazione alla ASL entro il 31 marzo di ogni anno.</p>
          <p><strong>E03</strong> &mdash; Titolare di assegno (ex pensione) sociale. Automatica.</p>
          <p><strong>E04</strong> &mdash; Titolare di pensione al minimo con et&agrave; inferiore a 60 anni, con reddito familiare non superiore a 8.263,31&euro; (+516&euro; per coniuge, +516&euro; per ogni figlio). Automatica.</p>
          <p><strong>Over 65 con reddito basso:</strong> alcune Regioni prevedono esenzioni aggiuntive per gli over 65 con redditi bassi. Verifica con la tua ASL le regole regionali specifiche.</p>
          <p><strong>Under 6 e over 65:</strong> i bambini sotto i 6 anni e gli anziani sopra i 65 anni con reddito familiare sotto 36.151,98&euro; sono esenti. Automatico via Sistema Tessera Sanitaria.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Per E01, E03, E04 non devi fare nulla.</strong> Il Sistema Tessera Sanitaria verifica automaticamente i dati. Se hai diritto, l&apos;esenzione compare gi&agrave; nella ricetta dematerializzata del medico. Per E02 invece serve la tua autocertificazione alla ASL.</p>
        </InfoBox>
      </Section>

      <Section id="patologia" title="Esenzione" titleEm="per patologia cronica">
        <div className="v8-prose rv">
          <p>Chi soffre di una patologia cronica o rara ha diritto all&apos;esenzione per le prestazioni necessarie alla diagnosi, cura e monitoraggio della sua condizione. L&apos;esenzione non vale per tutte le prestazioni, ma solo per quelle incluse nei LEA (Livelli Essenziali di Assistenza) correlate alla patologia.</p>
          <p>Le patologie che danno diritto all&apos;esenzione sono elencate nel DM 23/11/2012 (malattie croniche) e nel DM 279/2001 (malattie rare). Esempi comuni: diabete mellito (013), ipertensione arteriosa grave (031), asma bronchiale (007), patologie cardiache (022), tumori (048), HIV (054), sclerosi multipla (049), celiachia (009).</p>
          <p>Per ottenere l&apos;esenzione devi: farti rilasciare una <strong>certificazione da un medico specialista</strong> di struttura pubblica o privata accreditata; portarla alla ASL di residenza con la tessera sanitaria; la ASL rilascia l&apos;attestato di esenzione con il codice specifico.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>L&apos;esenzione per patologia &egrave; parziale.</strong> Se hai il codice 013 (diabete), sei esente dal ticket solo per le prestazioni correlate al diabete (glicemia, HbA1c, visita diabetologica, ecc.). Per una visita dermatologica non correlata, paghi normalmente (a meno che tu non abbia anche un&apos;esenzione per reddito).</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="invalidita" title="Esenzione" titleEm="per invalidit&agrave; e condizioni speciali">
        <div className="v8-prose rv">
          <p>Sono esenti dal ticket (per tutte le prestazioni): i <strong>grandi invalidi di guerra</strong> e le categorie assimilate; i soggetti con <strong>invalidit&agrave; civile al 100%</strong> (o al 67% con reddito basso); i <strong>ciechi civili</strong> e i <strong>sordi</strong>; i soggetti con <strong>riconoscimento L. 104 art. 3 comma 3</strong> (disabilit&agrave; grave).</p>
          <p>Sono esenti solo per le prestazioni correlate alla loro condizione: i soggetti in <strong>attesa di trapianto</strong>; i <strong>donatori di organi</strong> (per le prestazioni collegate alla donazione); le <strong>vittime di violenza</strong> riconosciute; le <strong>donne in gravidanza</strong> (per le prestazioni previste dai LEA per la maternit&agrave;).</p>
          <p>Per ottenere queste esenzioni porta il verbale INPS o il documento che certifica la tua condizione alla ASL di residenza. La ASL aggiorna il tuo fascicolo sanitario con il codice di esenzione corretto.</p>
        </div>
      </Section>

      <Section id="come" title="Come verificare" titleEm="e ottenere l'esenzione">
        <StepCards steps={[
          { title: 'Chiedi al tuo medico di base', text: 'Il modo pi\u00f9 veloce. Il medico vede i tuoi codici esenzione nel sistema quando scrive la ricetta. Se non li applica automaticamente, segnalalo: \u00e8 suo dovere.' },
          { title: 'Verifica online', text: 'Accedi al Fascicolo Sanitario Elettronico della tua Regione (con SPID) o al portale del Sistema Tessera Sanitaria. Puoi vedere i tuoi codici di esenzione attivi.' },
          { title: 'Per patologia cronica: dallo specialista alla ASL', text: 'Fatti certificare la patologia da uno specialista di struttura pubblica. Porta la certificazione alla ASL con la tessera sanitaria. La ASL attiva il codice esenzione.' },
          { title: 'Per E02 (disoccupati): autocertificazione alla ASL', text: 'Entro il 31 marzo di ogni anno, porta l\'autocertificazione del reddito familiare alla ASL di residenza. Non \u00e8 automatica: se non la presenti, perdi l\'esenzione.' },
        ]} />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/isee" className="v8-related-card rv rv-d1"><h4>Faccio l&apos;ISEE</h4><p>Con ISEE basso puoi accedere a esenzioni aggiuntive regionali.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/spese-mediche" className="v8-related-card rv rv-d2"><h4>Spese mediche</h4><p>Anche con l&apos;esenzione, alcune spese mediche si detraggono nel 730.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/legge-104" className="v8-related-card rv rv-d3"><h4>Legge 104</h4><p>Con il riconoscimento L.104 art.3 c.3 hai l&apos;esenzione ticket totale.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
