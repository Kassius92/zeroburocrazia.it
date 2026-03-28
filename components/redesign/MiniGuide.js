'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';

/**
 * MiniGuide — layout editoriale per sotto-pagine
 * Props:
 *   category: fisco|casa|famiglia|salute|documenti|lavoro
 *   categoryLabel: es. "Fisco"
 *   parentHref: es. "/730"
 *   parentLabel: es. "Faccio il 730"
 *   title, titleEm, subtitle
 *   readTime: es. "4 min"
 *   updated: es. "marzo 2026"
 *   children
 */
export default function MiniGuide({
  category = 'documenti',
  categoryLabel = 'Guida',
  parentHref = '/',
  parentLabel = 'Guida principale',
  title,
  titleEm,
  subtitle,
  readTime = '5 min',
  updated = 'marzo 2026',
  children,
}) {
  useEffect(() => {
    // Animazioni scroll alternate
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('v');
          else e.target.classList.remove('v');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.rl,.rr,.ru').forEach(el => obs.observe(el));

    // FAQ accordion
    document.querySelectorAll('.mg-faq-item').forEach(item => {
      item.querySelector('.mg-faq-q')?.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.mg-faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });

    // Progress bar
    const prog = document.createElement('div');
    prog.className = 'v8-prog';
    document.body.prepend(prog);
    const onScroll = () => {
      prog.style.width = Math.min(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100
      ) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll); prog.remove(); };
  }, []);

  return (
    <div className="mg">
      <NavV8 />

      {/* Breadcrumb */}
      <nav className="mg-crumb">
        <Link href="/">Home</Link>
        <span className="mg-crumb-sep">›</span>
        <Link href={parentHref}>{parentLabel}</Link>
        <span className="mg-crumb-sep">›</span>
        <span className="mg-crumb-cur">{title}{titleEm ? ` ${titleEm}` : ''}</span>
      </nav>

      {/* Hero */}
      <header className="mg-hero">
        <div className={`mg-hero-tag ${category}`}>{categoryLabel}</div>
        <h1>{title}{titleEm && <> <em>{titleEm}</em></>}</h1>
        {subtitle && <p className="mg-hero-sub">{subtitle}</p>}
        <div className="mg-hero-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {readTime} di lettura
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Aggiornato {updated}
          </span>
        </div>
      </header>

      {/* Body */}
      <div className="mg-body">
        {children}

        {/* Back link */}
        <Link href={parentHref} className="mg-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Torna a: {parentLabel}
        </Link>
      </div>

      <FooterV8 />
    </div>
  );
}

/**
 * MgSection — sezione editoriale con label, titolo, contenuto
 * side: 'left'|'right'|'up' (per animazione)
 */
export function MgSection({ label, title, titleEm, side = 'up', children }) {
  const cls = side === 'left' ? 'rl' : side === 'right' ? 'rr' : 'ru';
  return (
    <section className={`mg-section ${cls}`}>
      {label && <div className="mg-section-label">{label}</div>}
      {title && <h2>{title}{titleEm && <> <em>{titleEm}</em></>}</h2>}
      {children}
    </section>
  );
}

/** MgPull — pull quote verde o warn */
export function MgPull({ warn = false, children }) {
  return <div className={`mg-pull${warn ? ' warn' : ''}`}>{children}</div>;
}

/** MgTable — tabella comparativa */
export function MgTable({ headers, rows }) {
  return (
    <table className="mg-table">
      {headers && <thead><tr>{headers.map((h,i) => <th key={i}>{h}</th>)}</tr></thead>}
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>{row.map((cell,j) => <td key={j} dangerouslySetInnerHTML={{__html: cell}} />)}</tr>
        ))}
      </tbody>
    </table>
  );
}

/** MgFaq — FAQ accordion */
export function MgFaq({ items }) {
  return (
    <div className="mg-faq">
      {items.map((item, i) => (
        <div key={i} className="mg-faq-item">
          <button className="mg-faq-q">
            <span>{item.q}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div className="mg-faq-a"><p dangerouslySetInnerHTML={{__html: item.a}} /></div>
        </div>
      ))}
    </div>
  );
}
