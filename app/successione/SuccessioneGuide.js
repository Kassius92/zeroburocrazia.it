'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:"Cos'è la successione"},
  {id:'quando',label:'Scadenze'},
  {id:'imposte',label:'Imposte'},
  {id:'documenti',label:'Documenti'},
  {id:'procedura',label:'Come si fa'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function SuccessioneGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="famiglia"
        categoryLabel="Famiglia &middot; Aggiornato marzo 2026"
        title="La"
        titleEm="successione"
        subtitle="Come fare la dichiarazione di successione nel 2026: documenti, imposte, franchigie, scadenze e procedura passo per passo. Entro 12 mesi dal decesso."
        stats={[
          { value: '12 mesi', label: 'per presentarla' },
          { value: '1.000.000\u20ac', label: 'franchigia figli/coniuge' },
          { value: 'CAF', label: 'chi la prepara' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; la" titleEm="dichiarazione di successione">
        <div className="v8-prose rv">
          <p>La dichiarazione di successione &egrave; il documento con cui gli eredi comunicano all&apos;Agenzia delle Entrate il patrimonio lasciato dal defunto (immobili, conti correnti, titoli, auto, ecc.) e calcolano le imposte dovute. Va presentata entro <strong>12 mesi dalla data del decesso</strong>.</p>
          <p>Non va confusa con l&apos;<strong>accettazione dell&apos;eredit&agrave;</strong>: quella &egrave; una dichiarazione separata (pu&ograve; essere espressa davanti al notaio o tacita se usi i beni del defunto). Presentare la dichiarazione di successione non significa automaticamente accettare l&apos;eredit&agrave;.</p>
          <p>Dal 2025 vige il sistema di <strong>autoliquidazione</strong>: le imposte si calcolano e pagano al momento della dichiarazione, senza aspettare l&apos;avviso dell&apos;Agenzia. Richiede pi&ugrave; precisione nel calcolo, ma accelera i tempi.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Asse ereditario</strong> &mdash; L&apos;insieme di tutti i beni e i debiti lasciati dal defunto. Le imposte si calcolano sul valore netto (beni meno debiti).</p>
          <p><strong>Franchigia</strong> &mdash; La soglia sotto la quale non si paga l&apos;imposta di successione. Per figli e coniuge &egrave; 1.000.000&euro; a testa.</p>
          <p><strong>Eredi legittimi</strong> &mdash; Chi eredita per legge in assenza di testamento: coniuge, figli, genitori, fratelli, in ordine di priorit&agrave;.</p>
          <p><strong>Testamento</strong> &mdash; Il documento con cui il defunto ha disposto dei suoi beni. Va cercato subito dopo il decesso (notaio, Registro Generale dei Testamenti).</p>
          <p><strong>SuccessioniOnLine</strong> &mdash; Il software dell&apos;Agenzia delle Entrate per compilare e trasmettere la dichiarazione. Richiede un intermediario abilitato.</p>
        </div>
      </Section>

      <Section bg="warm" id="quando" title="Scadenze" titleEm="e cosa fare subito">
        <div className="v8-prose rv">
          <p>La dichiarazione va presentata entro <strong>12 mesi dalla data del decesso</strong>. Oltre questa scadenza scattano sanzioni dal 120% al 240% dell&apos;imposta dovuta, pi&ugrave; interessi. Non aspettare: inizia a raccogliere i documenti subito.</p>
          <p><strong>Cosa fare nei primi giorni:</strong> cercare un eventuale testamento (notaio di fiducia del defunto, o Registro Generale Testamenti presso il Consiglio Nazionale del Notariato), bloccare le utenze e la posta, informare banca e datore di lavoro del decesso, richiedere il certificato di morte al Comune.</p>
          <p>Le banche <strong>bloccano il conto corrente</strong> del defunto alla comunicazione del decesso. Per sbloccarlo serve la dichiarazione di successione presentata e il pagamento delle imposte. In attesa, gli eredi non possono prelevare (tranne per le spese funerarie, fino a 10.329&euro; senza successione).</p>
        </div>
        <InfoBox type="warn">
          <p><strong>12 mesi passano in fretta.</strong> Raccogliere documenti, fare le visure catastali, valutare gli immobili, trovare un CAF disponibile: tutto richiede tempo. Inizia entro il primo mese dal decesso per stare tranquillo.</p>
        </InfoBox>
      </Section>

      <Section id="imposte" title="Quanto si paga:" titleEm="imposte e franchigie">
        <div className="v8-prose rv">
          <p>L&apos;<strong>imposta di successione</strong> si applica solo sulla parte del patrimonio che supera la franchigia. Le aliquote e le franchigie dipendono dal grado di parentela con il defunto.</p>
          <p><strong>Coniuge e figli:</strong> franchigia 1.000.000&euro; per ogni erede. Sopra la franchigia: 4%. Nella pratica, se erediti meno di 1 milione da un genitore o coniuge, non paghi nulla di imposta di successione.</p>
          <p><strong>Fratelli e sorelle:</strong> franchigia 100.000&euro;. Sopra: 6%.</p>
          <p><strong>Altri parenti fino al 4&deg; grado:</strong> nessuna franchigia. Aliquota: 6%.</p>
          <p><strong>Altri soggetti:</strong> nessuna franchigia. Aliquota: 8%.</p>
          <p><strong>Persone con disabilit&agrave; grave (L.104 art.3 c.3):</strong> franchigia 1.500.000&euro; indipendentemente dal grado di parentela.</p>
          <p>Anche senza imposta di successione, se ci sono <strong>immobili</strong> si pagano sempre le <strong>imposte ipotecaria e catastale</strong>: 200&euro; + 200&euro; se &egrave; prima casa degli eredi, oppure 2% + 1% del valore catastale per le altre case.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Le polizze vita non rientrano nella successione.</strong> Una polizza vita con beneficiario designato viene pagata direttamente al beneficiario dall&apos;assicurazione, senza passare per la successione e senza imposta. &Egrave; uno strumento molto usato per passare patrimonio in modo efficiente.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="documenti" title="Documenti" titleEm="da raccogliere">
        <div className="v8-prose rv">
          <p><strong>Documenti del defunto:</strong> certificato di morte, codice fiscale, documenti di identit&agrave;, stato di famiglia al momento del decesso, eventuale testamento, certificato di residenza storico.</p>
          <p><strong>Documenti degli eredi:</strong> documenti di identit&agrave; e codice fiscale di tutti gli eredi, atto di notoriet&agrave; (rilasciato dal Comune o dal notaio: attesta chi sono gli eredi), eventuale rinuncia all&apos;eredit&agrave; di chi non vuole accettare.</p>
          <p><strong>Documenti sui beni:</strong> per ogni immobile: visura catastale e planimetria (gratis su AGENZIAENTRATE con SPID), visura ipotecaria (gratis online), eventuale atto di acquisto. Per i conti correnti: estratto conto alla data del decesso (chiesto alla banca). Per i titoli: estratto del dossier titoli alla data del decesso. Per i veicoli: estratto PRA. Per i debiti: bollette arretrate, mutui residui, rate di prestiti.</p>
        </div>
      </Section>

      <Section id="procedura" title="Come si fa:" titleEm="passo per passo">
        <StepCards steps={[
          { title: 'Raccogli tutti i documenti', text: 'Inizia subito. Le visure catastali e i documenti di identit\u00e0 sono veloci. Gli estratti conto dalla banca possono richiedere settimane. L\'atto di notoriet\u00e0 va fatto in Comune o dal notaio.' },
          { title: 'Scegli il CAF o il commercialista', text: 'La dichiarazione va presentata telematicamente con il software SuccessioniOnLine. Serve un intermediario abilitato: CAF (costo 500-800\u20ac per una successione standard), commercialista (800-1.500\u20ac), notaio (1.000-3.000\u20ac+). Il notaio \u00e8 necessario solo se ci sono complicazioni particolari.' },
          { title: 'Calcola le imposte e paga', text: 'Con l\'autoliquidazione (dal 2025), le imposte si calcolano al momento della dichiarazione. Il CAF ti dice esattamente quanto pagare. Si paga con F24 (imposta di successione, ipotecaria e catastale).' },
          { title: 'Trasmetti la dichiarazione', text: 'Il CAF trasmette telematicamente la dichiarazione all\'Agenzia delle Entrate. Ricevi la ricevuta di presentazione. Con questa puoi sbloccare i conti bancari del defunto e trasferire gli immobili a tuo nome.' },
          { title: 'Trascrivi gli immobili', text: 'Per passare formalmente gli immobili a nome degli eredi, la dichiarazione accettata dall\'Agenzia delle Entrate deve essere trascritta nei registri immobiliari. Lo fa il notaio o, per le successioni semplici, il CAF stesso.' },
        ]} />
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Elena"
          story="<strong>Elena ha 45 anni</strong>. Suo padre &egrave; deceduto a gennaio 2026. Lascia: un appartamento (rendita catastale 800\u20ac), un conto corrente con 35.000\u20ac, un&apos;auto. Elena &egrave; figlia unica, la madre &egrave; gi\u00e0 deceduta."
          lines={[
            { label: 'Valore immobile (800\u20ac \u00d7 1,05 \u00d7 160)', value: '134.400\u20ac' },
            { label: 'Conto corrente', value: '35.000\u20ac' },
            { label: 'Totale asse ereditario', value: '~170.000\u20ac' },
            { label: 'Imposta successione (sotto franchigia 1.000.000\u20ac)', value: '0\u20ac' },
            { label: 'Imposte ipotecaria + catastale (prima casa)', value: '200\u20ac + 200\u20ac = 400\u20ac' },
          ]}
          total={{ label: 'Parcella CAF + imposte totali', value: '~1.200\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/imu" className="v8-related-card rv rv-d1"><h4>IMU</h4><p>Dopo la successione, verifica se devi pagare l&apos;IMU sugli immobili ereditati.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/730" className="v8-related-card rv rv-d2"><h4>Faccio il 730</h4><p>I redditi da immobili ereditati vanno dichiarati nel 730 dell&apos;anno successivo.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/cedolare-secca" className="v8-related-card rv rv-d3"><h4>Cedolare secca</h4><p>Se metti a reddito l&apos;immobile ereditato, valuta la cedolare secca.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
