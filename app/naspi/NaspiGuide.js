'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import {
  GuideHero, Section, StepCards, FAQAccordion,
  ExampleBlock, InfoBox, CrossLink, CTABanner, Quiz, Timeline
} from '@/components/redesign';
import CalcNaspi from '@/components/CalcNaspi';

const quizQuestions = [
  { text: 'Hai perso il lavoro involontariamente (licenziamento, fine contratto, giusta causa)?' },
  { text: 'Hai lavorato come dipendente almeno 13 settimane negli ultimi 4 anni?' },
  { text: 'Sono passati meno di 68 giorni dalla cessazione del rapporto?' },
];

function evaluateQuiz(answers) {
  if (answers[0] === 'n') return { type: 'neg', text: 'Se ti sei dimesso volontariamente senza giusta causa, non hai diritto alla NASpI. Fanno eccezione le dimissioni durante maternità/paternità.' };
  if (answers[1] === 'n') return { type: 'neg', text: 'Servono almeno 13 settimane di contributi negli ultimi 4 anni. Verifica con il tuo estratto contributivo INPS.' };
  if (answers[2] === 'n') return { type: 'neg', text: 'Il termine di 68 giorni è tassativo. Se lo hai superato, purtroppo hai perso il diritto.' };
  return { type: 'pos', text: 'Hai tutti i requisiti. Fai domanda subito — prima presenti, prima parte il pagamento.' };
}

export default function NaspiGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />

      <GuideHero
        category="lavoro"
        categoryLabel="Lavoro &middot; Aggiornato marzo 2026"
        title="NASpI: la disoccupazione"
        titleEm="nel 2026"
        subtitle="Quanto ti spetta, come fare domanda, le scadenze da non perdere e gli errori che ti fanno perdere soldi."
        stats={[
          { value: '1.584€', label: 'Massimo mensile lordo' },
          { value: '68 gg', label: 'Per fare domanda' },
          { value: '24 mesi', label: 'Durata massima' },
        ]}
      />

      <Section bg="warm" id="quiz" title="Hai diritto alla" titleEm="NASpI?" subtitle="Rispondi a 3 domande e lo scopri subito.">
        <Quiz questions={quizQuestions} evaluate={evaluateQuiz} />
      </Section>

      <Section id="cose" title="Cos&apos;è la" titleEm="NASpI">
        <div className="v8-prose rv">
          <p>Hai perso il lavoro e non è stata colpa tua? Lo Stato ti paga un assegno mensile mentre cerchi una nuova occupazione. Si chiama <strong>NASpI</strong> (Nuova Assicurazione Sociale per l&apos;Impiego) &mdash; in parole povere, è la disoccupazione.</p>
          <p>Non è un regalo: è un&apos;assicurazione che <strong>hai già pagato</strong> con i contributi versati durante il lavoro. Se hai lavorato come dipendente e hai versato contributi, hai diritto a riaverli indietro quando ne hai bisogno.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
          <p><strong>NASpI</strong> &mdash; L&apos;assegno di disoccupazione per chi perde il lavoro involontariamente. L&apos;importo dipende da quanto guadagnavi, dura in proporzione a quanto hai lavorato (max 24 mesi).</p>
          <p><strong>Disoccupazione involontaria</strong> &mdash; Hai perso il lavoro senza volerlo: licenziamento, fine contratto a termine, dimissioni per giusta causa. Le dimissioni volontarie normali NON danno diritto alla NASpI.</p>
          <p><strong>Décalage</strong> &mdash; La riduzione progressiva dell&apos;importo: dal 6° mese la NASpI cala del 3% ogni mese.</p>
          <p><strong>NASpI-COM</strong> &mdash; Il modulo che <strong>devi</strong> inviare all&apos;INPS se inizi qualsiasi lavoretto mentre prendi la NASpI. Se non lo fai entro 30 giorni, perdi tutto.</p>
          <p><strong>Contribuzione figurativa</strong> &mdash; Durante la NASpI, l&apos;INPS ti accredita i contributi per la pensione gratis.</p>
          <p><strong>NASpI anticipata</strong> &mdash; Se vuoi aprire un&apos;attività, puoi ricevere tutta la NASpI residua in una volta sola. Dal 2026: 70% subito, 30% dopo.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Non è solo per i licenziati.</strong> La NASpI spetta anche a chi ha un contratto a termine scaduto, a chi si è dimesso per giusta causa, e alle mamme/papà che si dimettono durante il primo anno di vita del figlio.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="requisiti" title="I 3 requisiti" titleEm="obbligatori" subtitle="Per avere la NASpI devi soddisfare tutti e tre.">
        <StepCards steps={[
          { title: 'Disoccupazione involontaria', text: 'Licenziamento, fine contratto a termine, dimissioni per giusta causa, risoluzione consensuale in sede protetta.' },
          { title: 'Almeno 13 settimane di contributi', text: 'Nei 4 anni prima della cessazione. Circa 3 mesi di lavoro dipendente.' },
          { title: 'Domanda entro 68 giorni', text: 'Dalla fine del rapporto. Dopo, il diritto decade — niente proroghe.' },
        ]} />
        <InfoBox type="warn">
          <p><strong>Dimissioni volontarie = niente NASpI.</strong> Dal 2025, se ti dimetti e poi trovi un nuovo lavoro che perdi, devi aver lavorato almeno 13 settimane nel nuovo rapporto. L&apos;assenza ingiustificata prolungata è ora equiparata a dimissioni volontarie.</p>
        </InfoBox>
      </Section>

      <Section id="quanto-spetta" title="Quanto spetta" titleEm="nel 2026" subtitle="L&apos;importo si calcola sulla retribuzione media degli ultimi 4 anni.">
        <div className="v8-prose rv">
          <p>Se la media è <strong>≤ 1.456,72€/mese</strong>: NASpI = 75% della media. Esempio: media 1.200€ → NASpI 900€ lordi.</p>
          <p>Se la media è <strong>&gt; 1.456,72€</strong>: 75% di 1.456,72€ + 25% della parte eccedente. Tetto massimo: <strong>1.584,70€ lordi</strong> (~1.200-1.250€ netti).</p>
          <p>Dal 6° mese cala del 3% ogni mese (décalage). Chi ha più di 55 anni, dal 8° mese.</p>
          <p><strong>Durata:</strong> metà delle settimane lavorate negli ultimi 4 anni. 1 anno lavorato = 6 mesi di NASpI. 4 anni pieni = 24 mesi (massimo).</p>
        </div>
        <CalcNaspi />
      </Section>

      <Section bg="warm" id="domanda" title="Come fare" titleEm="domanda" subtitle="La domanda si fa solo online. Hai tre modi.">
        <StepCards steps={[
          { title: 'Dal sito INPS (fai da te)', text: 'Accedi con SPID o CIE. Vai su Prestazioni → NASpI → Nuova domanda. Procedura guidata.' },
          { title: 'Tramite patronato (gratis)', text: 'CGIL, CISL, UIL, ACLI. Fanno tutto loro, gratis per legge. Il metodo più sicuro.' },
          { title: 'Contact Center INPS', text: 'Chiama 803 164 (gratis da fisso) o 06 164 164 (da cellulare). Un operatore ti aiuta.' },
        ]} />
        <InfoBox type="tip">
          <p><strong>Quando parte il pagamento:</strong> entro 8 giorni dalla cessazione, la NASpI parte dall&apos;8° giorno. Se aspetti, parte dal giorno dopo la domanda — perdi i giorni in mezzo. Primo accredito in 30-45 giorni.</p>
        </InfoBox>
        <div style={{textAlign:'center',marginTop:'24px'}}>
          <CrossLink href="/spid">Fai lo SPID per accedere a INPS</CrossLink>
        </div>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Davide"
          story="Davide ha 34 anni, vive a Milano. Lavorava come magazziniere con contratto indeterminato, 1.400€ netti al mese (~1.800€ lordi). L&apos;azienda chiude il reparto e lo licenzia dopo 3 anni e mezzo. Va al patronato il giorno dopo, fa domanda, e 15 giorni dopo firma il Patto di Servizio al Centro per l&apos;Impiego."
          lines={[
            { label: 'Retribuzione media (ultimi 4 anni)', value: '~1.750€/mese' },
            { label: 'NASpI mensile netta', value: '~960€' },
            { label: 'Durata (3,5 anni ÷ 2)', value: '~21 mesi' },
          ]}
          total={{ label: 'Totale stimato', value: '~17.500€ netti' }}
        />
      </Section>

      <Section id="errori" title="I 5 errori che fanno" titleEm="perdere la NASpI">
        <div style={{maxWidth:'700px',margin:'0 auto'}}>
          <InfoBox type="warn"><p><strong>Fare domanda dopo 68 giorni.</strong> Il termine è tassativo, niente proroghe. Segna la data sul calendario il giorno stesso in cui perdi il lavoro.</p></InfoBox>
          <InfoBox type="warn"><p><strong>Non comunicare un nuovo lavoro.</strong> Anche un lavoretto part-time va comunicato con il NASpI-COM entro 30 giorni. Se non lo fai, la NASpI decade completamente.</p></InfoBox>
          <InfoBox type="warn"><p><strong>Saltare il Centro per l&apos;Impiego.</strong> Hai 15 giorni dalla domanda per firmare il Patto di Servizio. Se non ti presenti, la NASpI può essere sospesa.</p></InfoBox>
          <InfoBox type="warn"><p><strong>Non aggiornare l&apos;ISEE.</strong> La NASpI abbassa il tuo reddito. Fai l&apos;ISEE corrente per sbloccare bonus bollette, social card, agevolazioni TARI.</p></InfoBox>
          <InfoBox type="warn"><p><strong>Non fare il 730.</strong> La NASpI è reddito. L&apos;INPS rilascia la CU: se non la dichiari, rischi problemi con il fisco.</p></InfoBox>
        </div>
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} schema={true} />
      </Section>

      <Section id="correlate" title="Approfondimenti e" titleEm="guide correlate">
        <div className="v8-related-grid rv">
          <Link href="/naspi/calcolo" className="v8-related-card"><h4>Calcolo NASpI</h4><p>Formula, massimale 1.584€, décalage ed esempi.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/naspi/domanda-inps" className="v8-related-card"><h4>Domanda NASpI INPS</h4><p>Come farla entro 68 giorni, passo per passo.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/dimissioni" className="v8-related-card"><h4>Dimissioni volontarie</h4><p>Come dimettersi correttamente online.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/tfr" className="v8-related-card"><h4>TFR</h4><p>Quando te ne vai, ti spetta anche la liquidazione.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
