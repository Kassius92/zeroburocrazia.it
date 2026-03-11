import Link from 'next/link';

export default function Footer({ variant = 'scheda' }) {
  if (variant === 'home') {
    return (
      <footer style={{ background: '#13151a', borderTop: '1px solid rgba(255,255,255,.05)', padding: '28px 24px', textAlign: 'center' }}>
        <div style={{ marginBottom: 10 }}>
          <Link href="/novita" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', margin: '0 10px', fontSize: 13 }}>Notizie</Link>
          <Link href="/chi-siamo" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', margin: '0 10px', fontSize: 13 }}>Chi siamo</Link>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', margin: '0 10px', fontSize: 13 }}>Privacy</Link>
          <Link href="/termini" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', margin: '0 10px', fontSize: 13 }}>Termini</Link>
          <Link href="/contatti" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', margin: '0 10px', fontSize: 13 }}>Contatti</Link>
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,.25)' }}>&copy; 2026 ZeroBurocrazia &mdash; La burocrazia italiana, finalmente semplice.</div>
      </footer>
    );
  }

  return (
    <footer>
      <div className="fi">
        <Link href="/" className="fbrand" style={{ textDecoration: 'none' }}>
          Zero<span>Burocrazia</span>
        </Link>
        <div className="flinks">
          <Link href="/tg">Notizie</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/termini">Termini</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
        {variant === 'utility' && (
          <div className="fcopy">© 2026 ZeroBurocrazia — Le informazioni sul sito sono indicative e non sostituiscono la consulenza professionale.</div>
        )}
      </div>
    </footer>
  );
}
