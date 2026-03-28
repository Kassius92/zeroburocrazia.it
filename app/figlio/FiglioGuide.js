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
  {id:'quadro',label:'Il quadro completo'},
  {id:'congedi',label:'Congedi'},
  {id:'bonus',label:'Tutti i bonus'},
  {id:'documenti',label:'Documenti'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function FiglioGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="famiglia"
        categoryLabel="Famiglia &middot; Aggiornato marzo 2026"
        title="Aspetto"
        titleEm="un figlio"
        subtitle="Tutto quello che ti spetta quando diventi genitore nel 2026: congedi maternit\u00e0 e paternit\u00e0, assegno unico, bonus nuovi nati, bonus nido e documenti da fare."
        stats={[
          { value: '5 mesi', label: 'congedo maternit\u00e0' },
          { value: '10 giorni', label: 'congedo paternit\u00e0' },
          { value: '1.000\u20ac', label: 'bonus nuovi nati' },
        ]}
      />

      <Section id="quadro" title="Il quadro completo:" titleEm="cosa ti spetta">
        <div className="v8-prose rv">
          <p>Quando aspetti un figlio in Italia, hai diritto a una serie di tutele e aiuti economici. Il problema &egrave; che nessuno te li spiega tutti insieme: sono sparsi tra INPS, Comune, datore di lavoro e Agenzia delle Entrate. Questa guida li mette in fila.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Congedo di maternit&agrave;</strong> &mdash; Il periodo obbligatorio di assenza dal lavoro per la mamma (5 mesi totali), pagato all&apos;80% dall&apos;INPS.</p>
          <p><strong>Congedo di paternit&agrave;</strong> &mdash; I 10 giorni obbligatori per il pap&agrave;, pagati al 100%. Non sono opzionali: il datore di lavoro non pu&ograve; rifiutarli.</p>
          <p><strong>Congedo parentale</strong> &mdash; Il periodo facoltativo aggiuntivo in cui entrambi i genitori possono stare con il bambino (fino a 10-11 mesi totali tra i due).</p>
          <p><strong>Assegno unico universale</strong> &mdash; Il contributo mensile per ogni figlio a carico fino a 21 anni. Spetta a tutti, dipende dall&apos;ISEE per l&apos;importo.</p>
          <p><strong>Indennit&agrave; INPS</strong> &mdash; Il pagamento che ricevi dall&apos;INPS durante il congedo. &Egrave; una percentuale del tuo stipendio medio.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Fai l&apos;ISEE prima possibile.</strong> La maggior parte dei bonus per i figli (assegno unico, bonus nido, bonus nuovi nati) dipende dall&apos;ISEE. Pi&ugrave; &egrave; basso, pi&ugrave; ricevi. Fallo appena puoi, anche durante la gravidanza.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="congedi" title="Congedi:" titleEm="quanto puoi stare a casa">
        <div className="v8-prose rv">
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Congedo di maternit&agrave; (obbligatorio)</h3>
          <p><strong>5 mesi totali</strong>, pagati all&apos;80% dello stipendio dall&apos;INPS. La formula standard &egrave; 2 mesi prima del parto e 3 dopo, ma puoi scegliere 1+4 oppure, con certificato medico, 0+5 (lavori fino all&apos;ultimo giorno). Spetta a tutte le lavoratrici dipendenti. Le lavoratrici autonome e in gestione separata INPS hanno diritto alle stesse tutele, con modalit&agrave; diverse.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Congedo di paternit&agrave; (obbligatorio)</h3>
          <p>Il pap&agrave; ha <strong>10 giorni retribuiti al 100%</strong>, da usare entro i 5 mesi dalla nascita. Sono obbligatori: il datore di lavoro non pu&ograve; rifiutarli. Si possono prendere anche non consecutivi. Spetta anche in caso di adozione, affido e nascita prematura.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Congedo parentale (facoltativo)</h3>
          <p>Dopo il congedo obbligatorio, entrambi i genitori possono prendere un periodo aggiuntivo fino ai 12 anni del bambino (14 anni per il genitore singolo). Nel 2026: <strong>3 mesi all&apos;80%</strong> per ciascun genitore (non trasferibili), pi&ugrave; altri mesi al 30%. In totale la coppia pu&ograve; avere fino a 10 mesi, di cui 6 totali all&apos;80%.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>I 3 mesi all&apos;80% si perdono se non si usano.</strong> I mesi di congedo parentale all&apos;80% spettano individualmente a ciascun genitore e non sono trasferibili. Se uno dei due non li usa, si perdono. Usateli il prima possibile.</p>
        </InfoBox>
        <div className="v8-prose rv" style={{marginTop:'24px'}}>
          <CrossLink href="/congedo-parentale">Guida completa al congedo parentale &rarr;</CrossLink>
        </div>
      </Section>

      <Section id="bonus" title="Tutti i bonus" titleEm="per chi diventa genitore 2026">
        <div className="v8-prose rv">
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>1. Assegno unico universale</h3>
          <p>Un contributo mensile per ogni figlio a carico fino a 21 anni (senza limite di et&agrave; per i disabili). Spetta a tutti: dipendenti, autonomi, pensionati, disoccupati. L&apos;importo dipende dall&apos;ISEE: con ISEE fino a 17.090&euro; si ricevono circa <strong>200&euro;/mese per figlio</strong>; senza ISEE o con ISEE alto, il minimo &egrave; circa 58&euro;/mese. Si chiede all&apos;INPS entro il 28 febbraio per riceverlo da marzo, oppure in qualsiasi mese (ricevi solo dall&apos;inizio del mese di domanda).</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>2. Bonus nuovi nati (1.000&euro;)</h3>
          <p>Un bonus una tantum di <strong>1.000&euro;</strong> per ogni bambino nato o adottato dal 1&deg; gennaio 2025. Si chiede all&apos;INPS entro 120 giorni dalla nascita, tramite SPID/CIE. Requisiti: ISEE inferiore a 40.000&euro; e residenza in Italia. Viene accreditato sul conto corrente entro 30 giorni dalla domanda.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>3. Bonus asilo nido</h3>
          <p>Rimborso per le rette dell&apos;asilo nido (pubblico o privato accreditato) fino a <strong>3.000&euro;/anno</strong> con ISEE fino a 25.000&euro;, o <strong>2.500&euro;/anno</strong> con ISEE fino a 40.000&euro;. Si chiede all&apos;INPS ogni anno, inviando le ricevute di pagamento. Copre i bambini fino a 36 mesi.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>4. Assegno di maternit&agrave; dei Comuni</h3>
          <p>Un bonus aggiuntivo erogato dal Comune, non dall&apos;INPS. Importo variabile per Comune (in media 400-600&euro;). Si chiede al proprio Comune entro 6 mesi dalla nascita. I requisiti variano, ma generalmente richiedono ISEE basso e residenza.</p>
        </div>
      </Section>

      <Section bg="warm" id="documenti" title="Documenti" titleEm="da fare">
        <StepCards steps={[
          { title: 'Dichiarazione di nascita', text: 'In ospedale (la maggior parte dei casi) o al Comune di residenza entro 10 giorni. Il codice fiscale del bambino viene assegnato automaticamente.' },
          { title: 'Scelta del pediatra', text: 'Entro 15 giorni dalla nascita, scegli il pediatra sul portale della tua ASL (con SPID). Il bambino deve essere iscritto al Servizio Sanitario Nazionale.' },
          { title: 'Assegno unico INPS', text: 'Fai la domanda online su inps.it con SPID entro il 28 febbraio per riceverlo da marzo, o in qualsiasi momento per riceverlo dal mese corrente.' },
          { title: 'Bonus nuovi nati INPS', text: 'Domanda entro 120 giorni dalla nascita su inps.it con SPID. Serve ISEE sotto 40.000\u20ac gi\u00e0 disponibile.' },
          { title: 'Congedo maternit\u00e0/paternit\u00e0', text: 'La mamma comunica al datore di lavoro la data prevista del parto (con certificato medico) almeno 2 mesi prima. Il pap\u00e0 comunica i giorni di congedo con almeno 5 giorni di preavviso.' },
          { title: 'ISEE', text: 'Fai subito l\'ISEE se non ce l\'hai: serve per quasi tutti i bonus. Puoi farlo gratis online su INPS.it o al CAF.' },
        ]} />
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Chiara e Marco"
          story="<strong>Chiara e Marco aspettano il primo figlio</strong> per maggio 2026. Chiara lavora come dipendente (RAL 26.000\u20ac), Marco &egrave; dipendente (RAL 32.000\u20ac). ISEE familiare: 28.000\u20ac."
          lines={[
            { label: 'Congedo maternit\u00e0 Chiara (5 mesi, 80%)', value: '~8.667\u20ac' },
            { label: 'Congedo paternit\u00e0 Marco (10 giorni, 100%)', value: '~1.231\u20ac' },
            { label: 'Bonus nuovi nati (ISEE < 40.000\u20ac)', value: '1.000\u20ac' },
            { label: 'Assegno unico mensile (ISEE 28.000\u20ac)', value: '~120\u20ac/mese' },
          ]}
          total={{ label: 'Totale primo anno (stima)', value: '~12.340\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/congedo-parentale" className="v8-related-card rv rv-d1"><h4>Congedo parentale</h4><p>Quanti mesi spettano, quanto ti pagano e come fare domanda.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/assegno-unico" className="v8-related-card rv rv-d2"><h4>Assegno unico</h4><p>Importi, come fare domanda e quando arriva.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/isee" className="v8-related-card rv rv-d3"><h4>Faccio l&apos;ISEE</h4><p>Serve per quasi tutti i bonus. Come ottenerlo gratis.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}

function CrossLink({ href, children }) {
  return <Link href={href} style={{color:'var(--v8-green)',fontWeight:600,textDecoration:'none'}}>{children}</Link>;
}
