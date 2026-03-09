# DEVLOG Update — Sessione 9

**Data:** 9 marzo 2026
**Stato:** 18 route. 11 guide attive. 8 guide riscritte con glossario, Tip tooltip, esempio pratico e linguaggio da 14enne. Deploy attivo su zeroburocrazia.it.

---

## Sessione 9 (9 marzo 2026)

### RISCRITTURA TESTI GUIDE (8 su 11 completate)

Obiettivo: portare tutte le guide al livello del 730 (riscritto nella sessione 8). Per ogni guida:
1. **Glossario integrato** con le parole chiave spiegate semplice
2. **Componente Tip (tooltip)** applicato a tutti i termini tecnici
3. **Esempio pratico narrativo** con dark-block confronto prima/dopo e numeri reali
4. **TOC ridotto a 8 voci** (da 9-11 che avevano prima)
5. **FAQ aggiunte** (2-3 nuove per guida)
6. **Linguaggio da 14enne** — "come un amico che spiega"

### Guide riscritte in questa sessione

| # | Guida | Glossario | Tip | Esempio pratico | Commit |
|---|-------|-----------|-----|-----------------|--------|
| 1 | **ISEE** | 6 termini (DSU, nucleo familiare, patrimonio mobiliare, giacenza media, patrimonio immobiliare, ISEE corrente) | ~15 tooltip | Laura, 32 anni, recupera 4.572€/anno | `482bfc5` |
| 2 | **SPID** | 5 termini (SPID, provider, CIE, riconoscimento, livello 2) | ~10 tooltip (CIE ×3, NFC ×3) | Marco, 28 anni, fa lo SPID in 12 min e sbriga 3 pratiche in 49 min | `7b94873` |
| 3 | **P.IVA** | 6 termini (forfettario, coefficiente redditività, codice ATECO, gestione separata, fattura elettronica, imposta sostitutiva) | ~20 tooltip | Giulia, 27 anni, da 16.800€ dipendente a 36.400€ netti con P.IVA | `0cc06df` |
| 4 | **Compro casa** | 7 termini (proposta, compromesso, rogito, valore catastale, pre-delibera, LTV, APE) | ~15 tooltip | Luca e Sara, coppia Torino, comprano casa 180k€ con breakdown costi completo | `467d5a6` |
| 5 | **Figlio** | 5 termini (congedo maternità, congedo parentale, assegno unico, bonus nuovi nati, bonus nido) | ~8 tooltip | Chiara e Andrea, Verona, ricevono ~15.000€ il primo anno con timeline mese per mese | `c1038ef` |
| 6 | **Ristrutturare** | 6 termini (detrazione IRPEF, bonifico parlante, CILA, SCIA, ENEA, manutenzione straordinaria) | ~15 tooltip | Marco e Valentina, Napoli, recuperano 23.750€ su 39.500€ di lavori | `50afa69` |
| 7 | **NASpI** | 6 termini (NASpI, disoccupazione involontaria, décalage, NASpI-COM, contribuzione figurativa, NASpI anticipata) | ~12 tooltip | Davide, 34 anni, Milano, prende ~17.500€ netti in 21 mesi + bonus ISEE corrente | `a101e89` |
| 8 | **Dimissioni** | 6 termini (procedura telematica, data decorrenza, preavviso, TFR, revoca, giusta causa) | ~12 tooltip | Elena, 29 anni, Firenze, si dimette correttamente e riceve 7.200€ | `816f13a` |

### CSS aggiunto

Due nuovi blocchi di stile in `globals.css`:

- **`.glossary` / `.gl-item`** — Blocchi con bordo sinistro colorato per categoria, sfondo beige, testo 14px. Colori per tutte le 5 categorie (fisco, casa, famiglia, lavoro, documenti).
- **`.dark-block` / `.db-row` / `.db-total`** — Blocco scuro per confronti prima/dopo negli esempi pratici. Righe con label, valore vecchio (barrato), freccia, valore nuovo (verde). Riga totale evidenziata. Responsive.

### Struttura tipo di ogni guida riscritta

```
Hero → TOC → Percorso → Sintesi + Quiz
→ Cos'è (spiegato semplice) + Glossario
→ Sezione principale (come si fa / bonus / requisiti)
→ Tabelle e confronti
→ Documenti (checklist)
→ Errori (breve-hide)
→ Esempio pratico con dark-block (breve-hide)
→ FAQ (breve-hide)
→ Guide correlate
→ Sidebar → BrevoForm → Footer
```

---

## Da fare — Sessione 10

### 1. Riscrittura testi guide rimanenti
- **TFR** — glossario, Tip, esempio pratico
- **Mi sposo** — glossario, Tip, esempio pratico
- (Il 730 è già stato riscritto nella sessione 8)

### 2. Colori categorie: rifinitura
- Verificare ogni guida leggendo la struttura reale (file HTML originale + page.js)
- Fix calcolatori che hanno ancora colori hardcoded
- Fix dark block con accenti arancione fisso

### 3. Tip (tooltip): verifica copertura
- Verificare che tutti i glossari abbiano i Tip corretti
- Eventualmente aggiungere Tip al 730 (già riscritto sessione 8 ma senza Tip)

### 4. Pagina Notizie (nuova)
- Tipo TG della burocrazia — notizie settimanali
- Diversa da Novità (cambiamenti annuali normativi)
- Contenuto fresco → piace a Google

### 5. Donazioni
- Pagina o sezione "Offrici un caffè"
- PayPal o Buy Me a Coffee

### 6. Distribuzione (Mirko)
- Postare guide su gruppi Facebook
- Rispondere su forum/Reddit con link
- Video brevi TikTok/Instagram

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
12. **Push GitHub: SUBITO dopo ogni modifica, PRIMA di qualsiasi altra operazione. Mai git checkout o git init senza aver pushato.**
13. Testi comprensibili a un 14enne — "come un amico che spiega"
14. Ogni modifica va fatta leggendo il sorgente reale, mai alla cieca
15. **Ogni guida deve avere: glossario, Tip tooltip, esempio pratico con dark-block, TOC a 8 voci, FAQ complete**
