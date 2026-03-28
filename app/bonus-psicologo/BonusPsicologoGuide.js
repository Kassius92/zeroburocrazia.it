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

export default function BonusPsicologoGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="salute"
        categoryLabel="Salute &middot; Aggiornato marzo 2026"
        title="Bonus"
        titleEm="psicologo"
        subtitle="Contributo fino a 1.500\u20ac per sedute di psicoterapia. Chi pu\u00f2 richiederlo, gli importi per ISEE e come fare domanda all'INPS quando aprono le iscrizioni."
        stats={[
          { value: '1.500\u20ac', label: 'importo massimo' },
          { value: '50\u20ac', label: 'max per seduta' },
          { value: '270 gg', label: 'per usarlo' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; il" titleEm="bonus psicologo">
        <div className="v8-prose rv">
          <p>Il bonus psicologo &egrave; un contributo statale per sostenere le spese di psicoterapia. Viene erogato dall&apos;INPS sotto forma di voucher da usare con professionisti che hanno aderito all&apos;iniziativa. Il contributo &egrave; di massimo <strong>50&euro; per seduta</strong>, fino al tetto massimo per la tua fascia ISEE.</p>
          <p>Non &egrave; un trasferimento di denaro: ricevi un codice da fornire allo psicologo, che poi lo riscuote direttamente dall&apos;INPS. Se la tariffa dello psicologo &egrave; superiore a 50&euro;, la differenza &egrave; a tuo carico (e la puoi detrarre nel 730).</p>
          <p>La domanda si presenta a finestre: nel 2025 la finestra era dal 15 settembre al 14 novembre. Per il 2026 si attende la pubblicazione del decreto attuativo. <strong>Monitora il sito INPS</strong> (inps.it) e il sito del Consiglio Nazionale Ordine Psicologi (cnop.it).</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Non serve una diagnosi.</strong> Non devi avere una diagnosi psichiatrica. Basta dichiarare un disagio psicologico (ansia, stress, depressione, fragilit&agrave; emotiva) e avere un ISEE valido.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="importi" title="Importi" titleEm="per fascia ISEE">
        <div className="v8-prose rv">
          <p>L&apos;importo dipende dall&apos;ISEE del nucleo familiare:</p>
          <p><strong>ISEE fino a 15.000&euro;:</strong> contributo massimo di <strong>1.500&euro;</strong>. Copre circa 30 sedute da 50&euro;.</p>
          <p><strong>ISEE tra 15.001 e 30.000&euro;:</strong> contributo massimo di <strong>1.000&euro;</strong>. Copre circa 20 sedute da 50&euro;.</p>
          <p><strong>ISEE tra 30.001 e 50.000&euro;:</strong> contributo massimo di <strong>500&euro;</strong>. Copre circa 10 sedute da 50&euro;.</p>
          <p><strong>ISEE oltre 50.000&euro; o assente:</strong> non si ha diritto al bonus.</p>
          <p>Hai <strong>270 giorni</strong> dall&apos;ammissione per usare tutto l&apos;importo. Attenzione: devi fare almeno una seduta entro i primi <strong>60 giorni</strong> dall&apos;ammissione, altrimenti il bonus decade e puoi essere rimpiazzato da chi &egrave; in lista d&apos;attesa.</p>
        </div>
      </Section>

      <Section id="requisiti" title="Requisiti" titleEm="per richiederlo">
        <div className="v8-prose rv">
          <p>Possono fare domanda: i maggiorenni residenti in Italia con ISEE non superiore a 50.000&euro;. I minori tramite il genitore o tutore legale. Non &egrave; richiesta una diagnosi: basta l&apos;autocertificazione di un disagio psicologico.</p>
          <p>Lo psicologo deve essere <strong>iscritto all&apos;Albo degli Psicologi</strong> e aver aderito all&apos;iniziativa INPS. L&apos;elenco degli aderenti &egrave; disponibile sul portale INPS e sul sito del CNOP. Vale anche per sedute online.</p>
          <p>Il bonus &egrave; compatibile con l&apos;assegno unico e altri sussidi, ma <strong>non si cumula</strong> con le detrazioni IRPEF per le stesse sedute (puoi detrarre solo la parte non coperta dal bonus).</p>
        </div>
      </Section>

      <Section bg="warm" id="domanda" title="Come fare" titleEm="domanda">
        <StepCards steps={[
          { title: 'Tieni d\'occhio l\'apertura delle iscrizioni', text: 'L\'INPS pubblica il bando annuale (tipicamente autunno). Iscriviti alla newsletter INPS o monitora inps.it. La finestra di domanda dura circa 2 mesi e c\'è una graduatoria: prima fai domanda, meglio è.' },
          { title: 'Fai l\'ISEE (se non ce l\'hai)', text: 'L\'ISEE serve per determinare l\'importo. Se lo fai dopo la domanda, l\'INPS ti assegna l\'importo corrispondente. Se non lo presenti, non rientri nelle fasce agevolate.' },
          { title: 'Presenta la domanda su INPS.it', text: 'Accedi con SPID o CIE. Cerca "Bonus psicologo". Compila la domanda dichiarando il tuo disagio psicologico e il tuo ISEE. Viene formata una graduatoria per ISEE crescente.' },
          { title: 'Scegli lo psicologo aderente', text: 'Una volta ammesso, ricevi un codice univoco. Cerca uno psicologo aderente all\'iniziativa INPS nel tuo Comune (lista su INPS.it o CNOP). Comunica il codice allo psicologo che lo usa per riscuotere dall\'INPS.' },
        ]} />
        <InfoBox type="warn">
          <p><strong>Usa almeno una seduta entro 60 giorni.</strong> Se sei ammesso ma non prenoti nessuna seduta entro 60 giorni, perdi il bonus e vieni rimpiazzato da chi &egrave; in lista d&apos;attesa. Agisci subito dopo l&apos;ammissione.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Luca"
          story="<strong>Luca ha 29 anni</strong>, lavora come precario e sta attraversando un periodo di forte ansia. ISEE 18.000\u20ac. Fa domanda al bonus psicologo appena aprono le iscrizioni. Viene ammesso con un contributo di 1.000\u20ac (fascia 15.001-30.000\u20ac)."
          lines={[
            { label: 'Contributo assegnato (ISEE 18.000\u20ac)', value: '1.000\u20ac' },
            { label: 'Costo per seduta dello psicologo', value: '70\u20ac' },
            { label: 'Contributo INPS per seduta (max 50\u20ac)', value: '50\u20ac' },
            { label: 'A carico di Luca per seduta', value: '20\u20ac (detraibile al 19%)' },
          ]}
          total={{ label: 'Sedute coperte dal bonus (1.000\u20ac / 50\u20ac)', value: '20 sedute' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/spese-mediche" className="v8-related-card rv rv-d1"><h4>Spese mediche</h4><p>La quota non coperta dal bonus &egrave; detraibile al 19% nel 730.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/isee" className="v8-related-card rv rv-d2"><h4>Faccio l&apos;ISEE</h4><p>L&apos;ISEE determina l&apos;importo del bonus: fino a 1.500\u20ac con ISEE basso.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/730" className="v8-related-card rv rv-d3"><h4>Faccio il 730</h4><p>Le sedute non coperte dal bonus si detraggono nel 730.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
