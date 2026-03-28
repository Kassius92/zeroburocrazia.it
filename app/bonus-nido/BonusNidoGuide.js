'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:"Cos'è"},
  {id:'importi',label:'Importi per ISEE'},
  {id:'requisiti',label:'Requisiti'},
  {id:'domanda',label:'Come fare domanda'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function BonusNidoGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="famiglia"
        categoryLabel="Famiglia &middot; Aggiornato marzo 2026"
        title="Bonus"
        titleEm="asilo nido"
        subtitle="Rimborso fino a 3.600\u20ac/anno per la retta dell'asilo nido. Chi ha diritto, gli importi per fascia ISEE e come fare domanda all'INPS."
        stats={[
          { value: '3.600\u20ac', label: 'massimo annuo' },
          { value: '11 mesi', label: 'massimo erogati' },
          { value: '3 anni', label: 'et\u00e0 massima bambino' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; il" titleEm="bonus asilo nido">
        <div className="v8-prose rv">
          <p>Il bonus asilo nido &egrave; un contributo mensile che l&apos;INPS eroga per rimborsare parzialmente le rette dell&apos;asilo nido. Non &egrave; un trasferimento automatico: devi fare domanda e caricare le ricevute di pagamento mese per mese. L&apos;INPS le verifica e rimborsa entro 30 giorni.</p>
          <p>Vale per i bambini fino a 3 anni (36 mesi), sia che frequentino asili nido pubblici che privati autorizzati. Include anche micronidi, sezioni primavera e nidi in famiglia. Sono esclusi centri estivi, pre-scuola e post-scuola.</p>
          <p>Dal 2026 la domanda accolta <strong>non va rinnovata ogni anno</strong>: resta valida fino ad agosto dell&apos;anno in cui il bambino compie 3 anni. Devi per&ograve; confermare le mensilit&agrave; di frequenza e aggiornare l&apos;ISEE ogni anno.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Bonus nido e detrazione IRPEF sono alternativi.</strong> Non puoi avere entrambi per lo stesso bambino nello stesso anno. Il bonus nido conviene quasi sempre perch&eacute; vale di pi&ugrave; della detrazione IRPEF del 19%.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="importi" title="Importi" titleEm="per fascia ISEE">
        <div className="v8-prose rv">
          <p>L&apos;importo dipende dall&apos;<strong>ISEE minorenni</strong> (non l&apos;ISEE ordinario) e dalla data di nascita del bambino.</p>
          <p>Con <strong>ISEE sotto 25.001&euro;</strong>: fino a <strong>3.000&euro;/anno</strong> (272&euro;/mese, per 11 mesi). Per i nati dal 2024 in poi con un fratello under 10 nel nucleo: fino a <strong>3.600&euro;/anno</strong> (327&euro;/mese).</p>
          <p>Con <strong>ISEE tra 25.001 e 40.000&euro;</strong>: fino a <strong>2.500&euro;/anno</strong> (227&euro;/mese).</p>
          <p>Con <strong>ISEE sopra 40.000&euro; o senza ISEE</strong>: <strong>1.500&euro;/anno</strong> (136&euro;/mese).</p>
          <p>Il rimborso non pu&ograve; superare la spesa effettiva sostenuta (la retta effettivamente pagata). Se la retta mensile &egrave; 200&euro; e il contributo spettante &egrave; 272&euro;, ricevi 200&euro; (non puoi avere pi&ugrave; di quanto hai speso).</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Presenta l&apos;ISEE il prima possibile.</strong> Se nei primi mesi non hai ancora l&apos;ISEE, ricevi il minimo (136&euro;/mese). L&apos;adeguamento al tuo ISEE reale non &egrave; retroattivo: i mesi gi&agrave; pagati al minimo restano al minimo.</p>
        </InfoBox>
      </Section>

      <Section id="requisiti" title="Requisiti" titleEm="per ottenerlo">
        <div className="v8-prose rv">
          <p>Ha diritto al bonus nido chi: ha un figlio che frequenta un asilo nido pubblico o privato autorizzato (o riceve assistenza domiciliare per patologia grave certificata); il bambino ha meno di 3 anni (36 mesi); il richiedente &egrave; residente in Italia; l&apos;asilo nido &egrave; regolarmente autorizzato dalla Regione o dal Comune.</p>
          <p>Spetta a tutti: dipendenti, autonomi, pensionati, disoccupati, stranieri con permesso di soggiorno. L&apos;ISEE cambia solo l&apos;importo, non il diritto.</p>
          <p>Per i <strong>bambini con gravi patologie croniche</strong> che non possono frequentare il nido, il bonus copre le forme di assistenza domiciliare certificata. In questo caso l&apos;importo viene erogato in un&apos;unica soluzione.</p>
        </div>
      </Section>

      <Section bg="warm" id="domanda" title="Come fare" titleEm="domanda all'INPS">
        <StepCards steps={[
          { title: 'Fai l\'ISEE minorenni', text: 'Vai al CAF o fallo online su INPS con SPID. Specifica "ISEE per prestazioni agevolate rivolte ai minorenni". Presentalo prima possibile: l\'importo del bonus dipende dall\'ISEE e non \u00e8 retroattivo.' },
          { title: 'Presenta la domanda su INPS.it', text: 'Accedi con SPID o CIE. Cerca "Bonus asilo nido". Compila il modulo indicando i dati del bambino, il nido che frequenta, l\'IBAN per il rimborso. La domanda vale per tutta la durata del bonus (fino ai 3 anni del bambino).' },
          { title: 'Carica le ricevute ogni mese', text: 'Dopo l\'ammissione, ogni mese devi caricare la ricevuta di pagamento della retta sul portale INPS. L\'INPS la verifica e rimborsa entro 30 giorni. Pi\u00f9 sei puntuale nel caricare, prima ricevi i soldi.' },
          { title: 'Aggiorna l\'ISEE ogni anno', text: 'L\'ISEE ha validit\u00e0 annuale. Ogni anno (tra gennaio e febbraio) aggiorna l\'ISEE per mantenere l\'importo corretto del bonus.' },
        ]} />
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Sofia"
          story="<strong>Sofia ha 28 anni</strong>, ha una bambina di 14 mesi che frequenta un nido privato autorizzato a 380\u20ac/mese. ISEE minorenni: 22.000\u20ac (sotto 25.001\u20ac). Ha presentato domanda a gennaio con ISEE gi\u00e0 disponibile."
          lines={[
            { label: 'Contributo INPS spettante (ISEE < 25.001\u20ac)', value: '272\u20ac/mese' },
            { label: 'Retta effettiva pagata', value: '380\u20ac/mese' },
            { label: 'Rimborso mensile dall\'INPS', value: '272\u20ac' },
            { label: 'Costo netto mensile del nido', value: '108\u20ac/mese' },
          ]}
          total={{ label: 'Risparmio annuo grazie al bonus nido (11 mesi)', value: '2.992\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/figlio" className="v8-related-card rv rv-d1"><h4>Aspetto un figlio</h4><p>Tutti i bonus e i congedi quando nasce un figlio.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/assegno-unico" className="v8-related-card rv rv-d2"><h4>Assegno unico</h4><p>Cumulabile col bonus nido: scopri come ottenerlo.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/isee" className="v8-related-card rv rv-d3"><h4>Faccio l&apos;ISEE</h4><p>L&apos;ISEE minorenni determina l&apos;importo del bonus nido.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
