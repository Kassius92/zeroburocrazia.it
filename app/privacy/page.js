import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../utility.css';

export const metadata = {
  title: 'Privacy Policy — ZeroBurocrazia',
  description: 'Privacy Policy di ZeroBurocrazia: come trattiamo i tuoi dati, cookie tecnici, diritti GDPR e come contattarci.',
  alternates: { canonical: 'https://zeroburocrazia.it/privacy' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Privacy Policy — ZeroBurocrazia',
    description: 'Privacy Policy di ZeroBurocrazia: come trattiamo i tuoi dati, cookie tecnici, diritti GDPR e come contattarci.',
    url: 'https://zeroburocrazia.it/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav variant="scheda" />

      <div className="page-wrap">
        <div className="page-tag">Documento legale</div>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-sub">Ultimo aggiornamento: marzo 2026 · Titolare: ZeroBurocrazia</p>

        <div className="box-info">
          <p>Versione breve: le guide sono gratuite e non richiedono dati. Se ti iscrivi alla newsletter, raccogliamo solo la tua email per inviarti aggiornamenti. Puoi cancellarti in qualsiasi momento. Non vendiamo i tuoi dati a nessuno.</p>
        </div>

        <div className="prose">
          <h2>1. Chi siamo</h2>
          <p>ZeroBurocrazia è un servizio informativo che aiuta i cittadini italiani a orientarsi nella burocrazia e nelle pratiche della vita quotidiana. Il titolare del trattamento dei dati è ZeroBurocrazia (<a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>).</p>

          <h2>2. Quali dati raccogliamo</h2>

          <h3>a) Dati di navigazione (automatici)</h3>
          <p>Come qualsiasi sito web, i nostri server registrano automaticamente alcune informazioni tecniche quando lo visiti:</p>
          <ul>
            <li>Indirizzo IP (anonimizzato)</li>
            <li>Tipo di browser e sistema operativo</li>
            <li>Pagine visitate e tempo di permanenza</li>
            <li>Sito da cui provieni (referrer)</li>
          </ul>
          <p>Questi dati vengono usati esclusivamente per statistiche aggregate e non vengono mai associati alla tua identità.</p>

          <h3>b) Dati forniti tramite la newsletter</h3>
          <p>Se ti iscrivi alla newsletter, raccogliamo solo il tuo <strong>indirizzo email</strong> per inviarti comunicazioni informative, aggiornamenti sulle guide, scadenze e novità. Puoi cancellarti in qualsiasi momento con un clic da ogni email.</p>

          <h3>c) Cookie</h3>
          <p>Utilizziamo esclusivamente cookie tecnici, necessari al funzionamento del sito (es. preferenza visualizzazione breve/completa). Non utilizziamo cookie di profilazione o di tracciamento pubblicitario. Non è necessario il consenso per i cookie tecnici ai sensi dell&apos;art. 122 del Codice Privacy.</p>

          <h2>3. Per cosa usiamo i dati</h2>
          <p>I dati vengono trattati per le seguenti finalità:</p>
          <ul>
            <li><strong>Newsletter e comunicazioni informative</strong> (base giuridica: consenso esplicito, art. 6.1.a GDPR) — Solo se ti iscrivi volontariamente alla newsletter, ti inviamo aggiornamenti sulle guide, scadenze e novità. Puoi cancellarti in qualsiasi momento.</li>
            <li><strong>Statistiche aggregate</strong> (base giuridica: legittimo interesse, art. 6.1.f GDPR) — Dati di navigazione anonimizzati per capire quali guide sono più utili e migliorare il sito.</li>
          </ul>

          <h2>4. Con chi condividiamo i dati</h2>

          <h3>a) Fornitori tecnici</h3>
          <ul>
            <li><strong>Vercel</strong> — hosting del sito</li>
            <li><strong>Brevo</strong> — invio newsletter</li>
            <li><strong>Google Sheets</strong> — registrazione temporanea dei dati delle richieste</li>
          </ul>
          <p>Tutti i fornitori sono selezionati per la conformità al GDPR e trattano i dati come responsabili del trattamento.</p>

          <h3>b) Dati che non condividiamo mai</h3>
          <p>Non vendiamo i tuoi dati a broker di dati, piattaforme pubblicitarie o soggetti non indicati in questa policy. Non utilizziamo i dati per pubblicità programmatica o profilazione a fini pubblicitari.</p>

          <h2>5. Conservazione dei dati</h2>
          <ul>
            <li><strong>Email newsletter:</strong> conservate fino a cancellazione dell&apos;iscrizione (possibile con un clic da ogni email).</li>
            <li><strong>Log tecnici:</strong> conservati per un massimo di 30 giorni.</li>
          </ul>

          <h2>6. I tuoi diritti (GDPR)</h2>
          <p>In base al Regolamento Europeo 2016/679 (GDPR), hai il diritto di:</p>
          <ul>
            <li><strong>Accesso</strong> — sapere quali dati abbiamo su di te e come vengono usati</li>
            <li><strong>Rettifica</strong> — correggere dati inesatti</li>
            <li><strong>Cancellazione</strong> — chiedere l&apos;eliminazione dei tuoi dati</li>
            <li><strong>Portabilità</strong> — ricevere i tuoi dati in formato leggibile</li>
            <li><strong>Opposizione</strong> — opporti al trattamento per finalità di marketing</li>
            <li><strong>Revoca del consenso</strong> — ritirare il consenso alla newsletter in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima della revoca</li>
          </ul>
          <p>Per esercitare questi diritti scrivi a <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>. Risponderemo entro 30 giorni.</p>
          <p>Se ritieni che i tuoi diritti siano stati violati, puoi presentare reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">garanteprivacy.it</a>).</p>

          <h2>7. Minori</h2>
          <p>ZeroBurocrazia non raccoglie consapevolmente dati da minori di 16 anni. Se ritieni che un minore ci abbia fornito dati personali, contattaci a <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>.</p>

          <h2>8. Modifiche a questa policy</h2>
          <p>Possiamo aggiornare questa Privacy Policy in caso di modifiche al servizio o alla normativa. La data di &quot;ultimo aggiornamento&quot; in cima alla pagina indica quando è stata modificata l&apos;ultima volta. Per modifiche sostanziali, ti avviseremo con un avviso visibile sul sito.</p>

          <h2>9. Contatti</h2>
          <p>Per qualsiasi domanda sulla privacy scrivi a: <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a></p>
        </div>
      </div>

      <Footer variant="utility" />
    </>
  );
}
