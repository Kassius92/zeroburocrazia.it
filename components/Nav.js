'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import NavSearch from './NavSearch';

export default function Nav({ variant = 'scheda' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.body.classList.toggle('mega-open', menuOpen);
    return () => { document.body.style.overflow = ''; document.body.classList.remove('mega-open'); };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav${scrolled ? ' s' : ''}${(variant === 'home' || variant === 'novita') ? ' nav-home' : ''}`}>
        <div className="nav-i">

          {variant === 'home' && (
            <>
              {/* Homepage: hamburger LEFT, logo, nav links CENTER, search+cta RIGHT */}
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="hamburger-lines">
                  <span /><span /><span />
                </div>
              </button>
              <Link href="/" className="logo"><img src="/logo-z.webp" alt="ZeroBurocrazia" className="logo-mark" width="36" height="36" /><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">Burocrazia? Ci pensiamo noi.</small></div></Link>
              <div className="nav-center-links">
                <Link href="/guide" className="nav-pill">Guide</Link>
                <Link href="/novita" className="nav-pill">Novit&agrave;<span className="nav-dot" /></Link>
              </div>
              <div className="nav-links">
                <NavSearch />
                <a href="https://www.facebook.com/profile.php?id=61584999492615" target="_blank" rel="noopener noreferrer" className="nav-fb-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Seguici</a>
              </div>
            </>
          )}

          {variant === 'scheda' && (
            <>
              {/* Scheda: hamburger LEFT, logo, "Tutte le guide" RIGHT */}
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="hamburger-lines">
                  <span /><span /><span />
                </div>
              </button>
              <Link href="/" className="logo"><img src="/logo-z.webp" alt="ZeroBurocrazia" className="logo-mark" width="36" height="36" /><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">Burocrazia? Ci pensiamo noi.</small></div></Link>
              <Link href="/" className="back" style={{ marginLeft: 'auto' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                Tutte le guide
              </Link>
            </>
          )}

          {variant === 'novita' && (
            <>
              {/* Novita: hamburger LEFT, logo, then Home/Chi siamo/Contatti RIGHT */}
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="hamburger-lines">
                  <span /><span /><span />
                </div>
              </button>
              <Link href="/" className="logo"><img src="/logo-z.webp" alt="ZeroBurocrazia" className="logo-mark" width="36" height="36" /><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">Burocrazia? Ci pensiamo noi.</small></div></Link>
              <div className="nav-links nav-links-novita">
                <Link href="/">Home</Link>
                <Link href="/chi-siamo">Chi siamo</Link>
                <Link href="/contatti">Contatti</Link>
              </div>
            </>
          )}

        </div>
      </nav>
      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} variant={variant} />
    </>
  );
}
