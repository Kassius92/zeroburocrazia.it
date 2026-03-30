import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <img src="/logo-z.webp" alt="" width="32" height="32" />
            ZeroBurocrazia
          </div>
          <p className="footer-desc">La burocrazia italiana spiegata in italiano vero. Gratis, aggiornato, senza paroloni.</p>
        </div>
        <div className="footer-col">
          <h5>Guide popolari</h5>
          <Link href="/730">Dichiarazione 730</Link>
          <Link href="/isee">ISEE 2026</Link>
          <Link href="/spid">SPID</Link>
          <Link href="/naspi">NASpI</Link>
          <Link href="/piva">Partita IVA</Link>
          <Link href="/legge-104">Legge 104</Link>
        </div>
        <div className="footer-col">
          <h5>Categorie</h5>
          <Link href="/guide">Fisco</Link>
          <Link href="/guide">Documenti</Link>
          <Link href="/guide">Lavoro</Link>
          <Link href="/guide">Famiglia</Link>
        </div>
        <div className="footer-col">
          <h5>Info</h5>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/contatti">Contatti</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/termini">Termini</Link>
        </div>
      </div>
      <div className="footer-btm">
        <span>&copy; 2026 ZeroBurocrazia.it &mdash; Tutti i diritti riservati</span>
        <div className="footer-btm-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/termini">Termini</Link>
        </div>
      </div>
    </footer>
  );
}
