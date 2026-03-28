'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import { GuideHero, Section, StepCards, FAQAccordion, ExampleBlock, InfoBox, CTABanner } from '@/components/redesign';

const sections = [
  {id:'cose',label:'I bonus 2026'},
  {id:'bonus',label:'Quale bonus scegliere'},
  {id:'permessi',label:'Permessi'},
  {id:'come-fare',label:'Come si fa'},
  {id:'errori',label:'Errori comuni'},
  {id:'esempio',label:'Esempio'},
  {id:'faq',label:'FAQ'},
];

export default function RistrutturareGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 /><GuideClient /><DotNav sections={sections} />
      <GuideHero
        category="casa"
        categoryLabel="Casa &middot; Aggiornato marzo 2026"
        title="Ristrutturare"
        titleEm="casa"
        subtitle="Bonus ristrutturazione 50%, Ecobonus, permessi comunali, bonifico parlante e tutto quello che devi sapere prima di iniziare i lavori nel 2026."
        stats={[
          { value: '50%', label: 'detrazione ristrutturazione' },
          { value: '36%', label: 'dal 2027' },
          { value: '10 anni', label: 'rate nella dichiarazione' },
        ]}
      />

      <Section id="cose" title="I bonus casa" titleEm="nel 2026">
        <div className="v8-prose rv">
          <p>Nel 2026 i bonus per chi ristruttura casa si sono semplificati rispetto agli anni precedenti. Il Superbonus 110% non esiste pi&ugrave;. Rimangono due strumenti principali.</p>
          <p>Il <strong>Bonus Ristrutturazione al 50%</strong> copre la manutenzione straordinaria, il restauro, il risanamento conservativo e la ristrutturazione edilizia su unit&agrave; abitative. La detrazione &egrave; del 50% delle spese fino a 96.000&euro; per unit&agrave; immobiliare, da ripartire in 10 quote annuali uguali nella dichiarazione dei redditi. Vale per la prima casa; per le altre unit&agrave; l&apos;aliquota &egrave; gi&agrave; al 36%.</p>
          <p>L&apos;<strong>Ecobonus</strong> copre gli interventi di efficientamento energetico: sostituzione infissi (50%), coibentazione (65%), pompe di calore (65%), sistemi di automazione (15%). Non &egrave; cumulabile col bonus ristrutturazione per lo stesso intervento.</p>
          <p><strong>Attenzione alle scadenze:</strong> dal 2027 il bonus ristrutturazione cala al 36% (prima casa) e al 30% per tutte le altre. Dal 2028 al 30% per tutti. Se puoi, conviene fare i lavori entro il 31 dicembre 2026.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Manutenzione ordinaria</strong> &mdash; Tinteggiatura, sostituzione pavimenti, piccole riparazioni. Non d&agrave; diritto al bonus ristrutturazione (salvo parti comuni condominiali).</p>
          <p><strong>Manutenzione straordinaria</strong> &mdash; Rifacimento bagno, cucina, impianti, sostituzione infissi con opere murarie. D&agrave; diritto al bonus.</p>
          <p><strong>Bonifico parlante</strong> &mdash; Il bonifico specifico per i lavori edilizi, che riporta causale con norma, codice fiscale del beneficiario e P.IVA dell&apos;impresa. Obbligatorio per avere la detrazione.</p>
          <p><strong>CILA</strong> &mdash; Comunicazione di Inizio Lavori Asseverata. La pratica edilizia pi&ugrave; comune per le ristrutturazioni interne senza modifiche strutturali.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Superbonus 110%: non esiste pi&ugrave;.</strong> Dal 2025 il Superbonus non &egrave; pi&ugrave; disponibile, salvo casi residuali post-sisma. I lavori che prima rientravano nel Superbonus ora rientrano nelle aliquote ordinarie (50%/36%).</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="bonus" title="Quale bonus" titleEm="scegliere">
        <div className="v8-prose rv">
          <p><strong>Rifaccio il bagno o la cucina?</strong> Bonus ristrutturazione 50% (prima casa). Serve almeno la CILA.</p>
          <p><strong>Cambio gli infissi?</strong> Puoi scegliere tra bonus ristrutturazione (50%) o Ecobonus (50%), se le finestre rispettano i requisiti di trasmittanza termica. L&apos;Ecobonus richiede asseverazione di un tecnico.</p>
          <p><strong>Installo una pompa di calore?</strong> Ecobonus al 65%. Non puoi cumularlo con il bonus ristrutturazione per lo stesso impianto.</p>
          <p><strong>Coibento il tetto o le pareti?</strong> Ecobonus al 65%. Richiede requisiti tecnici certificati da un professionista abilitato.</p>
          <p><strong>Installo il fotovoltaico?</strong> Detrazione al 50% se abbinato a sistemi di accumulo, nel quadro del bonus ristrutturazione. Non esiste pi&ugrave; il superbonus per il fotovoltaico isolato.</p>
          <p><strong>Sostituisco la caldaia a gas?</strong> Dal 2025 le caldaie a combustibili fossili sono escluse dai bonus. Puoi detrarre solo pompe di calore, caldaie ibride o biomassa.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Puoi cumulare pi&ugrave; bonus, ma non per lo stesso intervento.</strong> Esempio: bonus ristrutturazione per il bagno + Ecobonus per gli infissi. Per lo stesso lavoro devi sceglierne uno solo.</p>
        </InfoBox>
      </Section>

      <Section id="permessi" title="Permessi" titleEm="e pratiche comunali" subtitle="Dipende da cosa fai. Nella maggior parte dei casi basta la CILA.">
        <StepCards steps={[
          { title: 'CILA (Comunicazione Inizio Lavori Asseverata)', text: 'Per lavori di manutenzione straordinaria senza modifiche strutturali: rifacimento bagno, cucina, impianti, nuovi pavimenti, apertura/chiusura porte interne. Si presenta online al SUAP del Comune tramite un tecnico abilitato. Si pu\u00f2 iniziare i lavori subito dopo la presentazione.' },
          { title: 'SCIA (Segnalazione Certificata di Inizio Attivit\u00e0)', text: 'Per interventi pi\u00f9 complessi: ristrutturazioni con modifiche alla distribuzione interna, cambio di destinazione d\u2019uso, interventi sulle facciate. Serve un professionista abilitato. Si pu\u00f2 iniziare i lavori il giorno stesso della presentazione.' },
          { title: 'Permesso di costruire', text: 'Solo per interventi edilizi importanti: ampliamenti volumetrici, modifiche strutturali, nuove costruzioni. I tempi sono pi\u00f9 lunghi (30-90 giorni). Non si pu\u00f2 iniziare prima del rilascio.' },
          { title: 'Nessuna pratica (attivit\u00e0 libera)', text: 'Tinteggiatura, piccole riparazioni, sostituzione di infissi a misura identica senza modifiche strutturali, installazione di pannelli solari in zone non vincolate.' },
        ]} />
        <InfoBox type="warn">
          <p><strong>Senza la pratica edilizia perdi la detrazione.</strong> Il bonus ristrutturazione richiede che i lavori siano regolari dal punto di vista urbanistico. Se hai abusi edilizi non sanati, i lavori non sono detraibili. Fai sempre verificare la situazione dall&apos;impresa o dal tecnico prima di iniziare.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="come-fare" title="Come si fa" titleEm="passo per passo">
        <StepCards steps={[
          { title: 'Chiedi preventivi', text: 'Almeno 3 preventivi da imprese diverse, con computo metrico dettagliato (voce per voce, non "a corpo"). Confronta materiali e lavorazioni, non solo il totale. Un preventivo troppo basso spesso nasconde lavori in nero o materiali scadenti.' },
          { title: 'Presenta la pratica edilizia', text: 'Incarica un geometra, architetto o ingegnere per la pratica (CILA o SCIA). Costa tra 500 e 1.500\u20ac. Non iniziare i lavori senza averla presentata: senza pratica perdi la detrazione.' },
          { title: 'Inizia i lavori e paga con bonifico parlante', text: 'Ogni pagamento all\u2019impresa deve avvenire con bonifico parlante (causale specifica, P.IVA impresa, norma agevolazione). Se paghi in contanti o con bonifico ordinario, perdi la detrazione per quella fattura.' },
          { title: 'Conserva tutta la documentazione', text: 'Fatture dell\u2019impresa, ricevute dei bonifici parlanti, copia della pratica edilizia, eventuale asseverazione del tecnico (per Ecobonus). Conserva tutto per 5 anni dalla dichiarazione.' },
          { title: 'Inserisci nel 730 o modello Redditi', text: 'Le spese sostenute nell\u2019anno vanno nel Quadro E del 730 (righe da E41 in poi). La detrazione viene spalmata in 10 rate annuali uguali.' },
        ]} />
      </Section>

      <Section id="errori" title="Errori" titleEm="pi&ugrave; comuni">
        <InfoBox type="warn"><p><strong>Pagare in contanti o con bonifico ordinario.</strong> Ogni pagamento per lavori edilizi detraibili DEVE essere fatto con bonifico parlante. Un bonifico normale non basta. Se paghi cash, perdi la detrazione per quella fattura.</p></InfoBox>
        <InfoBox type="warn"><p><strong>Comprare i mobili prima di iniziare i lavori.</strong> Per il bonus mobili, la data di inizio lavori deve essere anteriore all&apos;acquisto. Prima i lavori (almeno la pratica edilizia), poi i mobili.</p></InfoBox>
        <InfoBox type="warn"><p><strong>Non verificare la situazione urbanistica.</strong> Se l&apos;immobile ha abusi edilizi, i nuovi lavori non sono detraibili. Fai fare una visura catastale e urbanistica prima di iniziare.</p></InfoBox>
        <InfoBox type="warn"><p><strong>Perdere le detrazioni residue alla vendita.</strong> Se vendi la casa, le rate di detrazione non ancora utilizzate passano al nuovo proprietario (salvo accordo scritto nel rogito di mantenerle).</p></InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Paolo"
          story="<strong>Paolo ha 42 anni</strong>, proprietario di un appartamento di 85 mq a Torino (prima casa). Vuole ristrutturare il bagno e cambiare gli infissi. Budget totale: 28.000\u20ac (bagno 12.000\u20ac + infissi 16.000\u20ac)."
          lines={[
            { label: 'Bonus ristrutturazione 50% sul bagno (12.000\u20ac)', value: '6.000\u20ac in 10 anni' },
            { label: 'Ecobonus 50% sugli infissi (16.000\u20ac)', value: '8.000\u20ac in 10 anni' },
            { label: 'Detrazione annua totale', value: '1.400\u20ac/anno per 10 anni' },
            { label: 'Costo effettivo netto', value: '14.000\u20ac (met\u00e0 lo paga lo Stato)' },
          ]}
          total={{ label: 'Risparmio fiscale totale in 10 anni', value: '14.000\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/bonus-mobili" className="v8-related-card rv rv-d1"><h4>Bonus mobili</h4><p>Se stai ristrutturando, puoi detrarre anche i mobili al 50%.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/730" className="v8-related-card rv rv-d2"><h4>Faccio il 730</h4><p>Le spese di ristrutturazione si inseriscono nel Quadro E del 730.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/compro-casa" className="v8-related-card rv rv-d3"><h4>Compro casa</h4><p>Stai comprando un immobile da ristrutturare?</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>
      <CTABanner /><FooterV8 />
    </div>
  );
}
