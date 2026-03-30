'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MegaMenu from '@/components/MegaMenu';

/**
 * NavV8 — navigazione V8 Buffer-style layout
 * Hamburger + Logo Z + center links + search icon + CTA pill
 */
export default function NavV8() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.body.classList.toggle('mega-open', menuOpen);
    return () => { document.body.style.overflow = ''; document.body.classList.remove('mega-open'); };
  }, [menuOpen]);

  return (
    <>
      <nav className={`v8-nav${scrolled ? ' v8-nav-s' : ''}`}>
        <div className="v8-nav-inner">
          {/* Left: hamburger + logo */}
          <div className="v8-nav-left">
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="hamburger-lines"><span /><span /><span /></div>
            </button>
            <Link href="/" className="v8-nav-logo">
              <img src="/logo-z.webp" alt="ZeroBurocrazia" className="v8-nav-logo-img" width="32" height="32" />
              ZeroBurocrazia
            </Link>
          </div>

          {/* Center links (desktop) */}
          <div className="v8-nav-center">
            <Link href="/guide">Guide</Link>
            <Link href="#categorie">Categorie</Link>
            <Link href="#come">Come funziona</Link>
            <Link href="/novita">Novit&agrave;</Link>
          </div>

          {/* Right: search + CTA */}
          <div className="v8-nav-right">
            <button className="v8-nav-search" aria-label="Cerca">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </button>
            <Link href="#guide" className="v8-nav-cta">Esplora le guide</Link>
          </div>
        </div>
      </nav>

      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} variant="home" />

      {/* Back to top */}
      {scrolled && (
        <button
          className="v8-backtop"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Torna in cima"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </>
  );
}
