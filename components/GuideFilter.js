'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { categoriesGuide, allGuides } from './categoriesData';

export default function GuideFilter() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat') || 'tutte';
  const [filter, setFilter] = useState(initialCat);
  const [q, setQ] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setFilter(cat);
  }, [searchParams]);

  const catNames = ['tutte', ...categoriesGuide.filter(c => c.guides.length > 0).map(c => c.slug)];
  const catLabels = { tutte: `Tutte (${allGuides.length})` };
  categoriesGuide.forEach(c => { if (c.guides.length > 0) catLabels[c.slug] = c.title; });

  let displayed = filter === 'tutte'
    ? allGuides
    : allGuides.filter(g => g.catSlug === filter);

  if (q.length > 1) {
    const ql = q.toLowerCase();
    displayed = allGuides.filter(g =>
      g.name.toLowerCase().includes(ql) ||
      g.cat.toLowerCase().includes(ql) ||
      g.desc.toLowerCase().includes(ql)
    );
  }

  return (
    <>
      {/* Search input */}
      <div className={`gf-search-box${q ? ' gf-search-active' : ''}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          type="text"
          placeholder="730, SPID, mutuo, bonus..."
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        {q && (
          <button className="gf-search-clear" onClick={() => setQ('')} aria-label="Cancella">&times;</button>
        )}
      </div>

      {/* Category filters — hidden when searching */}
      {!q && (
        <div className="gf-filters">
          {catNames.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`gf-btn${filter === c ? ' gf-btn-active' : ''}`}
            >
              {catLabels[c]}
            </button>
          ))}
        </div>
      )}

      {/* Results count when searching */}
      {q && (
        <div className="gf-results-count">
          {displayed.length} risultat{displayed.length === 1 ? 'o' : 'i'}
          {q.length > 1 && <> per &ldquo;{q}&rdquo;</>}
        </div>
      )}

      {/* Grid / list */}
      <div className="gf-grid">
        {displayed.map((g, i) => (
          <Link key={i} href={g.href} className="gf-card">
            <div className="gf-card-top">
              <span className="gf-emoji">{g.emoji}</span>
              <span className="gf-tag">{g.tag}</span>
            </div>
            <div className="gf-name">{g.name}</div>
            <div className="gf-desc">{g.desc}</div>
            <div className="gf-cat" style={{ color: g.catColor }}>{g.cat}</div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {q && displayed.length === 0 && (
        <div className="gf-empty">
          <span className="gf-empty-emoji">{'\u{1F937}'}</span>
          <div className="gf-empty-title">Nessun risultato per &ldquo;{q}&rdquo;</div>
          <div className="gf-empty-sub">Prova con un altro termine</div>
        </div>
      )}
    </>
  );
}
