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
  {id:'parole',label:'Le basi'},
  {id:'iter',label:'Come funziona'},
  {id:'prima-casa',label:'Prima casa'},
  {id:'costi',label:'Tutti i costi'},
  {id:'mutuo',label:'Il mutuo'},
  {id:'errori',label:'Errori comuni'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function ComproCasaGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="casa"
        categoryLabel="Casa &middot; Aggiornato marzo 2026"
        title="Compro"
        titleEm="casa"
        subtitle="Come funziona l'acquisto di una casa nel 2026: dal compromesso al rogito, bonus prima casa, imposte, costi nascosti e tutto quello che devi sapere sul mutuo."
        stats={[
          { value: '2%', label: 'imposta prima casa' },
          { value: '80%', label: 'max finanziamento banca' },
          { value: '18 mesi', label: 'per trasferire la residenza' },
        ]}
      />

      <Section id="parole" title="Le basi:" titleEm="le parole che devi conoscere">
        <div className="v8-prose rv">
          <p>Comprare casa &egrave; pieno di parole che suonano complicate ma non lo sono. Ecco quelle che incontrerai per forza, spiegate semplici.</p>
          <p><strong>Compromesso (o preliminare di compravendita)</strong> &mdash; Il contratto con cui ti impegni ad acquistare la casa a un prezzo concordato. Non &egrave; ancora il rogito, ma &egrave; vincolante. Se ti tiri indietro, perdi la caparra. Se si tira indietro il venditore, ti deve il doppio della caparra.</p>
          <p><strong>Caparra confirmatoria</strong> &mdash; La somma che versi al compromesso (tipicamente 5-10% del prezzo) come garanzia. &Egrave; diversa dall&apos;&ldquo;acconto&rdquo;: la caparra ha conseguenze legali precise in caso di recesso.</p>
          <p><strong>Rogito</strong> &mdash; L&apos;atto notarile definitivo con cui la casa passa di propriet&agrave;. Avviene dal notaio, in presenza di entrambe le parti. &Egrave; il momento in cui paghi il prezzo pieno e diventi proprietario.</p>
          <p><strong>Agevolazioni prima casa</strong> &mdash; Le imposte ridotte che paghi se &egrave; la tua prima casa e rispetti certi requisiti (residenza nel Comune, non possesso di altri immobili con agevolazioni, ecc.).</p>
          <p><strong>Rendita catastale</strong> &mdash; Il valore fiscale dell&apos;immobile usato per calcolare le imposte. Di solito &egrave; molto inferiore al prezzo di mercato.</p>
          <p><strong>Visura ipotecaria</strong> &mdash; Il controllo che non ci siano ipoteche, pignoramenti o altri vincoli sull&apos;immobile. Il notaio la fa sempre prima del rogito.</p>
          <p><strong>Pre-delibera (o delibera di mutuo)</strong> &mdash; La risposta della banca che conferma in via preliminare che &egrave; disponibile a finanziarti. Non &egrave; ancora il contratto di mutuo definitivo.</p>
        </div>
      </Section>

      <Section bg="warm" id="iter" title="Come funziona" titleEm="dall'inizio alla fine">
        <StepCards steps={[
          { title: 'Trova la casa e tratta il prezzo', text: 'Visita pi\u00f9 immobili, confronta i prezzi di mercato della zona, tratta. Non avere fretta: una casa comprata male \u00e8 difficile da correggere.' },
          { title: 'Chiedi la pre-delibera alla banca', text: 'Prima di firmare qualsiasi cosa, vai in banca (o da un broker mutui) e chiedi la pre-delibera. Sapere quanto la banca \u00e8 disposta a prestarti ti evita brutte sorprese.' },
          { title: 'Verifica l\'immobile', text: 'Controlla la visura catastale (dati regolari), la visura ipotecaria (niente vincoli), la conformit\u00e0 urbanistica (niente abusi edilizi) e l\'attestato di prestazione energetica (APE). Il notaio pu\u00f2 aiutarti.' },
          { title: 'Firma il compromesso', text: 'Con compromesso e caparra confirmatoria ci si vincola all\'acquisto. Meglio registrarlo all\'Agenzia delle Entrate (obbligatorio se supera i 30 giorni). Aggiungi clausole sospensive (es. "subordinato al mutuo").' },
          { title: 'Firma il mutuo e il rogito', text: 'Dal notaio si firma prima l\'atto di mutuo (la banca eroga i fondi), poi il rogito. Il notaio verifica tutto, trascrive l\'atto nei registri immobiliari e incassa le imposte.' },
        ]} />
        <InfoBox type="warn">
          <p><strong>Non firmare il compromesso prima della pre-delibera.</strong> Molte persone firmano il compromesso prima di avere la risposta della banca. Se la banca poi rifiuta il mutuo, perdi la caparra. Aspetta sempre la pre-delibera prima di impegnarti.</p>
        </InfoBox>
      </Section>

      <Section id="prima-casa" title="Bonus prima casa:" titleEm="le agevolazioni fiscali">
        <div className="v8-prose rv">
          <p>Se compri la prima casa, paghi <strong>imposte ridotte</strong>. Il risparmio &egrave; significativo rispetto all&apos;acquisto di una seconda casa.</p>
          <p>Con le agevolazioni prima casa, l&apos;<strong>imposta di registro</strong> &egrave; del <strong>2%</strong> sul valore catastale (non sul prezzo di vendita). Senza agevolazioni &egrave; del 9%. Se compri dal costruttore, si paga invece l&apos;IVA al 4% (contro il 10% senza agevolazioni). Le imposte ipotecaria e catastale sono fisse a 50&euro; ciascuna.</p>
          <p>Per avere le agevolazioni devi rispettare queste condizioni: l&apos;immobile deve trovarsi nel Comune dove hai la residenza (o dove lavori), non devi essere proprietario esclusivo di un&apos;altra casa nello stesso Comune, e non devi aver gi&agrave; usato le agevolazioni prima casa per un altro immobile che possiedi ancora.</p>
          <p>Dopo il rogito hai <strong>18 mesi</strong> per trasferire la residenza nel Comune dove si trova la casa (se non ce l&apos;hai gi&agrave;). Se non lo fai, perdi le agevolazioni e ricevi un avviso dall&apos;Agenzia delle Entrate con la differenza d&apos;imposta, sanzioni (30%) e interessi.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Esempio di risparmio:</strong> su una casa da 200.000&euro; con valore catastale di 80.000&euro; &mdash; con agevolazioni paghi 1.600&euro; di imposta di registro (2%). Senza agevolazioni pagheresti 7.200&euro; (9%). Risparmio: 5.600&euro;.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="costi" title="Tutti i costi" titleEm="da mettere in conto">
        <div className="v8-prose rv">
          <p>Il prezzo dell&apos;immobile &egrave; solo una parte. Ecco tutti i costi che si aggiungono e che spesso le persone sottovalutano.</p>
          <p><strong>Imposta di registro (o IVA):</strong> 2% del valore catastale con agevolazioni prima casa, 9% senza (su immobili da privato). Se compri da costruttore: IVA 4% (prima casa) o 10% (seconda casa) sul prezzo di vendita.</p>
          <p><strong>Notaio:</strong> tra 1.500 e 4.000&euro; circa, dipende dal prezzo dell&apos;immobile e dalla complessit&agrave; dell&apos;atto. Chiedi sempre il preventivo scritto. Se c&apos;&egrave; anche il mutuo, il notaio redige due atti e il costo aumenta.</p>
          <p><strong>Agenzia immobiliare:</strong> tipicamente 2-3% del prezzo (pagato dall&apos;acquirente). Su 200.000&euro; sono 4.000-6.000&euro;. Se compri direttamente dal proprietario, non si paga.</p>
          <p><strong>Perizia bancaria:</strong> tra 200 e 500&euro;, &egrave; obbligatoria per avere il mutuo. La banca manda un perito a valutare l&apos;immobile.</p>
          <p><strong>Assicurazioni mutuo:</strong> obbligatoria la polizza incendio e scoppio sull&apos;immobile. Facoltativa (ma spesso richiesta) la polizza vita. Costo: 200-600&euro;/anno.</p>
          <p><strong>Spese condominiali arretrate:</strong> verifica sempre con l&apos;amministratore se il venditore ha morosit&agrave; condominiali, perch&eacute; potresti ereditarle.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>La regola del 10%.</strong> Per una compravendita con mutuo, prevedi di avere disponibili almeno il <strong>20% del prezzo</strong> (la parte che la banca non finanzia) pi&ugrave; un <strong>10% aggiuntivo</strong> per le spese accessorie. Su 200.000&euro;: 40.000 + 20.000 = 60.000&euro; da avere in tasca.</p>
        </InfoBox>
      </Section>

      <Section id="mutuo" title="Il mutuo:" titleEm="quello che devi sapere">
        <div className="v8-prose rv">
          <p>La banca finanzia massimo l&apos;<strong>80% del valore dell&apos;immobile</strong> (a volte meno, dipende dalla tua situazione finanziaria). Il valore &egrave; quello stimato dal perito della banca, che pu&ograve; essere inferiore al prezzo di acquisto. Devi avere almeno il 20% come anticipo, pi&ugrave; le spese.</p>
          <p>Il <strong>tasso fisso</strong> &egrave; quasi sempre la scelta migliore per chi compra la prima casa: la rata resta uguale per tutta la durata del mutuo e puoi pianificare con certezza il budget familiare. Il <strong>tasso variabile</strong> pu&ograve; convenire solo se prevedi di estinguere il mutuo in meno di 10 anni o se vuoi scommettere su un calo dei tassi.</p>
          <p>La rata del mutuo non dovrebbe superare il <strong>30-35% del reddito netto mensile</strong>: questa &egrave; la soglia che le banche usano per valutare la sostenibilit&agrave; finanziaria. Se hai redditi variabili o un lavoro precario, le banche sono pi&ugrave; caute e richiedono garanzie aggiuntive.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Confronta pi&ugrave; banche.</strong> Non prendere il mutuo dalla prima banca che ti risponde. Chiedi preventivi a 3-4 istituti e usa un comparatore online (MutuiOnline, Segugio.it). La differenza di tasso tra le banche pu&ograve; valere decine di migliaia di euro sull&apos;intera durata.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="errori" title="Gli errori" titleEm="pi&ugrave; comuni">
        <InfoBox type="warn">
          <p><strong>Firmare il compromesso senza pre-delibera.</strong> Se la banca poi rifiuta il mutuo e la clausola sospensiva non &egrave; nel compromesso, perdi la caparra. Sempre pre-delibera prima.</p>
        </InfoBox>
        <InfoBox type="warn">
          <p><strong>Non verificare la situazione urbanistica.</strong> Un immobile con abusi edilizi (ampliamenti non autorizzati, cambio d&apos;uso non registrato) pu&ograve; essere difficile da vendere in futuro o impossibile da sanare. Il notaio controlla, ma fallo verificare anche da un tecnico prima del compromesso.</p>
        </InfoBox>
        <InfoBox type="warn">
          <p><strong>Dimenticare di trasferire la residenza.</strong> Hai 18 mesi dal rogito. Se te ne dimentichi, l&apos;Agenzia delle Entrate ti recupera la differenza d&apos;imposta con sanzioni e interessi. Mettiti un promemoria.</p>
        </InfoBox>
        <InfoBox type="warn">
          <p><strong>Sottovalutare i costi accessori.</strong> In molti si fanno trovare impreparati da spese notarili, agenzia, perizia e imposte. Prevedi sempre il 10% extra oltre all&apos;anticipo.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Matteo"
          story="<strong>Matteo ha 34 anni</strong>, stipendio netto 2.000\u20ac/mese. Trova un appartamento a Roma da 250.000\u20ac. \u00c8 la prima casa, non ha mai comprato prima. Vuole capire quanti soldi gli servono."
          lines={[
            { label: 'Anticipo (20%)', value: '50.000\u20ac' },
            { label: 'Imposta di registro (2% valore catastale ~90.000\u20ac)', value: '1.800\u20ac' },
            { label: 'Notaio (atto compravendita + mutuo)', value: '~3.500\u20ac' },
            { label: 'Agenzia immobiliare (3%)', value: '7.500\u20ac' },
            { label: 'Perizia banca + spese istruttoria', value: '~500\u20ac' },
          ]}
          total={{ label: 'Totale da avere in tasca (senza contare rata mutuo)', value: '~63.300\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/imu" className="v8-related-card rv rv-d1"><h4>IMU</h4><p>Dopo l&apos;acquisto, capisci quando dovrai pagare l&apos;IMU.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/cambio-residenza" className="v8-related-card rv rv-d2"><h4>Cambio residenza</h4><p>Hai 18 mesi per trasferire la residenza. Come farlo online.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/730" className="v8-related-card rv rv-d3"><h4>Faccio il 730</h4><p>Gli interessi del mutuo prima casa sono detraibili al 19%.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
