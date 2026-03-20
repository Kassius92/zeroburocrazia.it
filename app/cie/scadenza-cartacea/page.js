import Nav from '@/components/Nav';import Footer from '@/components/Footer';import ScrollReveal from '@/components/ScrollReveal';import FAQ from '@/components/FAQ';import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
export const metadata = { title: 'Carta d\u2019Identit\u00e0 Cartacea: Scadenza 3 Agosto 2026 e Cosa Fare', description: 'La carta d\u2019identit\u00e0 cartacea scade il 3 agosto 2026 per l\u2019espatrio. Come rinnovarla, quanto costa la CIE e cosa fare se scade.', keywords: ['carta identit\u00e0 cartacea scadenza','scadenza carta identit\u00e0 2026','carta identit\u00e0 agosto 2026','CIE rinnovo','carta identit\u00e0 cartacea valida'], alternates: { canonical: 'https://zeroburocrazia.it/cie/scadenza-cartacea' }, openGraph: { title: 'Carta Identit\u00e0 Cartacea: Scadenza 3 Agosto 2026', description: 'La carta cartacea scade per l\u2019espatrio il 3 agosto 2026.', url: 'https://zeroburocrazia.it/cie/scadenza-cartacea', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogcie.png', width: 1200, height: 630 }] } };
const faqItems = [
  { q: "La carta d\u2019identit\u00e0 cartacea scade nel 2026?", a: "Per l\u2019<strong>espatrio s\u00ec</strong>: dal 3 agosto 2026 le carte cartacee non sono pi\u00f9 valide per viaggiare in UE (Regolamento UE 2019/1157). Per l\u2019<strong>identificazione in Italia</strong> restano valide fino alla scadenza naturale stampata sulla carta." },
  { q: "Se ho la carta cartacea ancora in corso, devo cambiarla?", a: "Per <strong>viaggiare all\u2019estero dopo il 3 agosto 2026</strong>: s\u00ec, devi passare alla CIE o usare il passaporto. Per uso in Italia: no, resta valida fino alla scadenza stampata." },
  { q: "Quanto costa passare alla CIE?", a: "<strong>22,21\u20ac</strong> (16,79\u20ac diritti statali + 5,42\u20ac comunali). Si paga allo sportello. La CIE dura 10 anni." },
  { q: "Quanto tempo ci vuole per avere la CIE?", a: "La CIE viene spedita a casa in <strong>6 giorni lavorativi</strong>. Nel frattempo ricevi un foglio sostitutivo valido in Italia. Prenota su Agenda CIE per evitare code." },
  { q: "Posso usare il passaporto al posto della CIE in UE?", a: "<strong>S\u00ec.</strong> Il passaporto \u00e8 sempre valido per viaggiare in UE e ovunque. Se hai gi\u00e0 un passaporto valido, non sei obbligato a fare la CIE per l\u2019espatrio." },
];
export default function Page() {
  const schemas = [ articleSchema({ title: 'Carta d\u2019Identit\u00e0 Cartacea: Scadenza Agosto 2026', description: 'La carta cartacea scade per l\u2019espatrio il 3 agosto 2026.', url: '/cie/scadenza-cartacea', image: 'ogcie.png', datePublished: '2026-03-20', dateModified: '2026-03-20' }), faqSchema(faqItems) ];
  return (
    <div className="cat-documenti"><><Nav variant="scheda" /><ScrollReveal /><SchemaOrg schemas={schemas} />
      <div className="layout" style={{paddingTop: '120px'}}><main className="main">
        <div className="perc r"><span className="perc-label">Guida principale</span><div className="perc-steps"><a href="/cie" className="ps active">{'\uD83D\uDCB3'} CIE</a><span className="pa">{'\u203A'}</span><a href="/cie/scadenza-cartacea" className="ps">{'\u23F0'} Scadenza cartacea</a></div></div>
        <div className="sec r" id="intro"><div className="sec-tag">Urgenza 2026</div>
          <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Carta d&apos;identit&agrave; cartacea: scade il <em>3 agosto 2026</em></h1>
          <p>Se hai ancora la <strong>carta d&apos;identit&agrave; cartacea</strong> (quella di carta, non la tessera plastificata con chip), dal <strong>3 agosto 2026</strong> non sar&agrave; pi&ugrave; valida per viaggiare all&apos;estero nei Paesi UE. Lo stabilisce il Regolamento europeo 2019/1157.</p>
          <p>Per l&apos;uso in Italia (identificazione, banca, uffici) resta valida fino alla scadenza stampata. Ma se viaggi in Europa, devi passare alla <strong>CIE</strong> o usare il <strong>passaporto</strong>.</p>
        </div>
        <div className="sec r" id="cosa-fare"><div className="sec-tag">Cosa devi fare</div><h2>Le tue opzioni</h2>
          <div className="tw r"><table><thead><tr><th>Situazione</th><th>Cosa fare</th><th>Urgenza</th></tr></thead><tbody>
            <tr className="hl"><td className="cv">Carta cartacea + viaggi in UE previsti</td><td className="cv cfr"><strong>Prenota subito la CIE</strong></td><td style={{color:'#DC2626', fontWeight:700}}>Alta</td></tr>
            <tr><td>Carta cartacea + nessun viaggio</td><td className="cv">Puoi aspettare la scadenza naturale</td><td>Bassa</td></tr>
            <tr><td>Carta cartacea + passaporto valido</td><td className="cv">Viaggia col passaporto, fai la CIE con calma</td><td>Media</td></tr>
            <tr><td>Hai gi&agrave; la CIE</td><td className="cv">Nessuna azione necessaria</td><td>Nessuna</td></tr>
          </tbody></table></div>
          <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Non aspettare luglio</div><p>D&apos;estate gli uffici anagrafe sono pieni. Se aspetti luglio per prenotare la CIE, rischi di non averla in tempo per le vacanze. <strong>Prenota adesso su Agenda CIE</strong> (prenotazionecie.interno.gov.it).</p></div>
          <a href="/cie" className="xlink r"><span className="xlink-em">{'\uD83D\uDCB3'}</span><div className="xlink-t"><strong>Come fare la CIE</strong> &mdash; 22,21&euro;, 6 giorni, vale 10 anni. Guida completa.</div><span className="xlink-ar">{'\u2192'}</span></a>
        </div>
        <div className="sec r" id="faq"><div className="sec-tag">Risposte rapide</div><h2>Domande frequenti</h2><FAQ items={faqItems} /></div>
        <div className="related r"><h2>Guide correlate</h2><div className="rg">
          <a href="/cie" className="rc"><span className="rc-e">{'\uD83D\uDCB3'}</span><div className="rc-t">CIE</div><div className="rc-d">Come richiedere la CIE: costi, tempi e documenti.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/passaporto" className="rc"><span className="rc-e">{'\uD83D\uDDC2\uFE0F'}</span><div className="rc-t">Passaporto</div><div className="rc-d">Alternativa alla CIE per viaggiare.</div><span className="rc-ar">&rarr;</span></a>
          <a href="/spid" className="rc"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">SPID</div><div className="rc-d">La CIE funziona anche come identit&agrave; digitale.</div><span className="rc-ar">&rarr;</span></a>
        </div></div>
      </main></div><Footer variant="scheda" /></></div>);
}
