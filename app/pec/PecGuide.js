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
  {id:'cose',label:"Cos'è la PEC"},
  {id:'attivare',label:'Come attivarla'},
  {id:'domicilio',label:'Domicilio digitale'},
  {id:'obblighi',label:'Chi è obbligato'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function PecGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="documenti"
        categoryLabel="Documenti &middot; Aggiornato marzo 2026"
        title="La mia"
        titleEm="PEC"
        subtitle="Cos'\u00e8 la Posta Elettronica Certificata, come attivarla, quanto costa, quando \u00e8 obbligatoria e come usarla come domicilio digitale."
        stats={[
          { value: '5\u20ac/anno', label: 'costo minimo' },
          { value: '=Raccomandata', label: 'valore legale' },
          { value: 'INAD', label: 'domicilio digitale' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; la PEC" titleEm="e come funziona">
        <div className="v8-prose rv">
          <p>La PEC (Posta Elettronica Certificata) &egrave; un sistema di email con <strong>valore legale equivalente a una raccomandata con ricevuta di ritorno</strong>. Quando mandi una PEC a un&apos;altra casella PEC, ricevi due ricevute: una di <strong>accettazione</strong> (la PEC &egrave; partita) e una di <strong>consegna</strong> (la PEC &egrave; arrivata nella casella del destinatario). Queste ricevute hanno valore legale e sono opponibili in giudizio.</p>
          <p>Non va confusa con una normale email: la PEC funziona come raccomandata <strong>solo quando sia mittente che destinatario hanno una casella PEC</strong>. Se invii da PEC a un&apos;email normale, perdi il valore legale e hai solo la ricevuta di accettazione.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>PEC</strong> &mdash; Posta Elettronica Certificata. Ha lo stesso valore legale di una raccomandata A/R. Costa pochi centesimi invece di 5-8&euro;.</p>
          <p><strong>Ricevuta di accettazione</strong> &mdash; Conferma che la tua PEC &egrave; stata presa in carico dal sistema. Arriva subito dopo l&apos;invio.</p>
          <p><strong>Ricevuta di consegna</strong> &mdash; Conferma che la PEC &egrave; arrivata nella casella del destinatario. &Egrave; questa che ha valore legale, come la firma sulla raccomandata.</p>
          <p><strong>INAD</strong> &mdash; Indice Nazionale dei Domicili Digitali. Il portale dove puoi registrare la tua PEC come domicilio digitale ufficiale per ricevere comunicazioni dalla PA.</p>
          <p><strong>INI-PEC</strong> &mdash; Il registro ufficiale delle PEC di imprese e professionisti italiani. Puoi cercarvi la PEC di qualsiasi azienda o professionista.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>La PEC si considera consegnata anche se non la leggi.</strong> Come una raccomandata depositata in cassetta: il postino l&apos;ha consegnata, che tu la apra o no. Per questo &egrave; fondamentale controllare la casella PEC regolarmente, almeno una volta a settimana.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="attivare" title="Come" titleEm="attivarla" subtitle="Si fa online in pochi minuti. Scegli un provider e registrati.">
        <div className="v8-prose rv">
          <p>Per attivare una PEC devi scegliere un <strong>provider certificato</strong> e registrarti sul suo sito. I principali provider italiani sono: <strong>Poste Italiane</strong> (PostaCertificat@, ~5,50&euro;+IVA/anno), <strong>Aruba PEC</strong> (~1,40&euro;+IVA/anno per il piano base), <strong>Libero PEC</strong>, <strong>Register.it</strong>, <strong>Infocert</strong>. Esistono anche offerte gratuite &ldquo;pay per email&rdquo; dove non paghi l&apos;abbonamento ma paghi ogni singola PEC inviata: utile se la usi raramente.</p>
          <p>Il processo di attivazione richiede: un documento d&apos;identit&agrave; valido, il codice fiscale e di solito un&apos;email normale per la verifica. In alcuni casi &egrave; necessario il riconoscimento dell&apos;identit&agrave; tramite SPID, CIE o di persona. Tutto avviene online in 10-15 minuti.</p>
        </div>
        <StepCards steps={[
          { title: 'Scegli il provider', text: 'Vai sul sito di Aruba, Poste Italiane o un altro provider certificato. Confronta i prezzi: per uso personale bastano i piani base da 1-6\u20ac/anno.' },
          { title: 'Registrati e scegli l\'indirizzo', text: 'Scegli il tuo indirizzo PEC (es. mario.rossi@pec.it) e inserisci i tuoi dati. Il nome dell\'indirizzo non cambia pi\u00f9, sceglilo bene.' },
          { title: 'Verifica l\'identit\u00e0', text: 'I provider pi\u00f9 seri richiedono una verifica: tramite SPID, upload del documento o riconoscimento video. \u00c8 necessaria per garantire il valore legale.' },
          { title: 'Paga e attiva', text: 'Dopo il pagamento la casella viene attivata entro poche ore. Puoi usarla via webmail o configurarla in un client email (Outlook, Thunderbird, Apple Mail).' },
        ]} />
      </Section>

      <Section id="domicilio" title="Domicilio digitale" titleEm="su INAD">
        <div className="v8-prose rv">
          <p>Dal 2023 esiste l&apos;<strong>INAD</strong> (Indice Nazionale dei Domicili Digitali), un registro pubblico dove puoi registrare la tua PEC come domicilio digitale ufficiale. Una volta registrato, la Pubblica Amministrazione pu&ograve; inviarti comunicazioni ufficiali all&agrave; tua PEC invece che per posta cartacea: cartelle esattoriali, notifiche, atti giudiziari, comunicazioni INPS, e molto altro.</p>
          <p>Per registrarsi su INAD vai su <strong>domiciliodigitale.gov.it</strong>, accedi con SPID o CIE, e inserisci il tuo indirizzo PEC. &Egrave; completamente gratuito. Una volta registrato, le PA verificano l&apos;INAD prima di inviare corrispondenza: se trovi il tuo indirizzo, ti mandano tutto l&igrave;, risparmiando carta e accelerando i tempi.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Conviene registrarsi?</strong> S&igrave;, soprattutto se hai contenziosi in corso, sei titolare di immobili, o hai rapporti frequenti con la PA. Ricevere una notifica direttamente in PEC evita il rischio di non trovare un atto in cassetta e di perdere i termini per rispondere.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="obblighi" title="Chi &egrave;" titleEm="obbligato ad averla">
        <div className="v8-prose rv">
          <p>La PEC &egrave; <strong>obbligatoria</strong> per: tutte le <strong>imprese</strong> (S.r.l., S.p.A., ditte individuali iscritte al Registro Imprese), tutti i <strong>professionisti iscritti ad albi</strong> (avvocati, commercialisti, medici, ingegneri, ecc.), e la <strong>Pubblica Amministrazione</strong>.</p>
          <p>Per i <strong>privati cittadini</strong> la PEC &egrave; facoltativa, ma sempre pi&ugrave; utile. Con la diffusione dell&apos;INAD e la digitalizzazione della PA, averla ti permette di ricevere comunicazioni ufficiali in modo rapido e sicuro, inviare raccomandate digitali a costo quasi zero, e comunicare formalmente con uffici e professionisti.</p>
          <p>Se sei un imprenditore o professionista e non hai la PEC, rischi sanzioni e problemi con le comunicazioni ufficiali. Se sei un privato, non sei obbligato &mdash; ma costa pochi euro all&apos;anno e ti semplifica la vita.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Attenzione al rinnovo.</strong> L&apos;abbonamento PEC &egrave; annuale. Se non lo rinnovi, la casella viene disattivata e dopo un periodo perdi i messaggi. Imposta un promemoria automatico prima della scadenza.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Luca"
          story="<strong>Luca ha 31 anni</strong>, lavora come grafico freelance. Ha appena aperto la partita IVA e deve registrare la PEC obbligatoriamente. Cerca su Aruba, sceglie il piano base da 1,40\u20ac+IVA/anno, si registra in 10 minuti con SPID. Poi registra la sua PEC su INAD."
          lines={[
            { label: 'Costo primo anno (Aruba piano base)', value: '1,40\u20ac + IVA' },
            { label: 'Tempo di attivazione', value: '10 minuti' },
            { label: 'Registrazione su INAD', value: 'Gratuita, 5 minuti' },
            { label: 'Primo utilizzo: invia disdetta contratto affitto', value: 'Valore raccomandata A/R' },
          ]}
          total={{ label: 'Risparmio vs raccomandata cartacea (5\u20ac cad.)', value: '~4,90\u20ac a invio' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/spid" className="v8-related-card rv rv-d1"><h4>Faccio lo SPID</h4><p>Serve per registrarsi su INAD e attivare la PEC con alcuni provider.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/piva" className="v8-related-card rv rv-d2"><h4>Partita IVA</h4><p>La PEC &egrave; obbligatoria se apri una partita IVA come ditta individuale.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/cie" className="v8-related-card rv rv-d3"><h4>CIE</h4><p>Con la CIE puoi accedere a INAD e registrare il domicilio digitale.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
