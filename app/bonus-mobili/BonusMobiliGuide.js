'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:"Cos'è"},
  {id:'cosa-compro',label:'Cosa si può comprare'},
  {id:'requisiti',label:'Requisiti'},
  {id:'come-pagare',label:'Come pagare'},
  {id:'come-detrarre',label:'Come detrarre'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function BonusMobiliGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="casa"
        categoryLabel="Casa &middot; Aggiornato marzo 2026"
        title="Bonus"
        titleEm="mobili"
        subtitle="Detrazione 50% su mobili e grandi elettrodomestici (max 5.000\u20ac) per chi ha lavori di ristrutturazione in corso. Come funziona, cosa comprare e come detrarre."
        stats={[
          { value: '50%', label: 'detrazione' },
          { value: '5.000\u20ac', label: 'tetto massimo' },
          { value: '10 anni', label: 'rate detraibili' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; il" titleEm="bonus mobili">
        <div className="v8-prose rv">
          <p>Il bonus mobili &egrave; una detrazione IRPEF del <strong>50%</strong> sulle spese per l&apos;acquisto di mobili e grandi elettrodomestici di classe energetica elevata, da ripartire in 10 rate annuali. Il tetto massimo di spesa &egrave; <strong>5.000&euro;</strong> per unit&agrave; immobiliare, quindi la detrazione massima &egrave; 2.500&euro; (250&euro;/anno per 10 anni).</p>
          <p>Il bonus mobili &egrave; <strong>collegato al bonus ristrutturazione</strong>: puoi ottenerlo solo se stai facendo (o hai fatto) lavori di manutenzione straordinaria, restauro o ristrutturazione sull&apos;immobile. Senza ristrutturazione, non esiste.</p>
          <p>Vale sia per la prima che per la seconda casa, con le stesse regole. La ristrutturazione deve riguardare lo stesso immobile in cui si collocano i mobili.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Bonifico ordinario</strong> &mdash; Per il bonus mobili non serve il bonifico parlante: va bene un bonifico ordinario, purché tracciabile.</p>
          <p><strong>Classe energetica</strong> &mdash; Per gli elettrodomestici, serve almeno classe A per i forni, classe E per lavatrici/lavastoviglie, classe F per i frigoriferi.</p>
          <p><strong>Data di inizio lavori</strong> &mdash; La ristrutturazione deve essere iniziata <em>prima</em> dell&apos;acquisto dei mobili. Non il contrario.</p>
        </div>
      </Section>

      <Section bg="warm" id="cosa-compro" title="Cosa si pu&ograve;" titleEm="comprare">
        <div className="v8-prose rv">
          <p><strong>Mobili detraibili:</strong> letti, armadi, cassettiere, librerie, scrivanie, tavoli, sedie, comodini, divani, poltrone, credenze. Anche le cucine componibili complete. Non sono detraibili le porte, i pavimenti, le tende e i tendaggi.</p>
          <p><strong>Grandi elettrodomestici detraibili:</strong> frigoriferi e congelatori (classe min. F), lavatrici e lavasciuga (classe min. E), lavastoviglie (classe min. E), forni (classe min. A), piani cottura elettrici, apparecchi per il condizionamento d&apos;aria, aspirapolvere robot, televisori (se integrati in un sistema domotico). Sono esclusi i piccoli elettrodomestici (microonde, tostapane, ecc.).</p>
          <p><strong>Dove collocarli:</strong> i mobili possono andare in qualsiasi stanza dell&apos;immobile ristrutturato, non per forza nella stanza dove sono stati fatti i lavori. Se hai ristrutturato il bagno, puoi comprare il divano per il soggiorno.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Il limite di 5.000&euro; &egrave; per immobile.</strong> Se possiedi due appartamenti e li ristrutturi entrambi, puoi avere 5.000&euro; di bonus mobili per ognuno, quindi 10.000&euro; totali.</p>
        </InfoBox>
      </Section>

      <Section id="requisiti" title="Requisiti" titleEm="per ottenerlo">
        <StepCards steps={[
          { title: 'Devi avere una ristrutturazione in corso (o fatta)', text: 'Deve essere almeno manutenzione straordinaria: rifacimento bagno, cucina, impianti, apertura porte, ecc. La manutenzione ordinaria non basta (tranne per le parti comuni condominiali).' },
          { title: 'La ristrutturazione deve precedere l\'acquisto', text: 'La data di inizio lavori (o di presentazione della pratica edilizia) deve essere anteriore a quella dell\'acquisto dei mobili. Prima i lavori, poi i mobili.' },
          { title: 'Pagamento tracciabile', text: 'Carta di credito, bancomat, bonifico ordinario. No contanti. Non serve il bonifico parlante (a differenza dei lavori edilizi).' },
          { title: 'Stessa unit\u00e0 immobiliare', text: 'I mobili devono essere destinati all\'immobile oggetto della ristrutturazione, non a un altro. Non si trasferisce da un appartamento all\'altro.' },
        ]} />
      </Section>

      <Section bg="warm" id="come-pagare" title="Come" titleEm="pagare">
        <div className="v8-prose rv">
          <p>A differenza dei lavori di ristrutturazione (che richiedono il bonifico parlante), per il bonus mobili puoi pagare con: <strong>carta di credito, carta di debito (bancomat), bonifico bancario ordinario</strong>. L&apos;importante &egrave; che il pagamento sia tracciabile: niente contanti, niente assegni circolari.</p>
          <p>Se paghi a rate con la carta di credito, la spesa si considera sostenuta nel momento in cui la banca addebita il pagamento, non quando effettui gli acquisti. Conserva sempre lo scontrino parlante o la fattura con i tuoi dati.</p>
          <p>Se acquisti online, lo scontrino digitale o la ricevuta via email sono validi. Stampa e conserva.</p>
        </div>
      </Section>

      <Section id="come-detrarre" title="Come inserirlo" titleEm="nel 730">
        <div className="v8-prose rv">
          <p>Il bonus mobili si dichiara nel <strong>Quadro E del 730</strong> (riga E57), lo stesso dove si inserisce il bonus ristrutturazione. Devi indicare l&apos;importo totale delle spese sostenute per mobili ed elettrodomestici nell&apos;anno.</p>
          <p>La detrazione &egrave; del 50% spalmata in <strong>10 anni</strong>. Se hai speso 4.000&euro; nel 2025, la detrazione annua &egrave; 200&euro; per 10 anni (dal 730 2026 al 730 2035).</p>
          <p>Non &egrave; necessario comunicare nulla all&apos;ENEA per i mobili. Per alcuni elettrodomestici (forni, frigoriferi, lavatrici, lavastoviglie, piani cottura elettrici, lavasciuga) la comunicazione all&apos;ENEA &egrave; prevista ma la sua mancanza <strong>non fa perdere la detrazione</strong> (risoluzione AdE 46/E del 2019).</p>
        </div>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Francesca"
          story="<strong>Francesca ha 35 anni</strong>, ha appena ristrutturato la cucina del suo appartamento (prima casa) spendendo 15.000\u20ac. Contestualmente compra una cucina componibile nuova da 4.800\u20ac e una lavatrice classe A da 600\u20ac. Totale: 5.000\u20ac (tetto massimo del bonus)."
          lines={[
            { label: 'Spesa mobili ed elettrodomestici', value: '5.000\u20ac' },
            { label: 'Detrazione 50%', value: '2.500\u20ac' },
            { label: 'Detrazione annua nel 730 per 10 anni', value: '250\u20ac/anno' },
            { label: 'Primo anno di detrazione', value: '730 2026 (spese 2025)' },
          ]}
          total={{ label: 'Costo netto dei mobili (dopo detrazione)', value: '2.500\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/ristrutturare" className="v8-related-card rv rv-d1"><h4>Ristrutturare casa</h4><p>Il bonus mobili esiste solo se hai lavori di ristrutturazione in corso.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/730" className="v8-related-card rv rv-d2"><h4>Faccio il 730</h4><p>Il bonus mobili si inserisce nel Quadro E del 730.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/compro-casa" className="v8-related-card rv rv-d3"><h4>Compro casa</h4><p>Se acquisti casa da ristrutturare, puoi avere anche il bonus mobili.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
