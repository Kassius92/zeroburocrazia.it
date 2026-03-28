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
import CalcIMU from '@/components/CalcIMU';

const sections = [
  {id:'cose',label:"Cos'è e chi paga"},
  {id:'esenzioni',label:'Chi NON paga'},
  {id:'calcolo',label:'Come si calcola'},
  {id:'scadenze',label:'Scadenze e F24'},
  {id:'agevolazioni',label:'Agevolazioni'},
  {id:'calcolatore',label:'Calcolatore'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function ImuGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="fisco"
        categoryLabel="Fisco &middot; Aggiornato marzo 2026"
        title="Pago"
        titleEm="l'IMU?"
        subtitle="Chi paga l'IMU, chi \u00e8 esente, come si calcola, le scadenze del 16 giugno e 16 dicembre e le agevolazioni per comodato, affitto e immobili inagibili."
        stats={[
          { value: 'No', label: 'prima casa (non lusso)' },
          { value: '16 giu', label: 'acconto' },
          { value: '16 dic', label: 'saldo' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; l'IMU" titleEm="e chi la paga">
        <div className="v8-prose rv">
          <p>L&apos;IMU (Imposta Municipale Propria) &egrave; una tassa annuale sul possesso di immobili. La <strong>buona notizia</strong>: se abiti nella tua unica casa, non paghi nulla. L&apos;abitazione principale (non di lusso) &egrave; completamente esente.</p>
          <p>Devono pagare l&apos;IMU: chi ha una <strong>seconda casa</strong> (terreno, appartamento, box, negozio), chi ha la <strong>prima casa di lusso</strong> (categorie catastali A/1, A/8, A/9), i proprietari di <strong>terreni agricoli</strong> (con eccezioni per i coltivatori diretti), e chi possiede immobili sfitti o affittati non come abitazione principale.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Rendita catastale</strong> &mdash; Il valore fiscale dell&apos;immobile assegnato dall&apos;Agenzia del Territorio. Lo trovi nella visura catastale, nell&apos;atto di compravendita o nelle bollette IMU degli anni precedenti.</p>
          <p><strong>Categoria catastale</strong> &mdash; La classificazione dell&apos;immobile (A/2 = appartamento civile, A/3 = economico, C/6 = garage, ecc.).</p>
          <p><strong>Aliquota</strong> &mdash; La percentuale che il Comune applica sulla base imponibile. Si esprime in &ldquo;per mille&rdquo; (&permil;). Ogni Comune decide le proprie aliquote entro i limiti di legge.</p>
          <p><strong>Abitazione principale</strong> &mdash; L&apos;immobile dove hai <strong>sia</strong> la residenza anagrafica <strong>che</strong> la dimora abituale. Servono entrambi i requisiti per l&apos;esenzione.</p>
          <p><strong>Pertinenza</strong> &mdash; Garage (C/6), cantina (C/2), tettoia (C/7). Una pertinenza per tipo &egrave; esente insieme alla prima casa.</p>
        </div>
      </Section>

      <Section bg="warm" id="esenzioni" title="Chi NON paga" titleEm="l'IMU">
        <div className="v8-prose rv">
          <p>Sono <strong>completamente esenti</strong>: l&apos;abitazione principale non di lusso (con le pertinenze, una per tipo), gli immobili delle cooperative edilizie a propriet&agrave; indivisa adibiti ad abitazione principale dei soci, i terreni agricoli dei coltivatori diretti e degli IAP (Imprenditori Agricoli Professionali), gli immobili destinati all&apos;edilizia residenziale pubblica, gli immobili dei disabili gravi (L. 104, art. 3 comma 3) usati come abitazione principale.</p>
          <p>Dopo la sentenza della Corte Costituzionale 209/2022, <strong>due coniugi con case diverse</strong> possono avere ognuno la propria abitazione principale esente, a patto che ognuno ci risieda e dimori. Non conta pi&ugrave; il vincolo del nucleo familiare unico.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Residenza non basta: serve anche la dimora.</strong> Per l&apos;esenzione prima casa devi avere sia la residenza anagrafica che la dimora abituale nell&apos;immobile. Se sei residente ma non ci abiti davvero (es. sei all&apos;estero), il Comune pu&ograve; contestare l&apos;esenzione.</p>
        </InfoBox>
      </Section>

      <Section id="calcolo" title="Come si" titleEm="calcola l'IMU" subtitle="La formula: rendita catastale \xd7 rivalutazione \xd7 moltiplicatore \xd7 aliquota.">
        <div className="v8-prose rv">
          <p>La formula &egrave;: <strong>(Rendita catastale &times; 1,05) &times; Moltiplicatore &times; Aliquota comunale</strong>.</p>
          <p>La <strong>rendita catastale</strong> si trova nella visura catastale (gratis su agenziaentrate.gov.it con SPID). Va aumentata del 5% (rivalutazione fissa). Il risultato &egrave; la base imponibile.</p>
          <p>Il <strong>moltiplicatore</strong> dipende dalla categoria catastale: per le abitazioni (A, escluso A/10) &egrave; 160; per i garage (C/6) &egrave; 140; per i negozi (C/1) &egrave; 55; per gli uffici (A/10, B) &egrave; 80; per i capannoni (D) &egrave; 65.</p>
          <p>L&apos;<strong>aliquota</strong> &egrave; quella deliberata dal tuo Comune per l&apos;anno in corso. L&apos;aliquota base per la seconda casa &egrave; 8,6&permil;, ma il Comune pu&ograve; portarla fino a 10,6&permil; (o 11,4&permil; con la maggiorazione). Trova le aliquote sul Portale del Federalismo Fiscale (portaletelematico.mef.gov.it).</p>
          <p><strong>Esempio:</strong> Rendita catastale 800&euro; &rarr; 800 &times; 1,05 = 840 &rarr; 840 &times; 160 = 134.400&euro; (base imponibile) &rarr; 134.400 &times; 0,0086 (8,6&permil;) = <strong>1.155,84&euro;/anno</strong>.</p>
        </div>
      </Section>

      <Section bg="warm" id="scadenze" title="Scadenze" titleEm="e come pagare">
        <div className="v8-prose rv">
          <p>L&apos;IMU si paga in <strong>due rate</strong>: l&apos;acconto entro il <strong>16 giugno</strong> (50% dell&apos;importo dell&apos;anno precedente) e il saldo entro il <strong>16 dicembre</strong> (conguaglio con le aliquote definitive). Se l&apos;importo totale &egrave; inferiore a 12&euro;, non si paga.</p>
          <p>Si paga con il <strong>modello F24</strong>, online sul sito dell&apos;Agenzia delle Entrate (con SPID), tramite banca, CAF, o presso tabaccherie/uffici postali abilitati. I codici tributo dipendono dal tipo di immobile: 3912 per la seconda casa, 3916 per i terreni, 3913 per gli immobili D, ecc.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Se non paghi in tempo:</strong> puoi usare il <strong>ravvedimento operoso</strong>, che prevede una sanzione ridotta crescente con il ritardo. Entro 14 giorni: 0,1%/giorno; entro 30 giorni: 1,25%; entro 90 giorni: 1,67%; oltre 1 anno: 3,75%. &Egrave; sempre meglio pagare tardi con ravvedimento che ignorare il pagamento.</p>
        </InfoBox>
      </Section>

      <Section id="agevolazioni" title="Agevolazioni" titleEm="e riduzioni">
        <div className="v8-prose rv">
          <p><strong>Comodato al figlio o al genitore:</strong> se presti la casa a un figlio o a un genitore che la usa come abitazione principale, la base imponibile si riduce del <strong>50%</strong>. Condizioni: contratto di comodato registrato, il proprietario deve risiedere nello stesso Comune e non possedere altri immobili in Italia (tranne la propria abitazione principale).</p>
          <p><strong>Immobile affittato a canone concordato:</strong> riduzione del 25% sull&apos;IMU dovuta. Si applica quando il contratto &egrave; a canone concordato (accordi territoriali).</p>
          <p><strong>Immobile inagibile o inabitabile:</strong> riduzione del 50% per gli immobili dichiarati inagibili o inabitabili e di fatto non utilizzati, a condizione che l&apos;inagibilit&agrave; sia accertata dal Comune o dichiarata con autocertificazione.</p>
          <p><strong>Immobile di anziano o disabile in casa di cura:</strong> se il proprietario &egrave; ricoverato in modo permanente in struttura sanitaria o assistenziale, l&apos;immobile pu&ograve; essere considerato abitazione principale (quindi esente) a patto che non sia affittato. Spetta solo se il Comune lo prevede nelle proprie delibere.</p>
        </div>
      </Section>

      <Section bg="warm" id="calcolatore" title="Calcola" titleEm="la tua IMU" subtitle="Inserisci rendita catastale e aliquota per avere una stima precisa.">
        <CalcIMU />
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Giulia"
          story="<strong>Giulia ha 38 anni</strong>, vive a Milano (abitazione principale, esente IMU). Ha ereditato un appartamento a Bologna dove non abita: rendita catastale 650\u20ac, categoria A/2. Il Comune di Bologna applica l'aliquota di 9,7\u2030 per le seconde case."
          lines={[
            { label: 'Rendita catastale rivalutata: 650\u20ac \xd7 1,05', value: '682,50\u20ac' },
            { label: 'Base imponibile: 682,50\u20ac \xd7 160', value: '109.200\u20ac' },
            { label: 'IMU annua: 109.200\u20ac \xd7 9,7\u2030', value: '1.059,24\u20ac' },
            { label: 'Acconto 16 giugno', value: '529,62\u20ac' },
          ]}
          total={{ label: 'Saldo 16 dicembre (conguaglio)', value: '529,62\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/cedolare-secca" className="v8-related-card rv rv-d1"><h4>Cedolare secca</h4><p>Se affitti la seconda casa, la cedolare riduce l&apos;IMU del 25%.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/compro-casa" className="v8-related-card rv rv-d2"><h4>Compro casa</h4><p>Cosa devi sapere sull&apos;IMU prima di comprare un immobile.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/730" className="v8-related-card rv rv-d3"><h4>Faccio il 730</h4><p>L&apos;IMU sugli immobili D &egrave; detraibile. Come inserirla nel 730.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
