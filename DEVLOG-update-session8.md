# DEVLOG Update — Sessione 8

**Data:** 9 marzo 2026
**Stato:** 18 route. 11 guide attive. Modello business: stile Aranzulla (contenuti gratuiti + affiliazioni + newsletter). Deploy attivo su zeroburocrazia.it.

---

## Sessione 8 (9 marzo 2026)

### PIVOT MODELLO BUSINESS

La sessione è partita da una discussione strategica sul modello di business. Evoluzione:

1. **Schede personalizzate** (modello precedente) → scartato
2. **Lead generation professionisti** (CAF, commercialisti, broker pagano per lead) → sviluppato, poi scartato perché mancano i professionisti dall'altra parte
3. **Modello Aranzulla** (contenuti gratuiti SEO + affiliazioni contestuali + newsletter) → **adottato**

Motivazione: il contenuto è l'asset principale. Il traffico viene da Google. Le affiliazioni monetizzano senza richiedere un marketplace. La newsletter costruisce il pubblico nel tempo.

### Rimosso: sistema lead generation
- Componenti rimossi: `LeadBox.js`, `SidebarLead.js`
- API rimossa: `/api/lead/route.js`
- Pagina `/professionisti` → redirect a homepage
- Pagina `/ordina` → redirect a homepage
- Stripe: non più in uso
- Tutti i CTA "Trova professionista" rimossi da 11 guide + homepage
- Checkbox GDPR, StickyBar, ExitPopup, SocialProof, BlurredRow: tutti rimossi

### Ripristinato: newsletter Brevo
- `BrevoForm.js` ripristinato con form funzionante in tutte le guide
- Subscribe box ripristinato nella pagina novità

### Homepage riscritta
- Un solo CTA "Scegli la tua guida" → scrolla alle guide
- "Inizia gratis" nella nav → punta alle guide (non più al pricing)
- Step 3 "Come funziona": "Resta aggiornato" (newsletter)
- Sezione pricing: spiega modello affiliazioni in trasparenza
- Via: sezione preview professionista, pricing cards, LeadBox
- Flusso lineare dall'alto verso il basso, zero rimbalzi

### Privacy policy e Termini riscritti
- **Privacy:** semplificata. Solo dati navigazione + email newsletter. Via tutto il lead generation (CAP, telefono, professionisti terzi)
- **Termini:** sezione "Trova professionista" sostituita con "Link di affiliazione" (trasparenza su commissioni). Via responsabilità su professionisti. Numerazione corretta.

---

### Guida 730: testi riscritti per chiarezza totale

**Cos'è** — riscritta da zero. Spiega il meccanismo tasse/rimborso: "il datore ti toglie le tasse ogni mese ma non sa delle tue spese, il 730 serve a riprenderti i soldi". Aggiunto glossario integrato: CU, IRPEF, detrazione, franchigia, precompilata, sostituto d'imposta, conguaglio.

**Chi deve farlo** — 4 casi con esempi concreti: "devi", "è praticamente obbligatorio", "non sei obbligato ma ti conviene", "non puoi". Aggiunta regola semplice alla fine.

**Novità 2026** — rimossa la ripetizione (75.000€ appariva due volte).

**Come si fa** — aggiunto passo 0 "Hai lo SPID? Parti da qui" con link alla guida. Dettagli su cosa controllare nella precompilata (cosa manca di solito). Passo "Decidi come farlo" confronta le 3 opzioni con pro e contro.

**Dove andare** — spiegato cos'è un CAF per chi non lo sa. Dettagli pratici su prenotazione e costi.

**Nuova sezione: Esempio pratico Maria** — Maria, 26 anni, impiegata, fa il 730 per la prima volta. Racconto narrativo completo dall'inizio alla fine. Recupera 1.093€. Morale: ha perso 4.000€ nei 4 anni in cui non l'ha fatto.

**Nuova sezione: Se sei in ritardo** — cosa fare dopo la scadenza. 730 integrativo (25 ottobre), Modello Redditi correttivo (30 novembre), dichiarazione tardiva (90 giorni), integrativa (5 anni), ravvedimento operoso.

**TOC ridotto a 8 voci** — da 16 a 8: In sintesi, Cos'è, Detrazioni, Come si fa, Documenti, Scadenze, Esempio pratico, FAQ.

### Componente Tip (tooltip)
- Nuovo componente `Tip.js`: hover su desktop, touch su mobile
- Fumetto scuro con spiegazione breve, sottolineatura puntinata
- Applicato a 11 termini nel 730: precompilata, sostituto d'imposta, CU, IRPEF, franchigia, detrazione, conguaglio, Modello Redditi, CAF, bonifico parlante, ravvedimento operoso
- Da estendere a tutte le guide

---

### Pagina Novità riscritta
- Via le notizie generiche (erano un blog misto)
- Ora: "Cosa cambia nel 2026" — solo cambiamenti normativi reali
- Organizzato per area: Fisco, Casa, Famiglia, Lavoro, Documenti, Partita IVA
- Ogni sezione collegata alla guida di riferimento
- Filtri per categoria rimessi (come prima)
- Badge "Importante" / "Attenzione" per cambiamenti rilevanti
- Fonti citate in fondo
- SEO: title e description ottimizzati per keyword "novità 2026"

---

### Sistema etichette e colori per categoria

5 categorie con colori distinti:
| Categoria | Colore | Guide |
|---|---|---|
| 💰 Fisco e soldi | Arancione (#E36414) | 730, ISEE, P.IVA |
| 🏠 Casa | Verde acqua (#2A9D8F) | Compro casa, Ristrutturare |
| 👨‍👩‍👧 Famiglia | Viola (#7C3AED) | Figlio, Mi sposo |
| 💼 Lavoro | Blu (#2563EB) | NASpI, Dimissioni, TFR |
| 🪪 Documenti | Teal scuro (#0F4C5C) | SPID |

Ogni guida ha un wrapper `<div className="cat-{nome}">` e un badge nell'hero.

Elementi che cambiano colore per categoria:
- Badge categoria nell'hero
- Sfondo hero (gradiente leggero)
- Titolo em (parola chiave)
- Pills hero
- Shimmer line
- Hstat top line
- TOC voce attiva + barra progresso
- Info boxes (tip, warn, mon): bordo + sfondo + titolo
- Step numbers
- Badge nelle tabelle
- Header tabelle (thead)
- Blobs decorativi
- Dark block accents + totale
- Calcolatori (header, slider, toggle, risultati)
- Sintesi cards
- Cross-link hover
- Related cards hover

**Stato:** colori funzionanti ma da rifinire. Alcuni calcolatori e dark block hanno ancora accenti hardcoded da verificare leggendo la struttura reale di ogni guida.

---

### Push su GitHub
- Token GitHub personale usato per push dal container
- Repo: `Kassius92/BuroFacile` (GitHub lo mostra come `BuroSemplice`)
- Tutti i push fatti con `git add` selettivo (mai `-A`)
- 10+ commit nella sessione

---

## Da fare — Sessione 9

### 1. Colori categorie: rifinitura
- Verificare ogni guida leggendo la struttura reale (file HTML originale + page.js)
- Fix calcolatori che hanno ancora colori hardcoded
- Fix dark block con accenti arancione fisso
- Verificare `.cv` vs `.cfr` in tutte le tabelle

### 2. Tip (tooltip): estendere alle altre 10 guide
- Leggere ogni guida e individuare parole tecniche
- Applicare Tip con spiegazioni brevi

### 3. Testi guide: migliorare come fatto per il 730
- Stesso trattamento: glossario, esempi concreti, linguaggio 14enne
- Priorità: ISEE → SPID → Partita IVA → resto

### 4. Pagina Notizie (nuova)
- Tipo TG della burocrazia — notizie settimanali
- Diversa da Novità (cambiamenti annuali normativi)
- Contenuto fresco → piace a Google

### 5. Donazioni
- Pagina o sezione "Offrici un caffè"
- PayPal o Buy Me a Coffee
- Posizionamento: footer o fine guida

### 6. Distribuzione (Mirko)
- Postare guide su gruppi Facebook
- Rispondere su forum/Reddit con link
- Video brevi TikTok/Instagram su detrazioni poco conosciute
- 30 minuti al giorno

---

## Regole (aggiornate)
1. DEVLOG = fonte di verità
2. Leggere HTML originale prima di modificare pagine Next.js — MAI inventare struttura
3. Audit CSS obbligatorio prima di chiudere pagina
4. Ogni scheda ha quiz personalizzato
5. tar.gz senza DEVLOG, con .gitignore
6. HTML originali restano come archivio
7. Nuove schede usano tutti i componenti condivisi
8. Title e meta description ottimizzati per keyword reali Google
9. Homepage mostra solo top 3 guide per volume di ricerca
10. Brand: ZeroBurocrazia — dominio zeroburocrazia.it — logo Z su teal
11. Modello business: Aranzulla (contenuti gratuiti + affiliazioni + newsletter)
12. Push GitHub: mai `git add -A`, solo file progetto specifici
13. Testi comprensibili a un 14enne — "come un amico che spiega"
14. Ogni modifica va fatta leggendo il sorgente reale, mai alla cieca
