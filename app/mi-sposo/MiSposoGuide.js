'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:'Come funziona'},
  {id:'documenti',label:'Documenti'},
  {id:'pubblicazioni',label:'Pubblicazioni'},
  {id:'costi',label:'Costi'},
  {id:'regime',label:'Comunione o separazione'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function MiSposoGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="famiglia"
        categoryLabel="Famiglia &middot; Aggiornato marzo 2026"
        title="Mi"
        titleEm="sposo"
        subtitle="Come funziona il matrimonio civile nel 2026: documenti, pubblicazioni, costi, tempi e la scelta tra comunione e separazione dei beni."
        stats={[
          { value: '2-3 mesi', label: 'anticipo per le pratiche' },
          { value: '15 giorni', label: 'congedo matrimoniale' },
          { value: '180 giorni', label: 'validit\u00e0 pubblicazioni' },
        ]}
      />

      <Section id="cose" title="Come funziona" titleEm="il matrimonio civile">
        <div className="v8-prose rv">
          <p>Per sposarsi civilmente in Italia bisogna passare dall&apos;Ufficio di Stato Civile del Comune. Il processo ha due fasi: la <strong>pubblicazione</strong> (annuncio pubblico dell&apos;intenzione di sposarsi) e la <strong>celebrazione</strong> (il matrimonio vero e proprio). Tra le due deve passare almeno una settimana, ma di solito si aspetta qualche settimana in pi&ugrave; per organizzare tutto.</p>
          <p>Puoi sposarti in qualsiasi Comune d&apos;Italia, anche diverso da quello di residenza. Se la cerimonia &egrave; in un Comune diverso, il tuo Comune di residenza rilascia le pubblicazioni e le invia al Comune della cerimonia con una delega.</p>
          <p>Il <strong>matrimonio religioso</strong> cattolico con rito concordatario ha automaticamente effetti civili: il parroco trasmette l&apos;atto al Comune. Anche alcune altre confessioni riconosciute (valdesi, evangelici, ebrei) hanno effetti civili. Il matrimonio solo religioso senza trascrizione non ha valore legale.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Pubblicazioni</strong> &mdash; L&apos;annuncio ufficiale dell&apos;intenzione di sposarsi, affisso all&apos;albo comunale per 8 giorni. Chiunque pu&ograve; presentare opposizione in questo periodo.</p>
          <p><strong>Nulla osta</strong> &mdash; Il documento richiesto se uno dei due sposi &egrave; straniero: certifica che nel Paese di origine non esistono impedimenti al matrimonio.</p>
          <p><strong>Regime patrimoniale</strong> &mdash; La regola su come vengono gestiti i beni della coppia. Si sceglie al matrimonio tra comunione dei beni (default) e separazione dei beni.</p>
        </div>
      </Section>

      <Section bg="warm" id="documenti" title="Documenti" titleEm="necessari">
        <div className="v8-prose rv">
          <p><strong>Per entrambi gli sposi:</strong> documento di identit&agrave; valido (CIE o passaporto), codice fiscale, certificato di stato libero (rilasciato dal Comune di residenza: attesta che non sei gi&agrave; sposato), estratto di nascita (rilasciato dal Comune di nascita).</p>
          <p>I certificati di stato libero e di nascita li chiede direttamente l&apos;Ufficio di Stato Civile tramite il sistema ANPR: in molti Comuni non devi raccoglierli tu. Chiedi prima se lo fanno d&apos;ufficio.</p>
          <p><strong>Se uno degli sposi &egrave; straniero:</strong> serve il <strong>nulla osta</strong> rilasciato dall&apos;Ambasciata o dal Consolato del suo Paese in Italia. I tempi per il nulla osta variano molto da Paese a Paese (da pochi giorni a mesi): informati subito.</p>
          <p><strong>Se uno degli sposi &egrave; vedovo/a o divorziato/a:</strong> serve il certificato di morte del coniuge precedente, oppure la sentenza di divorzio passata in giudicato.</p>
        <InfoBox type="warn">
          <p><strong>Se uno degli sposi &egrave; straniero, inizia subito a richiedere il nulla osta.</strong> I tempi variano da pochi giorni (Paesi UE) a diversi mesi (alcuni Paesi extracomunitari). Senza nulla osta non si pu&ograve; procedere con le pubblicazioni.</p>
        </InfoBox>
        </div>
      </Section>

      <Section id="pubblicazioni" title="Le pubblicazioni:" titleEm="la procedura">
        <StepCards steps={[
          { title: 'Fissa l\'appuntamento in Comune', text: 'Vai all\'Ufficio di Stato Civile del tuo Comune di residenza (entrambi gli sposi). Portate i documenti e comunicate la data e il luogo della cerimonia.' },
          { title: 'Le pubblicazioni vengono affisse', text: 'Il Comune affigge le pubblicazioni all\'albo per 8 giorni. In questo periodo chiunque pu\u00f2 presentare opposizione (es. se uno dei due \u00e8 gi\u00e0 sposato). Senza opposizioni, dopo 8 giorni + 3 giorni di attesa, le pubblicazioni sono chiuse.' },
          { title: 'Scegli la data e celebra', text: 'Dopo le pubblicazioni, hai 180 giorni per celebrare il matrimonio. Se non lo fai entro 180 giorni, le pubblicazioni scadono e devi rifarle. Il Comune pu\u00f2 fissare la data che vuoi in questo periodo.' },
          { title: 'Il matrimonio viene trascritto', text: 'Il giorno della cerimonia l\'ufficiale di stato civile redige l\'atto di matrimonio. Entrambi gli sposi e i due testimoni firmano. L\'atto viene trascritto nei registri del Comune.' },
        ]} />
        <InfoBox type="tip">
          <p><strong>Inizia almeno 2-3 mesi prima.</strong> Raccogliere i documenti, fissare gli appuntamenti, aspettare le pubblicazioni, organizzare la cerimonia: i tempi si sommano. Se uno dei due &egrave; straniero con nulla osta, inizia ancora prima.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="costi" title="Quanto" titleEm="costa sposarsi">
        <div className="v8-prose rv">
          <p>Il <strong>matrimonio civile in Comune</strong> &egrave; gratuito se si celebra nella sala comunale in orari di ufficio. Molti Comuni offrono anche date e luoghi particolari (villa comunale, salone storico, sabato mattina) con costi variabili: da 50&euro; a qualche centinaio di euro.</p>
          <p>I <strong>certificati</strong> necessari (stato libero, estratto di nascita) di solito sono gratuiti se richiesti per il matrimonio. Alcuni Comuni applicano diritti di segreteria: chiedilo prima.</p>
          <p>Se scegliete la <strong>separazione dei beni</strong> davanti al notaio invece che dichiarandola al momento del matrimonio: costo 500-1.000&euro;.</p>
          <p>Il <strong>congedo matrimoniale</strong> ti spetta per legge: 15 giorni di calendario retribuiti al 100%, da usare entro 30 giorni dal matrimonio. Vale anche per le unioni civili.</p>
          <p>Nel 2026 <strong>non esiste un bonus matrimonio statale</strong>. L&apos;unica agevolazione diretta &egrave; il congedo. Sposarsi apre per&ograve; la porta ad altri vantaggi: 730 congiunto, ISEE familiare, detrazioni per coniuge a carico, mutuo prima casa insieme.</p>
        <InfoBox type="tip">
          <p><strong>Congedo matrimoniale: comunicalo con anticipo al datore.</strong> Hai 30 giorni dal matrimonio per usarlo, ma il datore di lavoro deve esserne informato prima. Fallo per iscritto (email o PEC).</p>
        </InfoBox>
        </div>
      </Section>

      <Section id="regime" title="Comunione o" titleEm="separazione dei beni?">
        <div className="v8-prose rv">
          <p>Al momento del matrimonio devi scegliere il <strong>regime patrimoniale</strong>. Se non dici nulla, si applica automaticamente la <strong>comunione dei beni</strong>.</p>
          <p>Con la <strong>comunione dei beni</strong> tutto quello che acquistate dopo il matrimonio &egrave; di entrambi al 50%, anche se paga uno solo. Vale per immobili, auto, conti correnti cointestati. Non rientrano in comunione: i beni ricevuti in eredit&agrave; o donazione, i beni personali (vestiti, strumenti di lavoro), e i beni acquistati prima del matrimonio.</p>
          <p>Con la <strong>separazione dei beni</strong> ognuno resta proprietario di ci&ograve; che compra, indipendentemente dall&apos;altro. I debiti sono personali. Ogni acquisto &egrave; intestato a chi lo fa. &Egrave; la scelta preferita da chi ha un&apos;attivit&agrave; in proprio (protegge l&apos;altro coniuge dai debiti aziendali) o da chi vuole pi&ugrave; autonomia patrimoniale.</p>
          <p>La scelta si pu&ograve; <strong>cambiare dopo il matrimonio</strong> dal notaio (costo 500-1.000&euro;). Si pu&ograve; passare da comunione a separazione e viceversa.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Nessuna scelta &egrave; giusta per tutti.</strong> La comunione protegge il coniuge economicamente pi&ugrave; debole; la separazione protegge i patrimoni individuali. Se uno dei due ha un&apos;attivit&agrave; in proprio o debiti potenziali, la separazione &egrave; spesso pi&ugrave; prudente.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Laura e Davide"
          story="<strong>Laura e Davide</strong> vogliono sposarsi a giugno 2026. Laura risiede a Torino, Davide a Milano. Decidono di celebrare la cerimonia a Torino. Davide &egrave; italiano."
          lines={[
            { label: 'Marzo: appuntamento Stato Civile Torino (con Laura) + appuntamento a Milano per Davide', value: 'Documenti raccolti' },
            { label: 'Aprile: pubblicazioni affisse per 8 giorni a Torino e Milano', value: 'Nessuna opposizione' },
            { label: 'Giugno: cerimonia civile in Comune a Torino (gratuita)', value: '0\u20ac' },
            { label: 'Congedo matrimoniale Laura e Davide', value: '15 giorni retribuiti al 100%' },
          ]}
          total={{ label: 'Costo burocratico del matrimonio', value: '0\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/figlio" className="v8-related-card rv rv-d1"><h4>Aspetto un figlio</h4><p>Dopo il matrimonio, tutti i bonus se arriva un bambino.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/compro-casa" className="v8-related-card rv rv-d2"><h4>Compro casa</h4><p>Il matrimonio facilita il mutuo prima casa cointestato.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/730" className="v8-related-card rv rv-d3"><h4>Faccio il 730</h4><p>Da sposati puoi fare il 730 congiunto con il coniuge a carico.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
