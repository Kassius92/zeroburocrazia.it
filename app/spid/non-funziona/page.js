import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import MiniGuide, { MgSection, MgPull, MgFaq } from '@/components/redesign/MiniGuide';

export const metadata = {
  title: 'SPID Non Funziona: Problemi Comuni e Come Risolverli nel 2026',
  description: 'SPID non funziona? OTP non arriva, password scaduta, app bloccata, autenticazione fallita: le soluzioni rapide ai problemi più comuni.',
  alternates: { canonical: 'https://zeroburocrazia.it/spid/non-funziona' },
};

const faq = [
  { q: "L'OTP non arriva via SMS, cosa faccio?", a: "Verifica: <strong>1)</strong> il numero di telefono associato è corretto e attivo; <strong>2)</strong> hai campo (prova altrove); <strong>3)</strong> riavvia il telefono. Se non funziona, passa all'autenticazione <strong>via app</strong> (più affidabile degli SMS). Se hai cambiato numero, aggiornalo nell'area personale del provider." },
  { q: "La password dello SPID è scaduta, come la cambio?", a: "Vai sul sito del tuo provider e clicca <strong>\"Password dimenticata\"</strong>. Ricevi un link via email per reimpostarla. Se non hai più accesso all'email, contatta il servizio clienti del provider o vai in ufficio postale con un documento." },
  { q: "L'app PosteID non si apre o va in crash", a: "<strong>Aggiorna l'app</strong> all'ultima versione dallo store. Se non basta: disinstalla, reinstalla, rifai il login. Controlla che il sistema operativo sia aggiornato (PosteID richiede versioni recenti di iOS/Android)." },
  { q: "Errore 'Autenticazione fallita' sul sito della PA", a: "Spesso è un problema del <strong>sito della PA</strong>, non del tuo SPID. Prova: 1) svuota cache e cookie del browser; 2) usa un browser diverso; 3) riprova dopo 10 minuti." },
  { q: "Ho cambiato telefono e lo SPID non funziona più", a: "Devi reinstallare l'app sul nuovo telefono e riassociarla. Con PosteID: accedi su posteid.poste.it dal computer, vai in 'Gestione app' e associa il nuovo dispositivo." },
  { q: "Lo SPID è stato sospeso per mancato pagamento (Poste)", a: "Hai 24 mesi per pagare e riattivarlo. Puoi pagare online nell'area personale o in ufficio postale. In alternativa, attiva uno SPID gratuito con Lepida o InfoCamere." },
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={[articleSchema({ title: 'SPID non funziona: soluzioni 2026', description: 'Problemi SPID e come risolverli: OTP, password, app, errori PA.', url: '/spid/non-funziona', image: 'ogspid.png', datePublished: '2026-03-01', dateModified: '2026-03-28' }), faqSchema(faq)]} />
      <MiniGuide
        category="documenti"
        categoryLabel="Documenti"
        parentHref="/spid"
        parentLabel="Faccio lo SPID"
        title="SPID"
        titleEm="non funziona"
        subtitle="OTP che non arriva, password scaduta, app bloccata, autenticazione fallita: le soluzioni rapide ai problemi più comuni, senza impazzire."
        readTime="4 min"
        updated="marzo 2026"
      >
        <MgSection label="Problema 1" title="OTP non arriva" titleEm="o arriva in ritardo" side="left">
          <p>L&apos;OTP (il codice di 6 cifre che ti arriva via SMS o app) è il problema più comune. <strong>Prima di fare qualsiasi altra cosa:</strong> aspetta 2 minuti. I sistemi telefonici sono lenti e il codice potrebbe essere in transito.</p>
          <p>Se dopo 2 minuti non arriva: verifica di avere campo, riavvia il telefono, controlla che il numero nel profilo del provider sia ancora quello attivo. Se hai cambiato SIM o operatore, il numero vecchio non funziona più.</p>
          <MgPull>
            <strong>Soluzione definitiva:</strong> passa dall&apos;OTP via SMS all&apos;autenticazione via <strong>app del provider</strong>. È più rapida, non dipende dal segnale telefonico, e genera il codice anche offline.
          </MgPull>
        </MgSection>

        <MgSection label="Problema 2" title="Password scaduta" titleEm="o dimenticata" side="right">
          <p>Ogni 6-12 mesi (varia per provider) lo SPID ti chiede di cambiare password. Se non lo fai, l&apos;accesso si blocca. La soluzione è sempre la stessa: vai sul sito del tuo provider, clicca <strong>&ldquo;Password dimenticata&rdquo;</strong> o &ldquo;Reimposta password&rdquo;, e segui il link che arriva via email.</p>
          <p>Se non hai più accesso all&apos;indirizzo email con cui ti sei registrato, devi contattare il servizio clienti del provider. Con PosteID puoi andare in qualsiasi ufficio postale con un documento d&apos;identità.</p>
        </MgSection>

        <MgSection label="Problema 3" title="Errori sul sito" titleEm="della PA" side="left">
          <p>Ricevi &ldquo;Autenticazione fallita&rdquo;, &ldquo;Servizio non disponibile&rdquo; o la pagina si ricarica senza entrare? <strong>Nell&apos;80% dei casi è un problema del sito della PA, non del tuo SPID.</strong></p>
          <p>Test rapido: prova ad accedere a un <em>altro</em> sito PA (es. INPS se stavi usando AgenziaEntrate). Se funziona, il problema è del sito specifico. Riprova dopo 30 minuti o usa un browser diverso in modalità navigazione privata.</p>
          <MgPull warn>
            <strong>Se hai cambiato telefono</strong> e usavi l&apos;app come secondo fattore, devi riassociarla. Accedi al portale del provider dal computer e cerca &ldquo;Gestione dispositivi&rdquo; o &ldquo;Gestione app&rdquo;.
          </MgPull>
        </MgSection>

        <MgSection label="Domande frequenti" title="FAQ" side="right">
          <MgFaq items={faq} />
        </MgSection>
      </MiniGuide>
    </>
  );
}
