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
  {id:'cose',label:"Cos'è"},
  {id:'durata',label:'Quanti mesi'},
  {id:'indennita',label:'Quanto ti pagano'},
  {id:'novita',label:'Novità 2026'},
  {id:'come',label:'Come fare domanda'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function CongedoGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="famiglia"
        categoryLabel="Famiglia &middot; Aggiornato marzo 2026"
        title="Congedo"
        titleEm="parentale"
        subtitle="Quanti mesi spettano, quanto ti paga l'INPS, le novit\u00e0 2026 (80% fino a 14 anni) e come fare domanda online. Per mamme, pap\u00e0 e genitori single."
        stats={[
          { value: '3 mesi', label: "all'80% per genitore" },
          { value: '11 mesi', label: 'totali per la coppia' },
          { value: '14 anni', label: 'et\u00e0 massima del figlio' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; il" titleEm="congedo parentale">
        <div className="v8-prose rv">
          <p>Il congedo parentale &egrave; quello che viene <strong>dopo</strong> il congedo obbligatorio (maternit&agrave; e paternit&agrave;): un periodo facoltativo in cui mamma o pap&agrave; (o entrambi) possono assentarsi dal lavoro per stare con il bambino. Lo Stato ti paga una parte dello stipendio e il tuo posto di lavoro &egrave; protetto.</p>
          <p>Non va confuso con il congedo obbligatorio: quello &egrave; imposto per legge (5 mesi alla mamma, 10 giorni al pap&agrave;). Il congedo parentale &egrave; una scelta: puoi prenderlo tutto, in parte, o non prenderlo affatto. Puoi prendere giorni interi o anche solo ore.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Congedo obbligatorio</strong> &mdash; Maternit&agrave; (5 mesi, 80%) e paternit&agrave; (10 giorni, 100%). Non puoi rinunciarci.</p>
          <p><strong>Congedo parentale</strong> &mdash; L&apos;astensione facoltativa aggiuntiva. Fino a 10-11 mesi per la coppia, pagata dal 30% all&apos;80%.</p>
          <p><strong>Indennit&agrave;</strong> &mdash; La percentuale dello stipendio che l&apos;INPS ti paga durante il congedo. Varia dal 30% all&apos;80% a seconda dei mesi.</p>
          <p><strong>Contribuzione figurativa</strong> &mdash; Durante il congedo, l&apos;INPS &ldquo;finge&rdquo; che tu stia lavorando ai fini della pensione. Non perdi anzianit&agrave; contributiva.</p>
        </div>
      </Section>

      <Section bg="warm" id="durata" title="Quanti mesi" titleEm="spettano">
        <div className="v8-prose rv">
          <p>Ogni genitore ha diritto a un massimo di <strong>6 mesi</strong> di congedo parentale individuale. I genitori insieme possono avere un massimo di <strong>10 mesi totali</strong> (11 mesi se il pap&agrave; prende almeno 3 mesi). Per i <strong>genitori single</strong>, il limite &egrave; di 11 mesi.</p>
          <p>Il congedo pu&ograve; essere usato fino ai <strong>12 anni del bambino</strong> (14 anni dal 2026 per i mesi indennizzati). Non deve essere continuativo: puoi prenderlo a spezzoni, a giorni o anche a ore.</p>
          <p>Spetta anche in caso di <strong>adozione o affidamento</strong>, con le stesse regole. Per i bambini adottati, il periodo parte dall&apos;ingresso in famiglia, non dalla nascita.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Puoi prenderlo a ore.</strong> Il congedo parentale pu&ograve; essere fruito a giornate intere oppure a ore (modalit&agrave; oraria). Lavorare mezza giornata e stare con il bambino l&apos;altra met&agrave; &egrave; legittimo. Verifica le modalit&agrave; nel tuo CCNL.</p>
        </InfoBox>
      </Section>

      <Section id="indennita" title="Quanto ti" titleEm="paga l'INPS">
        <div className="v8-prose rv">
          <p>L&apos;indennit&agrave; del congedo parentale &egrave; strutturata in tre livelli, che variano in base a quanti mesi hai gi&agrave; usato e all&apos;et&agrave; del bambino.</p>
          <p>I <strong>primi 3 mesi</strong> (non trasferibili, per ciascun genitore) sono pagati all&apos;<strong>80% della retribuzione</strong>. Sono i mesi pi&ugrave; vantaggiosi: usali il prima possibile.</p>
          <p>I <strong>successivi 3 mesi</strong> (fino al sesto mese per ogni genitore, entro i 6 anni del figlio) sono pagati al <strong>30% della retribuzione</strong>.</p>
          <p>I <strong>mesi rimanenti</strong> fino al limite massimo (tra 6 e 12 anni del figlio, o fino a 14 anni dal 2026) non sono indennizzati dall&apos;INPS, a meno che il tuo CCNL non preveda un&apos;integrazione aggiuntiva.</p>
          <p>L&apos;indennit&agrave; &egrave; soggetta a <strong>IRPEF</strong> e viene inclusa nella Certificazione Unica che ricevi a fine anno.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>I 3 mesi all&apos;80% non sono trasferibili.</strong> Se uno dei due genitori non li usa, si perdono. Non possono passare all&apos;altro genitore. Sono pensati per incentivare entrambi i genitori a prendersi cura del figlio.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="novita" title="Novit&agrave;" titleEm="2026">
        <div className="v8-prose rv">
          <p>Dal 2026 il congedo parentale all&apos;<strong>80%</strong> sale a <strong>3 mesi per ciascun genitore</strong> (prima erano 2). Questo vale per chi termina il congedo di maternit&agrave; obbligatorio dal 1&deg; gennaio 2025 in poi.</p>
          <p>Il limite di et&agrave; per i mesi indennizzati &egrave; stato esteso a <strong>14 anni</strong> (era 12). Significa che puoi usare i mesi pagati (al 30%) fino ai 14 anni del bambino, non pi&ugrave; solo fino ai 12.</p>
          <p>Il congedo per <strong>malattia del figlio</strong> dal 2026 &egrave; illimitato sotto i 3 anni, e fino a 10 giorni per genitore all&apos;anno tra i 3 e i 14 anni. Non &egrave; retribuito ma &egrave; coperto da contribuzione figurativa.</p>
        </div>
      </Section>

      <Section id="come" title="Come fare" titleEm="domanda all'INPS">
        <StepCards steps={[
          { title: 'Avvisa il datore di lavoro', text: 'Comunica per iscritto (email o PEC) le date del congedo con almeno 5 giorni di preavviso (2 giorni se prendi il congedo a ore). Indica date di inizio e fine.' },
          { title: 'Fai domanda all\'INPS', text: 'Accedi a inps.it con SPID o CIE. Cerca "Congedo parentale" nella sezione Prestazioni. Compila il modulo indicando il tipo di congedo, le date e il figlio.' },
          { title: 'Allega la documentazione', text: 'Certific\u00e0to di nascita (gi\u00e0 in possesso INPS se il bambino \u00e8 nato in Italia) o documentazione adozione/affido. Per il congedo a ore, indicare anche l\'orario di lavoro contrattuale.' },
          { title: 'Ricevi l\'indennit\u00e0', text: 'L\'INPS paga l\'indennit\u00e0 direttamente a te (pagamento diretto INPS) oppure tramite il datore di lavoro che anticipa e poi si rifonde con l\'INPS (anticipo). Dipende dall\'accordo con il tuo datore.' },
        ]} />
        <InfoBox type="tip">
          <p><strong>Fai domanda in anticipo.</strong> L&apos;INPS pu&ograve; impiegare qualche settimana a elaborare la domanda. Presentala almeno 2 settimane prima dell&apos;inizio del congedo per evitare ritardi nel pagamento dell&apos;indennit&agrave;.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Anna e Luca"
          story="<strong>Anna e Luca</strong> hanno un figlio di 8 mesi. Anna ha terminato il congedo di maternit\u00e0 a settembre 2025. Entrambi vogliono stare con il bambino a turni nei prossimi mesi."
          lines={[
            { label: 'Anna prende 3 mesi congedo all\'80% (retribuzione 1.800\u20ac/mese)', value: '4.320\u20ac' },
            { label: 'Luca prende 3 mesi congedo all\'80% (retribuzione 2.200\u20ac/mese)', value: '5.280\u20ac' },
            { label: 'Anna poi prende 3 mesi al 30%', value: '1.620\u20ac' },
            { label: 'Totale indennit\u00e0 INPS ricevuta dalla coppia', value: '11.220\u20ac' },
          ]}
          total={{ label: 'Mesi a casa totali: 9 mesi (a turni, il bambino mai solo)', value: '9 mesi' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/figlio" className="v8-related-card rv rv-d1"><h4>Aspetto un figlio</h4><p>Tutti i bonus, i congedi e i documenti da fare quando nasce un figlio.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/assegno-unico" className="v8-related-card rv rv-d2"><h4>Assegno unico</h4><p>Il contributo mensile per ogni figlio a carico fino a 21 anni.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/naspi" className="v8-related-card rv rv-d3"><h4>NASpI</h4><p>Se perdi il lavoro dopo il congedo, scopri se hai diritto alla disoccupazione.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
