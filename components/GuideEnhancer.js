'use client';
import { useEffect, useRef } from 'react';

export default function GuideEnhancer() {
  const barRef = useRef(null);

  useEffect(() => {
    /* ── PROGRESS BAR (all screens) ── */
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current && docHeight > 0) {
        barRef.current.style.width = Math.min(100, (scrollTop / docHeight) * 100) + '%';
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    /* ── COLLAPSIBLE CHAPTERS (mobile only) ── */
    if (window.innerWidth > 768) return () => window.removeEventListener('scroll', updateProgress);

    const mainEl = document.querySelector('.main');
    if (!mainEl) return () => window.removeEventListener('scroll', updateProgress);

    const sections = mainEl.querySelectorAll('.sec');
    let chapterNum = 0;

    sections.forEach((sec) => {
      const secTag = sec.querySelector('.sec-tag');
      const h2 = sec.querySelector('h2');
      if (!h2) return;

      chapterNum++;
      const isSintesi = sec.id === 'sintesi';
      const num = chapterNum;

      /* Create collapsible header */
      const header = document.createElement('div');
      header.className = 'ge-ch-header';
      header.innerHTML =
        '<div class="ge-ch-num">' + num + '</div>' +
        '<div class="ge-ch-info">' +
          '<div class="ge-ch-title">' + h2.textContent + '</div>' +
          (secTag ? '<div class="ge-ch-sub">' + secTag.textContent + '</div>' : '') +
        '</div>' +
        '<span class="ge-ch-arrow' + (num <= 1 ? ' open' : '') + '">\u203A</span>';

      /* Wrap existing content in collapsible body */
      const body = document.createElement('div');
      body.className = 'ge-ch-body' + (num <= 1 ? ' open' : '');

      /* Move all children into body */
      while (sec.firstChild) {
        body.appendChild(sec.firstChild);
      }

      /* Hide original sec-tag and h2 inside the body */
      const origTag = body.querySelector('.sec-tag');
      const origH2 = body.querySelector('h2');
      if (origTag) origTag.style.display = 'none';
      if (origH2) origH2.style.display = 'none';

      /* Assemble */
      sec.appendChild(header);
      sec.appendChild(body);
      sec.classList.add('ge-enhanced');

      /* Toggle handler */
      header.addEventListener('click', () => {
        const isOpen = body.classList.contains('open');
        body.classList.toggle('open');
        header.querySelector('.ge-ch-arrow').classList.toggle('open');

        /* Scroll into view when opening */
        if (!isOpen) {
          setTimeout(() => {
            header.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        }
      });
    });

    /* ── TAKEAWAY BOXES (find .ib.tip that is last child in a sec, style as takeaway) ── */
    /* This is handled purely via CSS — no DOM changes needed */

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="ge-progress-wrap">
      <div className="ge-progress-bar" ref={barRef} />
    </div>
  );
}
