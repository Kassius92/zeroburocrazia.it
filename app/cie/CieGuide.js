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
  {id:'cose',label:"Cos'è la CIE"},
  {id:'scadenza',label:'Scadenza agosto 2026'},
  {id:'come',label:'Come richiederla'},
  {id:'digitale',label:'Identità digitale'},
  {id:'validita',label:'Validità'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function CieGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="documenti"
        categoryLabel="Documenti &middot; Aggiornato marzo 2026"
        title="Carta d&apos;Identit&agrave;"
        titleEm="Elettronica"
        subtitle="Come richiedere la CIE nel 2026: prenotazione, documenti, costo, app CieID e perch&eacute; dal 3 agosto la carta cartacea non sar&agrave; pi&ugrave; valida per l&apos;espatrio."
        stats={[
          { value: '22\u20ac', label: 'costo totale' },
          { value: '6 giorni', label: 'consegna a casa' },
          { value: '3 ago', label: 'scade la cartacea' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave;" titleEm="la CIE">
        <div className="v8-prose rv">
          <p>La Carta d&apos;Identit&agrave; Elettronica &egrave; il tuo documento di identit&agrave; in formato tessera plastificata, con un <strong>microchip NFC</strong> dentro. Sembra una carta di credito, ma &egrave; molto di pi&ugrave;: &egrave; il tuo documento di riconoscimento, il tuo codice fiscale (stampato come codice a barre sul retro), la tua identit&agrave; digitale per accedere ai servizi PA, e il tuo documento per viaggiare in Europa.</p>
          <p>Ha sostituito la vecchia carta cartacea, che <strong>dal 3 agosto 2026 non sar&agrave; pi&ugrave; valida per l&apos;espatrio</strong>. Se hai ancora quella cartacea e devi viaggiare in Europa, richiedila adesso.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>CIE</strong> &mdash; Carta d&apos;Identit&agrave; Elettronica. Il documento fisico con il microchip NFC integrato.</p>
          <p><strong>CieID</strong> &mdash; L&apos;app gratuita che trasforma la CIE in identit&agrave; digitale per accedere a INPS, Agenzia Entrate, ANPR e tutti i servizi PA.</p>
          <p><strong>PIN</strong> &mdash; Il codice personale della CIE. Met&agrave; te lo danno allo sportello, l&apos;altra met&agrave; arriva con la carta per posta. Non perderlo.</p>
          <p><strong>PUK</strong> &mdash; Il codice di sblocco. Se sbagli il PIN 3 volte la CIE si blocca, il PUK la sblocca. Arriva insieme alla carta.</p>
          <p><strong>Agenda CIE</strong> &mdash; La piattaforma online del Ministero dell&apos;Interno per prenotare l&apos;appuntamento in Comune (prenotazionicie.interno.gov.it).</p>
        </div>
      </Section>

      <Section bg="warm" id="scadenza" title="3 agosto 2026:" titleEm="addio carta cartacea">
        <InfoBox type="warn">
          <p><strong>Dal 3 agosto 2026 la carta d&apos;identit&agrave; cartacea non sar&agrave; pi&ugrave; valida per l&apos;espatrio.</strong> Il Regolamento UE 2019/1157 stabilisce che tutte le carte d&apos;identit&agrave; cartacee cessano la validit&agrave; per i viaggi all&apos;estero. Per uscire dall&apos;Italia servir&agrave; la CIE o il passaporto.</p>
        </InfoBox>
        <div className="v8-prose rv">
          <p>In Italia la carta cartacea rester&agrave; utilizzabile come documento di riconoscimento interno fino alla sua naturale scadenza. Ma per viaggiare in UE (e in molti Paesi extra-UE come Svizzera, UK, Turchia), dal 3 agosto servir&agrave; obbligatoriamente la CIE.</p>
          <p>Milioni di italiani hanno ancora la cartacea. Quando si avviciner&agrave; la scadenza i Comuni saranno sommersi di richieste e i tempi si allungheranno. <strong>Prenota adesso</strong> tra aprile e maggio: tempi brevi e nessuna fila.</p>
        </div>
      </Section>

      <Section id="come" title="Come richiedere" titleEm="la CIE" subtitle="Tutto avviene in Comune. Prenota online, presentati, attendi 6 giorni.">
        <StepCards steps={[
          { title: 'Prenota l\'appuntamento', text: 'Vai su prenotazionicie.interno.gov.it (Agenda CIE), scegli il tuo Comune, giorno e ora. Puoi caricare la fototessera digitalmente gi\u00e0 in questa fase. Se il tuo Comune non \u00e8 sulla piattaforma, prenota per telefono o sul sito comunale.' },
          { title: 'Presentati allo sportello', text: 'Porta: 1 fototessera (35\u00d745mm, formato passaporto) se non caricata online, la tessera sanitaria, la vecchia carta d\'identit\u00e0 se la rinnovi. In caso di smarrimento: denuncia + altro documento valido. L\'operatore acquisisce le impronte digitali e ti chiede l\'eventuale consenso alla donazione organi. Poi paghi 22,21\u20ac.' },
          { title: 'Ricevi la ricevuta + met\u00e0 PIN', text: 'Allo sportello ti danno un foglio sostitutivo (vale come documento provvisorio) e la prima met\u00e0 del PIN. Conservali.' },
          { title: 'Ricevi la CIE a casa', text: 'La CIE arriva per posta raccomandata entro 6 giorni lavorativi, con la seconda met\u00e0 del PIN e il PUK. In alternativa puoi ritirarla in Comune dal 7\u00b0 giorno. Metti insieme le due met\u00e0 del PIN e salvalo.' },
        ]} />
        <InfoBox type="tip">
          <p><strong>Primo rilascio senza documenti?</strong> Se non hai nessun documento d&apos;identit&agrave; e non hai mai avuto la CIE, servono <strong>2 testimoni con documento valido</strong> presenti allo sportello. In alternativa puoi usare un certificato di nascita o altri documenti anagrafici.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="digitale" title="La CIE come" titleEm="identit&agrave; digitale" subtitle="Con l'app CieID sostituisce lo SPID per accedere a tutti i servizi PA.">
        <div className="v8-prose rv">
          <p>La CIE non &egrave; solo un documento fisico: con l&apos;app <strong>CieID</strong> diventa la tua identit&agrave; digitale. Puoi accedere a tutti i servizi della PA senza SPID: INPS, Agenzia delle Entrate, ANPR, Comuni, fascicolo sanitario e migliaia di altri. Funziona avvicinando la CIE al telefono (NFC) e inserendo il PIN.</p>
          <p>Rispetto allo SPID ha alcuni vantaggi concreti: non ha costi annuali, non scade (dura come la CIE, 10 anni), e non richiede un account con username e password da ricordare. Lo svantaggio: hai bisogno di uno smartphone con NFC e devi avere entrambe le met&agrave; del PIN. Per questo conviene avere <strong>entrambi</strong>: CieID come identit&agrave; principale, SPID come backup.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Come attivare CieID:</strong> scarica l&apos;app CieID (iOS o Android), avvicina la CIE al telefono, inserisci il PIN completo (le due met&agrave; unite). Fatto: da quel momento puoi accedere a tutti i servizi PA con la CIE.</p>
        </InfoBox>
      </Section>

      <Section id="validita" title="Validit&agrave;" titleEm="e quando rinnovare">
        <div className="v8-prose rv">
          <p>La CIE per i <strong>maggiorenni</strong> ha una validit&agrave; di <strong>10 anni</strong>. Per i <strong>minorenni tra 3 e 18 anni</strong> vale 5 anni, per i <strong>bambini sotto i 3 anni</strong> vale 3 anni (i tratti del viso cambiano rapidamente). Dal 30 luglio 2026, gli <strong>over 70</strong> riceveranno una CIE a durata illimitata.</p>
          <p>Puoi richiedere il rinnovo <strong>a partire da 180 giorni prima della scadenza</strong>. Non aspettare l&apos;ultimo momento. Se la CIE viene smarrita, rubata o deteriorata, puoi richiederne una nuova in qualsiasi momento allo stesso costo (22,21&euro;), presentando la denuncia per smarrimento o furto.</p>
          <p>Se <strong>cambi residenza</strong>, la CIE rimane valida: l&apos;indirizzo non &egrave; riportato sul documento. Se invece cambi <strong>cognome</strong> (matrimonio, divorzio), devi richiedere una nuova CIE.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>CIE per minorenni:</strong> servono <strong>entrambi i genitori</strong> presenti allo sportello. Se uno non pu&ograve; venire, deve firmare un atto di assenso con copia del documento. Le impronte digitali si acquisiscono solo dai 12 anni in su.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Sara"
          story="<strong>Sara ha 32 anni</strong>, ha ancora la carta d&apos;identit&agrave; cartacea che scade a ottobre 2026. Vuole andare in Grecia ad agosto con le amiche. Capisce a marzo che dal 3 agosto la cartacea non vale pi&ugrave; per l&apos;espatrio."
          lines={[
            { label: 'Marzo 2026: prenota su Agenda CIE', value: '5 minuti online' },
            { label: 'Appuntamento in Comune: porta vecchia carta + tessera sanitaria', value: '20 minuti' },
            { label: 'Paga allo sportello', value: '22,21\u20ac' },
            { label: 'Dopo 5 giorni: arriva la CIE a casa con PIN + PUK', value: 'Posta raccomandata' },
          ]}
          total={{ label: 'Agosto 2026: parte per la Grecia con la CIE', value: '\u2713' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/spid" className="v8-related-card rv rv-d1"><h4>Faccio lo SPID</h4><p>L&apos;altra identit&agrave; digitale, complementare alla CIE.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/cambio-residenza" className="v8-related-card rv rv-d2"><h4>Cambio residenza</h4><p>Non devi rifare la CIE se cambi indirizzo.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/codice-fiscale" className="v8-related-card rv rv-d3"><h4>Codice fiscale</h4><p>Il tuo codice fiscale &egrave; stampato sul retro della CIE.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
