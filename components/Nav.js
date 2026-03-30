'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-left">
            <Link href="/" className="nav-logo">
              <img src="/logo-z.webp" alt="ZeroBurocrazia" width="32" height="32" />
              ZeroBurocrazia
            </Link>
          </div>

          <div className="nav-center">
            <Link href="/guide">Guide</Link>
            <Link href="/novita">Novit&agrave;</Link>
          </div>

          <div className="nav-right">
            <button className="nav-search" aria-label="Cerca">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </button>
            <Link href="/guide" className="nav-cta">Esplora le guide</Link>
            <button
              className="hamburger"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="hamburger-lines"><span /><span /><span /></div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="nav-mobile-menu">
            <Link href="/guide" onClick={() => setMenuOpen(false)}>Guide</Link>
            <Link href="/novita" onClick={() => setMenuOpen(false)}>Novit&agrave;</Link>
          </div>
        )}
      </nav>

      {scrolled && (
        <button
          className="backtop"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Torna in cima"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </>
  );
}
