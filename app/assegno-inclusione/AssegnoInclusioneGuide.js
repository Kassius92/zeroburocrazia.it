'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:"Cos'è l'ADI"},
  {id:'chi',label:'Requisiti'},
  {id:'importi',label:'Quanto spetta'},
  {id:'domanda',label:'Come fare domanda'},
  {id:'obblighi',label:'Obblighi'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function AssegnoInclusioneGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="fisco"
        categoryLabel="Fisco &middot; Aggiornato marzo 2026"
        title="Assegno di"
        titleEm="Inclusione"
        subtitle="L'ADI ha sostituito il Reddito di Cittadinanza dal 2024. Chi pu\u00f2 richiederlo, gli importi, come fare domanda all'INPS e gli obblighi da rispettare."
        stats={[
          { value: '500\u20ac', label: 'base mensile (stima)' },
          { value: '18 mesi', label: 'durata massima' },
          { value: '9.360\u20ac', label: 'ISEE massimo' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave;" titleEm="l'Assegno di Inclusione">
        <div className="v8-prose rv">
          <p>L&apos;Assegno di Inclusione (ADI) &egrave; la misura di sostegno al reddito che dal 1&deg; gennaio 2024 ha sostituito il Reddito di Cittadinanza. Ha requisiti pi&ugrave; selettivi: pu&ograve; richiederlo solo chi ha nel nucleo familiare almeno un componente considerato &ldquo;fragile&rdquo; &mdash; disabile, minorenne, over 60 o in carico ai servizi sociali per particolari condizioni.</p>
          <p>Gli adulti abili tra 18 e 59 anni senza componenti fragili nel nucleo non hanno diritto all&apos;ADI, ma possono richiedere il <strong>Supporto Formazione e Lavoro (SFL)</strong>, un contributo di 350&euro;/mese per chi partecipa a percorsi di formazione o tirocinio.</p>
          <p>L&apos;ADI viene erogato tramite una <strong>Carta ADI</strong> (ex Carta RdC): una carta prepagata che si ricarica mensilmente e si usa nei negozi convenzionati. Ha alcune restrizioni sugli acquisti (no giochi, scommesse, alcolici, ecc.).</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Componente fragile</strong> &mdash; Disabile, minorenne, over 60, o adulto in carico ai servizi sociali per condizioni di svantaggio certificato. Almeno uno nel nucleo &egrave; obbligatorio per l&apos;ADI.</p>
          <p><strong>PAD (Patto di Attivazione Digitale)</strong> &mdash; Il documento che firmi sul portale SIISL dopo l&apos;accoglimento della domanda. Senza firma del PAD, l&apos;ADI non parte.</p>
          <p><strong>SIISL</strong> &mdash; Sistema Informativo per l&apos;Inclusione Sociale e Lavorativa. La piattaforma dove si gestisce l&apos;ADI, si cerca lavoro e si accede alla formazione.</p>
          <p><strong>ISEE per prestazioni familiari e per l&apos;inclusione</strong> &mdash; L&apos;ISEE specifico per l&apos;ADI. Ha franchigie pi&ugrave; alte sulla prima casa (91.500&euro; dal 2026). Chiedi al CAF di specificare questa tipologia.</p>
        </div>
      </Section>

      <Section bg="warm" id="chi" title="Requisiti:" titleEm="chi pu&ograve; richiederlo">
        <div className="v8-prose rv">
          <p><strong>Requisiti di nucleo:</strong> il nucleo familiare deve contenere almeno un componente fragile: disabile (anche parziale), minorenne, over 60, o adulto tra 18 e 59 anni in carico ai servizi sociali per gravi condizioni di svantaggio.</p>
          <p><strong>Requisiti di reddito e patrimonio:</strong> ISEE non superiore a <strong>9.360&euro;</strong>; reddito familiare non superiore a <strong>6.000&euro;</strong> annui (moltiplicato per la scala di equivalenza, quindi varia con la composizione del nucleo); patrimonio immobiliare (esclusa la prima casa) non superiore a <strong>30.000&euro;</strong>; patrimonio mobiliare non superiore a <strong>10.000&euro;</strong> (soglia pi&ugrave; alta per alcuni casi).</p>
          <p><strong>Requisiti di residenza:</strong> cittadino italiano, UE o con permesso di soggiorno di lungo periodo; residente in Italia da almeno 5 anni (di cui gli ultimi 2 continuativi).</p>
          <p><strong>Requisiti di lavoro:</strong> non avere un contratto a tempo indeterminato; non essere titolare di partita IVA attiva con redditi superiori alla soglia.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Se ti dimetti volontariamente, perdi l&apos;ADI per 12 mesi.</strong> Le dimissioni volontarie (senza giusta causa) comportano la decadenza del diritto per l&apos;anno successivo. Le dimissioni per giusta causa e le risoluzioni consensuali non comportano la perdita.</p>
        </InfoBox>
      </Section>

      <Section id="importi" title="Quanto" titleEm="spetta">
        <div className="v8-prose rv">
          <p>L&apos;importo dell&apos;ADI si calcola come <strong>integrazione al reddito</strong>: lo Stato porta il reddito familiare fino a una soglia, definita dalla scala di equivalenza del nucleo.</p>
          <p>La soglia base &egrave; <strong>6.000&euro;/anno</strong> (500&euro;/mese) per un single. Per ogni componente aggiuntivo si applica una scala di equivalenza: il coniuge vale 0,4 (aggiunge 200&euro;/mese), ogni figlio minore vale 0,4, ogni figlio disabile vale 0,5, ecc.</p>
          <p>Se si paga un affitto, si aggiunge un contributo per il canone di locazione fino a <strong>280&euro;/mese</strong> (o 150&euro;/mese per chi vive in comodato).</p>
          <p>Esempio: single in affitto con ISEE 7.000&euro; e reddito 0 &rarr; ADI = 500&euro; + 280&euro; = <strong>780&euro;/mese</strong>.</p>
          <p>L&apos;ADI dura massimo <strong>18 mesi</strong>, rinnovabile per altri 12 mesi con nuova domanda. Dal 2026 non c&apos;&egrave; pi&ugrave; il mese di sospensione tra un ciclo e l&apos;altro, ma la prima mensilit&agrave; del rinnovo &egrave; ridotta al 50%.</p>
        </div>
      </Section>

      <Section bg="warm" id="domanda" title="Come fare" titleEm="domanda all'INPS">
        <StepCards steps={[
          { title: 'Fai l\'ISEE specifico per l\'ADI', text: 'Vai al CAF e specifica "ISEE per prestazioni familiari e per l\'inclusione". Ha franchigie diverse sulla prima casa. Se usi l\'ISEE ordinario, potresti risultare non eligibile anche se hai diritto.' },
          { title: 'Presenta la domanda su INPS.it o al CAF', text: 'Accedi a INPS.it con SPID o CIE, oppure vai al CAF (gratuito). Compila la domanda con tutti i dati del nucleo familiare. La domanda viene valutata entro 30 giorni.' },
          { title: 'Firma il PAD su SIISL', text: 'Una volta accolta la domanda, accedi al portale SIISL (siisl.anpal.gov.it) con SPID e firma il Patto di Attivazione Digitale. Senza questa firma, l\'ADI non parte.' },
          { title: 'Ritira la Carta ADI', text: 'L\'INPS invia la Carta ADI per posta all\'indirizzo di residenza. Il primo accredito avviene il mese successivo alla firma del PAD.' },
        ]} />
      </Section>

      <Section id="obblighi" title="Gli obblighi" titleEm="da rispettare">
        <div className="v8-prose rv">
          <p>Ricevere l&apos;ADI comporta obblighi. I componenti del nucleo abiliti al lavoro (18-59 anni, senza disabilit&agrave; o carichi di cura) devono: <strong>iscriversi al SIISL</strong> come disoccupati, <strong>aderire ai percorsi formativi</strong> proposti, <strong>accettare offerte di lavoro congrue</strong> (non puoi rifiutare senza valida motivazione).</p>
          <p>Ogni variazione di reddito o situazione familiare va comunicata all&apos;INPS entro il giorno prima dell&apos;inizio dell&apos;evento. Se inizi a lavorare, comunica subito: i primi 3.000&euro; lordi annui non riducono l&apos;ADI, oltre quella soglia l&apos;importo viene ricalcolato trimestralmente.</p>
          <p>Se percepisci l&apos;ADI indebitamente (per dati falsi o omissioni), devi restituire tutto + sanzioni penali. L&apos;INPS fa verifiche incrociate con l&apos;Agenzia delle Entrate e altri enti.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Aggiorna subito l&apos;INPS se cambia qualcosa.</strong> Un aumento di reddito, un lavoro nuovo, un cambio nella composizione del nucleo: comunicalo entro il giorno prima dell&apos;evento. La mancata comunicazione &egrave; considerata frode e comporta la revoca e il recupero delle somme.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Maria"
          story="<strong>Maria ha 58 anni</strong>, vive sola in affitto (400\u20ac/mese), \u00e8 disoccupata da 8 mesi e ha un ISEE per l'inclusione di 6.500\u20ac. Ha pi\u00f9 di 57 anni, quindi rientra nella fascia protetta (over 57 \u00e8 considerata fragile). Reddito: 0."
          lines={[
            { label: 'Soglia base per single', value: '500\u20ac/mese' },
            { label: 'Contributo affitto (affitto 400\u20ac, max 280\u20ac)', value: '280\u20ac/mese' },
            { label: 'Reddito familiare attuale', value: '0\u20ac' },
            { label: 'ADI mensile totale', value: '780\u20ac/mese' },
          ]}
          total={{ label: 'ADI annuo (18 mesi max)', value: '~14.040\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/isee" className="v8-related-card rv rv-d1"><h4>Faccio l&apos;ISEE</h4><p>L&apos;ISEE specifico per l&apos;inclusione determina il diritto e l&apos;importo dell&apos;ADI.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/naspi" className="v8-related-card rv rv-d2"><h4>NASpI</h4><p>Se hai perso il lavoro, verifica prima se hai diritto alla NASpI.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/bonus-bollette" className="v8-related-card rv rv-d3"><h4>Bonus bollette</h4><p>Con ADI hai diritto automatico al bonus luce e gas.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
