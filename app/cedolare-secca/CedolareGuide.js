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
import CalcCedolare from '@/components/CalcCedolare';

const sections = [
  {id:'cose',label:"Cos'è e come funziona"},
  {id:'chi-puo',label:'Chi può sceglierla'},
  {id:'aliquote',label:'Aliquote 21%, 10%, 26%'},
  {id:'conviene',label:'Quando conviene'},
  {id:'come-si-sceglie',label:'Come si sceglie e paga'},
  {id:'affitti-brevi',label:'Affitti brevi 2026'},
  {id:'calcolatore',label:'Calcolatore'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function CedolareGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="fisco"
        categoryLabel="Fisco &middot; Aggiornato marzo 2026"
        title="La cedolare"
        titleEm="secca"
        subtitle="Tassa piatta sugli affitti al 21% o 10%. Come funziona, quando conviene rispetto all'IRPEF, come si sceglie e le novit\u00e0 sugli affitti brevi 2026."
        stats={[
          { value: '21%', label: 'aliquota ordinaria' },
          { value: '10%', label: 'canone concordato' },
          { value: '26%', label: 'affitti brevi' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; la cedolare secca" titleEm="e come funziona">
        <div className="v8-prose rv">
          <p>La cedolare secca &egrave; un&apos;<strong>imposta sostitutiva piatta sugli affitti</strong>. Invece di sommare il canone di affitto al tuo reddito e pagare l&apos;IRPEF progressiva (23-43%), paghi un&apos;imposta fissa del 21% (o 10% in certi casi) direttamente sul canone. In pi&ugrave;, non paghi l&apos;imposta di registro (2% del canone annuo) e il bollo sul contratto.</p>
          <p>Pu&ograve; sceglierla solo chi affitta come <strong>persona fisica</strong>, fuori dall&apos;attivit&agrave; d&apos;impresa, un immobile a uso abitativo. L&apos;inquilino pu&ograve; anche essere una societ&agrave;, purch&eacute; usi l&apos;immobile come abitazione (Cassazione 12395/2024).</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Cedolare secca</strong> &mdash; Imposta sostitutiva fissa (21% o 10%) sul canone di affitto. Sostituisce IRPEF, registro e bollo.</p>
          <p><strong>Canone concordato</strong> &mdash; Affitto calcolato secondo accordi territoriali tra associazioni di inquilini e proprietari. D&agrave; accesso all&apos;aliquota ridotta del 10%.</p>
          <p><strong>Modello RLI</strong> &mdash; Il modulo dell&apos;Agenzia delle Entrate per registrare, prorogare o risolvere contratti di locazione. Si usa anche per scegliere la cedolare.</p>
          <p><strong>Locazione breve</strong> &mdash; Affitto di durata non superiore a 30 giorni tra privati. Non richiede registrazione obbligatoria. Aliquota cedolare: 21% (primo immobile) o 26% (dal secondo).</p>
          <p><strong>Imposta di registro</strong> &mdash; Tassa del 2% del canone annuo (minimo 67&euro;) dovuta alla registrazione del contratto. Con la cedolare non si paga.</p>
        </div>
      </Section>

      <Section bg="warm" id="chi-puo" title="Chi pu&ograve; sceglierla" titleEm="e chi no">
        <div className="v8-prose rv">
          <p><strong>Possono scegliere la cedolare secca:</strong> le persone fisiche proprietarie di immobili ad uso abitativo che affittano al di fuori di un&apos;attivit&agrave; d&apos;impresa. Funziona anche in caso di propriet&agrave; in compropriet&agrave; (ognuno sceglie per la propria quota) e anche se l&apos;inquilino &egrave; una societ&agrave; (purch&eacute; l&apos;immobile sia usato come abitazione).</p>
          <p><strong>Non possono sceglierla:</strong> le societ&agrave; e le persone giuridiche, chi affitta immobili a uso commerciale (uffici, negozi, capannoni), chi affitta nell&apos;esercizio di un&apos;impresa o arte professionale, e chi affitta immobili pertinenziali separatamente dall&apos;abitazione.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Rinuncia all&apos;adeguamento ISTAT obbligatoria.</strong> Scegliendo la cedolare secca, rinunci automaticamente ad aggiornare il canone in base all&apos;inflazione (adeguamento ISTAT) per tutta la durata dell&apos;opzione. Devi comunicarlo all&apos;inquilino con raccomandata prima di optare.</p>
        </InfoBox>
      </Section>

      <Section id="aliquote" title="Aliquote:" titleEm="21%, 10% e 26%">
        <div className="v8-prose rv">
          <p>L&apos;aliquota ordinaria &egrave; il <strong>21%</strong>: si applica a tutti i contratti di affitto liberi (4+4), ai contratti transitori (1-18 mesi) e alle locazioni brevi (Airbnb, booking) per il primo immobile. Si paga direttamente sul canone lordo senza alcuna deduzione.</p>
          <p>L&apos;aliquota agevolata &egrave; il <strong>10%</strong>: si applica ai contratti a <strong>canone concordato</strong>, cio&egrave; affitti calcolati secondo gli accordi territoriali tra associazioni di proprietari e inquilini (tipicamente nei Comuni ad alta densit&agrave; abitativa). Anche i contratti per studenti universitari e i contratti transitori nelle zone dove esistono accordi locali possono beneficiare del 10%.</p>
          <p>L&apos;aliquota sugli <strong>affitti brevi</strong> (dal 2024) &egrave; del <strong>26%</strong> a partire dal secondo immobile affittato. Il primo immobile in locazione breve mantiene il 21%. Dal 2026 il limite massimo di immobili in affitto breve con cedolare &egrave; sceso da 4 a <strong>2</strong>: dal terzo l&apos;attivit&agrave; &egrave; considerata imprenditoriale e serve la partita IVA.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Il canone concordato conviene quasi sempre.</strong> Il 10% anzich&eacute; il 21% fa una differenza enorme. Su un canone di 800&euro;/mese: con cedolare ordinaria paghi 2.016&euro;/anno, con cedolare concordata paghi 960&euro;/anno. Il risparmio &egrave; di 1.056&euro; l&apos;anno, ogni anno.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="conviene" title="Quando conviene" titleEm="la cedolare secca">
        <div className="v8-prose rv">
          <p>La cedolare secca al 21% conviene rispetto all&apos;IRPEF quando il tuo reddito complessivo supera i <strong>28.000&euro;</strong>, perch&eacute; in quella fascia l&apos;IRPEF &egrave; al 33% (e sale al 43% oltre 50.000&euro;). Con redditi pi&ugrave; bassi il confronto &egrave; meno netto.</p>
          <p>Con il regime ordinario IRPEF, il canone viene ridotto del 5% (deduzione forfettaria), quindi si tassa il 95% del canone all&apos;aliquota marginale. Con un reddito tra 15.000 e 28.000&euro; (IRPEF 23%), il regime ordinario pu&ograve; costare: 23% &times; 95% = 21,85% effettivo. La cedolare al 21% &egrave; quasi identica, ma fa risparmiare registro e bollo. In pratica la cedolare conviene quasi sempre, anche con redditi bassi.</p>
          <p>L&apos;unica eccezione &egrave; chi ha redditi molto bassi (sotto 15.000&euro;) e non paga IRPEF per effetto delle detrazioni: in quel caso il reddito da affitto potrebbe non essere tassato affatto con il regime ordinario, mentre la cedolare si paga comunque.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Usa il calcolatore qui sotto</strong> per confrontare cedolare secca vs IRPEF ordinaria in base al tuo reddito e al tuo canone specifico.</p>
        </InfoBox>
      </Section>

      <Section id="come-si-sceglie" title="Come si sceglie" titleEm="e come si paga">
        <StepCards steps={[
          { title: 'Scegli al momento della registrazione', text: "Quando registri il contratto di affitto all'Agenzia delle Entrate (tramite modello RLI online o allo sportello), seleziona l'opzione cedolare secca. Se non la scegli subito, puoi optare nelle annualit\u00e0 successive entro 30 giorni dalla scadenza dell'annualit\u00e0, sempre con il modello RLI." },
          { title: 'Comunica all\'inquilino', text: "Invia all'inquilino una raccomandata in cui comunichi la scelta della cedolare secca e la rinuncia all'adeguamento ISTAT. \u00c8 un requisito formale: senza comunicazione, l'opzione non \u00e8 valida." },
          { title: 'Paga con F24', text: "La cedolare secca si paga con modello F24, con gli stessi codici tributo dell'IRPEF ma specifici per la cedolare. Si paga in acconto (giugno/novembre) e a saldo (giugno successivo), come l'IRPEF. Se l'imposta annua \u00e8 sotto 257,52\u20ac, si paga tutta a giugno." },
          { title: 'Dichiara nel 730 o modello Redditi', text: "La cedolare secca va dichiarata nel Quadro B del 730 (o RC del modello Redditi PF). Il canone percepito e l'imposta pagata si inseriscono nelle apposite caselle." },
        ]} />
      </Section>

      <Section bg="warm" id="affitti-brevi" title="Affitti brevi:" titleEm="novit&agrave; 2026">
        <div className="v8-prose rv">
          <p>Dal 2026, chi affitta tramite piattaforme (Airbnb, Booking, Vrbo) o direttamente per periodi non superiori a 30 giorni pu&ograve; usare la cedolare secca solo fino a <strong>2 immobili</strong>. Dal terzo immobile l&apos;attivit&agrave; &egrave; considerata imprenditoriale: serve la partita IVA, l&apos;iscrizione alla Camera di Commercio e si applicano le regole fiscali delle imprese. Questa stretta &egrave; pensata per contenere il fenomeno degli affitti brevi speculativi nelle grandi citt&agrave;.</p>
          <p>Per i primi due immobili, l&apos;aliquota rimane al <strong>21%</strong> per il primo e al <strong>26%</strong> per il secondo. Le piattaforme sono obbligate ad applicare la ritenuta del 21% e a versarla all&apos;Agenzia delle Entrate: in pratica l&apos;imposta viene trattenuta direttamente da Airbnb/Booking, e in dichiarazione si fa il conguaglio.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>CIN obbligatorio dal 2024.</strong> Per gli affitti brevi &egrave; obbligatorio il Codice Identificativo Nazionale (CIN), da esporre nell&apos;annuncio e sulla porta dell&apos;immobile. Senza CIN, sanzioni da 800 a 8.000&euro;. Il CIN si ottiene tramite il portale del Ministero del Turismo.</p>
        </InfoBox>
      </Section>

      <Section id="calcolatore" title="Calcola la" titleEm="cedolare vs IRPEF" subtitle="Inserisci canone e reddito per vedere quale regime conviene.">
        <CalcCedolare />
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Marco"
          story="<strong>Marco ha 45 anni</strong>, lavora come dipendente con RAL 38.000\u20ac. Ha ereditato un bilocale a Milano che affitta con contratto 4+4 a 900\u20ac/mese (10.800\u20ac/anno). Deve scegliere: cedolare secca o IRPEF ordinaria?"
          lines={[
            { label: 'Con IRPEF ordinaria: 10.800\u20ac \xd7 95% \xd7 33% (aliquota marginale)', value: '3.375\u20ac + registro 216\u20ac = 3.591\u20ac' },
            { label: 'Con cedolare secca 21%: 10.800\u20ac \xd7 21%', value: '2.268\u20ac' },
            { label: 'Risparmio annuo con cedolare', value: '1.323\u20ac' },
          ]}
          total={{ label: 'Risparmio in 10 anni con cedolare secca', value: '~13.000\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/730" className="v8-related-card rv rv-d1"><h4>Faccio il 730</h4><p>La cedolare va dichiarata nel Quadro B del 730.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/imu" className="v8-related-card rv rv-d2"><h4>IMU</h4><p>Se affitti, l&apos;IMU sulla seconda casa si riduce del 25% con cedolare.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/compro-casa" className="v8-related-card rv rv-d3"><h4>Compro casa</h4><p>Stai acquistando un immobile da mettere a reddito?</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
