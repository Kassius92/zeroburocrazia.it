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
  {id:'cose',label:'Come funziona'},
  {id:'online',label:'Procedura online'},
  {id:'documenti',label:'Documenti'},
  {id:'dopo',label:'Cosa succede dopo'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function CambioResidenzaGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={sections} />

      <GuideHero
        category="documenti"
        categoryLabel="Documenti &middot; Aggiornato marzo 2026"
        title="Cambio di"
        titleEm="residenza"
        subtitle="Come fare il cambio di residenza nel 2026: procedura online su ANPR, documenti necessari, tempi e cosa succede ad auto, patente e documenti."
        stats={[
          { value: '0\u20ac', label: 'completamente gratuito' },
          { value: '2 giorni', label: 'per la conferma online' },
          { value: 'ANPR', label: 'tutto da casa' },
        ]}
      />

      <Section id="cose" title="Come funziona" titleEm="il cambio residenza">
        <div className="v8-prose rv">
          <p>Il cambio di residenza &egrave; la <strong>dichiarazione ufficiale all&apos;anagrafe del Comune che sei andato ad abitare in un nuovo indirizzo</strong>. Va fatto entro 20 giorni dal trasferimento effettivo. &Egrave; completamente gratuito e puoi farlo online da casa in pochi minuti tramite il portale ANPR.</p>
          <p>La residenza non &egrave; dove sei domiciliato (dove stai fisicamente in un certo momento), ma dove abiti stabilmente. Ha effetti concreti su: codice ATECO fiscale, agevolazioni prima casa, accesso ai servizi del Comune (asilo, mensa scolastica, trasporti), patente, libretto auto, e molto altro.</p>
          <p><strong>Dichiarare il falso sulla residenza &egrave; reato</strong> (falso in atto pubblico). Il Comune manda i vigili a verificare che tu abiti davvero all&apos;indirizzo dichiarato. Se la verifica fallisce, la pratica viene annullata.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Residenza</strong> &mdash; Il luogo dove abiti stabilmente. &Egrave; diversa dal domicilio (dove stai temporaneamente). Ha valore legale e amministrativo.</p>
          <p><strong>ANPR</strong> &mdash; Anagrafe Nazionale della Popolazione Residente. Il sistema digitale che collega tutti i Comuni d&apos;Italia. Da qui si fa il cambio di residenza online.</p>
          <p><strong>Decorrenza</strong> &mdash; La data da cui vale la nuova residenza. Decorre dal giorno in cui presenti la dichiarazione, non da quando il Comune la conferma.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>La residenza decorre dalla dichiarazione, non dalla conferma.</strong> Se presenti la domanda il 10 marzo, la tua residenza ufficiale &egrave; dal 10 marzo, anche se il Comune la conferma settimane dopo. &Egrave; importante per l&apos;agevolazione prima casa e altri benefici fiscali.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="online" title="Procedura" titleEm="online su ANPR" subtitle="Tutto da casa, con SPID o CIE. Nessun appuntamento, nessuna fila.">
        <StepCards steps={[
          { title: 'Accedi ad ANPR', text: 'Vai su anagrafenazionale.interno.it e accedi con SPID o CIE. Cerca "Cambio di residenza" o "Cambio di indirizzo".' },
          { title: 'Compila la dichiarazione', text: 'Inserisci il nuovo indirizzo completo (via, numero civico, comune, CAP), il motivo del trasferimento e la data di effettivo trasferimento. Puoi dichiarare anche per i familiari conviventi.' },
          { title: 'Allega i documenti', text: 'Upload del documento di identit\u00e0 valido (per tutti i componenti del nucleo che si trasferiscono) e del codice fiscale. Se hai un contratto di affitto o atto di propriet\u00e0, allegalo: velocizza la verifica dei vigili.' },
          { title: 'Invia e attendi la conferma', text: 'Dopo l\'invio, il Comune ha 2 giorni lavorativi per confermare o avviare la verifica. I vigili passano entro 45 giorni a verificare che tu abiti effettivamente l\u00ec.' },
        ]} />
        <InfoBox type="tip">
          <p><strong>Puoi farlo anche allo sportello.</strong> Se non hai SPID o CIE, vai all&apos;Ufficio Anagrafe del tuo nuovo Comune con documento d&apos;identit&agrave; e codice fiscale. Nessun appuntamento necessario, nessun costo. Se hai una delega scritta con firma, pu&ograve; andare anche qualcun altro per te.</p>
        </InfoBox>
      </Section>

      <Section id="documenti" title="Documenti" titleEm="necessari">
        <div className="v8-prose rv">
          <p>Per il cambio di residenza online servono: <strong>documento di identit&agrave; valido</strong> (carta d&apos;identit&agrave;, passaporto o patente) e <strong>codice fiscale</strong> di tutti i componenti del nucleo che si trasferiscono. Se hai un <strong>contratto di affitto registrato</strong> o un <strong>atto di propriet&agrave;</strong>, allegalo: non &egrave; obbligatorio ma velocizza la verifica dei vigili e riduce il rischio di problemi.</p>
          <p>Se non hai un contratto formale puoi comunque dichiarare la residenza: il Comune mander&agrave; i vigili per verificare che tu abiti effettivamente l&igrave;. Se stai in casa di un familiare o amico, &egrave; utile avere una dichiarazione scritta del proprietario/intestatario che conferma la tua presenza.</p>
          <p>Per i <strong>cittadini stranieri extracomunitari</strong>: serve anche copia del permesso di soggiorno valido. Per i <strong>cittadini UE</strong>: carta di identit&agrave; o passaporto del Paese d&apos;origine.</p>
        </div>
      </Section>

      <Section bg="warm" id="dopo" title="Cosa succede" titleEm="dopo il cambio">
        <div className="v8-prose rv">
          <p>Una volta confermato il cambio, molte cose si aggiornano <strong>automaticamente</strong> senza che tu debba fare nulla.</p>
          <p>La <strong>patente di guida</strong> si aggiorna automaticamente negli archivi della Motorizzazione quando il Comune registra il cambio. Il documento fisico resta valido fino alla scadenza &mdash; non serve ristamparlo. Puoi scaricare un&apos;attestazione aggiornata dal portale dell&apos;Automobilista.</p>
          <p>Il <strong>libretto dell&apos;auto</strong> non riceve pi&ugrave; il vecchio tagliandino adesivo: l&apos;aggiornamento avviene automaticamente negli archivi digitali ANV e PRA. Per avere prova dell&apos;aggiornamento, scarica l&apos;attestazione dal Portale dell&apos;Automobilista.</p>
          <p>La <strong>tessera sanitaria</strong> e il <strong>medico di base</strong>: devi iscriverti alla nuova ASL entro 30 giorni dal trasferimento e scegliere un nuovo medico di base se ti sei trasferito in un altro Comune. La tessera sanitaria viene aggiornata automaticamente.</p>
          <p>Cosa <strong>non si aggiorna da solo</strong>: banche, assicurazioni, datore di lavoro, abbonamenti, utenze domestiche. Devi comunicare tu il nuovo indirizzo a questi soggetti.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Prima casa: attenzione ai tempi.</strong> Se hai comprato casa con le agevolazioni prima casa, sei obbligato a trasferire la residenza nel Comune dove si trova l&apos;immobile entro 18 mesi dall&apos;acquisto. Se non lo fai, perdi le agevolazioni e devi restituire le imposte con sanzioni.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Giulia"
          story="<strong>Giulia ha 27 anni</strong>, si &egrave; trasferita da Bologna a Milano per lavoro. Affitta un bilocale con contratto regolare. Vuole fare il cambio di residenza per accedere ai servizi del Comune di Milano (abbonamento ATM agevolato, asilo per il futuro) e per non perdere l&apos;agevolazione prima casa che ha comprato a Milano."
          lines={[
            { label: 'Accede ad ANPR con SPID', value: '2 minuti' },
            { label: 'Compila la dichiarazione e allega contratto', value: '5 minuti' },
            { label: 'Costo totale', value: '0\u20ac' },
            { label: 'Vigili passano a verificare', value: 'Entro 45 giorni' },
          ]}
          total={{ label: 'Residenza confermata dal Comune di Milano', value: 'Entro 2 giorni lavorativi' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/spid" className="v8-related-card rv rv-d1"><h4>Faccio lo SPID</h4><p>Serve per fare il cambio di residenza online su ANPR.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/cie" className="v8-related-card rv rv-d2"><h4>CIE</h4><p>Con la CIE puoi accedere ad ANPR in alternativa allo SPID.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/isee" className="v8-related-card rv rv-d3"><h4>Faccio l&apos;ISEE</h4><p>Dopo il trasferimento, aggiorna anche l&apos;ISEE con il nuovo indirizzo.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
