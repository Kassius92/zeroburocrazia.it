'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { categories } from './megaMenuData';
import { searchIndex } from './searchIndex';

export default function MegaMenu({ isOpen, onClose, variant = 'scheda' }) {
  const [search, setSearch] = useState('');
  const [openSubs, setOpenSubs] = useState({});
  const menuRef = useRef(null);
  const navHeight = 64;

  useEffect(() => {
    if (!isOpen) { setSearch(''); setOpenSubs({}); }
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const toggleSub = (key) => {
    setOpenSubs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const q = search.toLowerCase().trim();

  const keywordResults = q.length >= 2 ? searchIndex.filter(entry =>
    entry.keywords.some(kw => kw.includes(q) || q.includes(kw))
  ) : [];

  const seen = new Set();
  const uniqueResults = keywordResults.filter(r => {
    if (seen.has(r.href)) return false;
    seen.add(r.href);
    return true;
  });

  const filtered = categories.map(cat => ({
    ...cat,
    subs: cat.subs.map(sub => ({
      ...sub,
      links: sub.links.filter(l => !q || l.name.toLowerCase().includes(q)),
    })).filter(sub => sub.links.length > 0),
  })).filter(cat => cat.subs.length > 0);

  const isSearching = q.length > 0;
  const hasKeywordResults = uniqueResults.length > 0;
  const hasGridResults = filtered.some(c => c.subs.some(s => s.links.length > 0));

  return (
    <>
      <div className={`mega-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`mega-menu${isOpen ? ' open' : ''}`} ref={menuRef} style={{ top: navHeight, maxHeight: `calc(100vh - ${navHeight}px)` }}>
        <div className="mega-inner">
          <div className="mega-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              type="text"
              placeholder="Cerca argomento\u2026 (es. franchigia, congedo, mutuo)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {isSearching && hasKeywordResults && (
            <div className="mega-results">
              <div className="mega-results-label">
                {uniqueResults.length} risultat{uniqueResults.length === 1 ? 'o' : 'i'} per &ldquo;{search}&rdquo;
              </div>
              <div className="mega-results-list">
                {uniqueResults.slice(0, 8).map((r, i) => (
                  <Link key={i} href={r.href} className="mega-result" onClick={onClose}>
                    <div className="mega-result-guide">{r.guide}</div>
                    <div className="mega-result-desc">{r.desc}</div>
                    <svg className="mega-result-ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {isSearching && !hasKeywordResults && !hasGridResults && (
            <div className="mega-results">
              <div className="mega-results-label">Nessun risultato per &ldquo;{search}&rdquo;</div>
              <p style={{ color: 'var(--v8-soft)', fontSize: 14, padding: '0 0 12px' }}>
                Prova con un&apos;altra parola, oppure <Link href="/contatti" onClick={onClose} style={{ color: 'var(--v8-green)', textDecoration: 'underline' }}>suggerisci una guida</Link>.
              </p>
            </div>
          )}

          {(!isSearching || (!hasKeywordResults && hasGridResults)) && (
            <div className="mega-grid">
              {filtered.map((cat, ci) => (
                <div key={ci}>
                  <div className="mega-cat" style={{ borderColor: cat.color, color: cat.color }}>
                    <span className="mega-cat-icon" style={{ color: cat.color }} dangerouslySetInnerHTML={{ __html: cat.icon }} />
                    {cat.title}
                  </div>
                  {cat.subs.map((sub, si) => {
                    const key = `${ci}-${si}`;
                    const isSubOpen = isSearching || openSubs[key];
                    return (
                      <div key={si} className={`mega-sub${isSubOpen ? ' open' : ''}`}>
                        <div className="mega-sub-title" onClick={() => toggleSub(key)}>
                          {sub.title}
                        </div>
                        <div className="mega-sub-links">
                          {sub.links.map((link, li) => (
                            <Link key={li} href={link.href} className="mega-link" onClick={onClose}>
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          <div className="mega-foot">
            <div className="mega-foot-left">
              <Link href="/contatti" className="mega-btn mega-btn-primary" onClick={onClose}>Suggerisci una guida</Link>
            </div>
            <div className="mega-foot-right">
              <Link href="/novita" className="mega-btn mega-btn-ghost" onClick={onClose}>Novit&agrave; 2026</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
