'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:"Cos'è e a cosa serve"},
  {id:'documenti',label:'Documenti necessari'},
  {id:'costi',label:'Costi'},
  {id:'come',label:'Come si fa'},
  {id:'tempi',label:'Tempi'},
  {id:'minori',label:'Per i minori'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function PassaportoGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="documenti"
        categoryLabel="Documenti &middot; Aggiornato marzo 2026"
        title="Fare il"
        titleEm="passaporto"
        subtitle="Come richiedere il passaporto nel 2026: documenti, costi (116,20\u20ac), come prenotare online, tempi di attesa e cosa fare quando non trovi appuntamenti."
        stats={[
          { value: '116,20\u20ac', label: 'costo totale' },
          { value: '10-15 gg', label: 'tempi normali' },
          { value: '10 anni', label: 'validit\u00e0' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; il passaporto" titleEm="e quando serve">
        <div className="v8-prose rv">
          <p>Il passaporto &egrave; il documento di identit&agrave; per viaggiare fuori dall&apos;Unione Europea. Per i Paesi UE basta la carta d&apos;identit&agrave; elettronica (CIE) valida per l&apos;espatrio. Il passaporto serve per: USA, UK, Giappone, Australia, Canada, e tutti gli altri Paesi extra-Schengen.</p>
          <p>Ha una validit&agrave; di <strong>10 anni</strong> per i maggiorenni (5 anni per i minorenni). <strong>Non esiste il rinnovo</strong>: quando scade si fa uno nuovo da zero con la stessa procedura. L&apos;unica differenza rispetto al primo rilascio &egrave; che consegni il vecchio passaporto.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Agenda prioritaria</strong> &mdash; Se hai un viaggio imminente documentato (biglietto aereo entro 7 giorni), puoi accedere a slot riservati alle urgenze. Si gestisce direttamente in Questura.</p>
          <p><strong>Contrassegno telematico</strong> &mdash; L&apos;ex marca da bollo da 73,50&euro;. Si acquista in tabaccheria o online su PagoPA.</p>
          <p><strong>Progetto Polis</strong> &mdash; Dal 2024, nei Comuni sotto 15.000 abitanti puoi fare il passaporto all&apos;ufficio postale invece che in Questura.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Non aspettare l&apos;ultimo momento.</strong> Nelle grandi citt&agrave; gli appuntamenti si esauriscono con settimane o mesi di anticipo. Se prevedi un viaggio extra-UE, prenota subito: anche se parti tra 6 mesi, gli slot potrebbero gi&agrave; essere pieni.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="documenti" title="Documenti" titleEm="necessari">
        <div className="v8-prose rv">
          <p><strong>Per il primo rilascio:</strong> modulo di richiesta (si compila online sul portale della Polizia di Stato), 2 foto tessera identiche (fondo bianco, 35x45mm, recenti), documento di identit&agrave; valido (CIE o patente), codice fiscale/tessera sanitaria, ricevuta del pagamento del contributo amministrativo (42,70&euro; via PagoPA), contrassegno telematico da 73,50&euro; (in tabaccheria).</p>
          <p><strong>Per il rinnovo (passaporto scaduto):</strong> stessi documenti sopra + il vecchio passaporto da consegnare.</p>
          <p><strong>Per smarrimento o furto:</strong> denuncia di smarrimento/furto ai Carabinieri o Polizia + eventuali fotocopie del vecchio passaporto se disponibili.</p>
          <p><strong>Le foto tessera</strong> devono rispettare requisiti precisi: fondo bianco uniforme, viso ben visibile, niente occhiali, niente cappelli, espressione neutra, bocca chiusa. Le foto scattate in autonomia col telefono di solito vengono rifiutate: meglio una foto professionale (5-10&euro;).</p>
        </div>
      </Section>

      <Section id="costi" title="Quanto" titleEm="costa">
        <div className="v8-prose rv">
          <p>Il costo totale del passaporto nel 2026 &egrave; <strong>116,20&euro;</strong>, diviso in due pagamenti separati:</p>
          <p><strong>42,70&euro;</strong> di contributo amministrativo, da pagare online tramite PagoPA sul portale della Polizia di Stato (agenda.poliziadistato.it) al momento della prenotazione. Dal 2026 non si paga pi&ugrave; in posta: solo PagoPA.</p>
          <p><strong>73,50&euro;</strong> di contrassegno telematico (la vecchia &ldquo;marca da bollo&rdquo;). Si compra in tabaccheria o online. Va portato fisicamente all&apos;appuntamento.</p>
          <p>A questi si aggiungono: ~5-10&euro; per le foto tessera, e opzionalmente <strong>9,53&euro;</strong> se vuoi la consegna del passaporto a domicilio invece del ritiro in Questura.</p>
          <p>Totale realistico con foto e spedizione: <strong>130-135&euro;</strong>.</p>
        </div>
      </Section>

      <Section bg="warm" id="come" title="Come si fa:" titleEm="procedura passo per passo">
        <StepCards steps={[
          { title: 'Prenota online sul portale della Polizia di Stato', text: 'Vai su agenda.poliziadistato.it, accedi con SPID o CIE, seleziona la Questura o il Commissariato pi\u00f9 vicino. Scegli data e ora. Al momento della prenotazione paghi i 42,70\u20ac tramite PagoPA. Ricevi una email di conferma con il numero di pratica.' },
          { title: 'Compra il contrassegno telematico', text: 'Vai in tabaccheria e compra un contrassegno telematico da 73,50\u20ac. Conservalo intatto: lo consegni all\'appuntamento.' },
          { title: 'Preparati i documenti e le foto', text: 'Fai 2 foto tessera professionali (fondo bianco, 35\u00d745mm). Raccogli tutti i documenti: CIE o patente, tessera sanitaria, contrassegno telematico, ricevuta PagoPA.' },
          { title: 'Presentati all\'appuntamento', text: 'In Questura ti prendono le impronte digitali, ti scattano una foto digitale, verificano i documenti e ritirano il contrassegno. La pratica richiede 10-15 minuti.' },
          { title: 'Ritira il passaporto o ricevilo a casa', text: 'In 10-15 giorni lavorativi il passaporto \u00e8 pronto. Puoi ritirarlo in Questura (ti avvisano via SMS/email) oppure riceverlo a domicilio (+9,53\u20ac).' },
        ]} />
        <InfoBox type="tip">
          <p><strong>Non trovi appuntamenti?</strong> Collegati alle <strong>6-8 di mattina</strong>: &egrave; l&apos;orario in cui vengono rilasciati nuovi slot. Se hai un viaggio urgente documentato (biglietto entro 7 giorni), vai direttamente in Questura con il biglietto e chiedi l&apos;agenda prioritaria.</p>
        </InfoBox>
      </Section>

      <Section id="tempi" title="Tempi di" titleEm="attesa">
        <div className="v8-prose rv">
          <p>In condizioni normali: <strong>10-15 giorni lavorativi</strong> dalla presentazione della domanda alla disponibilit&agrave; del passaporto. Ma ci sono due &ldquo;tempi&rdquo; da considerare.</p>
          <p>Il <strong>tempo per trovare l&apos;appuntamento</strong> &egrave; il vero collo di bottiglia. Nelle grandi citt&agrave; (Roma, Milano, Napoli) gli slot possono essere esauriti per settimane o mesi. In estate e a Natale la situazione peggiora ulteriormente.</p>
          <p>Il <strong>tempo di lavorazione</strong> dopo l&apos;appuntamento &egrave; invece abbastanza stabile: 10-15 giorni lavorativi per il passaporto standard, fino a 3-4 settimane nei periodi di picco.</p>
          <p>Regola pratica: se devi viaggiare tra 2 mesi, prenota <em>oggi</em>. Se devi viaggiare tra 6 mesi, prenota comunque il prima possibile e controlla periodicamente se si liberano slot migliori.</p>
        </div>
      </Section>

      <Section bg="warm" id="minori" title="Passaporto" titleEm="per i minori">
        <div className="v8-prose rv">
          <p>Anche i minorenni devono avere un passaporto individuale: dal 2006 non si possono pi&ugrave; inserire i figli sul passaporto dei genitori. La procedura &egrave; la stessa degli adulti, con alcune differenze.</p>
          <p>Servono <strong>entrambi i genitori presenti</strong> all&apos;appuntamento, oppure uno solo con l&apos;atto di assenso notarile dell&apos;altro. Se c&apos;&egrave; un affidamento esclusivo, serve l&apos;autorizzazione del giudice per il rilascio del passaporto.</p>
          <p>La <strong>validit&agrave;</strong> &egrave; ridotta: 3 anni per i bambini sotto i 3 anni, 5 anni per i minori tra 3 e 18 anni. I costi sono gli stessi degli adulti.</p>
          <p>I minori <strong>sotto i 14 anni</strong> devono viaggiare accompagnati da un genitore o da un adulto che ha l&apos;autorizzazione scritta di entrambi i genitori. Sopra i 14 anni possono viaggiare da soli con il passaporto.</p>
        </div>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Andrea"
          story="<strong>Andrea ha 28 anni</strong>, deve andare negli USA per lavoro tra 6 settimane. Non ha mai fatto il passaporto. Si organizza subito."
          lines={[
            { label: 'Lunedi mattina: accede ad agenda.poliziadistato.it alle 7:00', value: 'Trova slot libero tra 3 settimane' },
            { label: 'Paga 42,70\u20ac via PagoPA', value: 'Ricevuta email' },
            { label: 'Compra contrassegno telematico in tabaccheria', value: '73,50\u20ac' },
            { label: 'Fa foto tessera professionale', value: '8\u20ac' },
          ]}
          total={{ label: 'Passaporto pronto in tempo per il volo (tot. ~125\u20ac)', value: '\u2713' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/cie" className="v8-related-card rv rv-d1"><h4>CIE</h4><p>Per i Paesi UE basta la carta d&apos;identit\u00e0 elettronica.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/spid" className="v8-related-card rv rv-d2"><h4>SPID</h4><p>Serve per prenotare l&apos;appuntamento sul portale della Polizia di Stato.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/codice-fiscale" className="v8-related-card rv rv-d3"><h4>Codice fiscale</h4><p>Ti serve la tessera sanitaria per richiedere il passaporto.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
