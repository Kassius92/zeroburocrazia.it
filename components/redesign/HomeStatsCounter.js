'use client';
import { useEffect, useRef, useState } from 'react';

function Counter({ target, symbol = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (target === 0) { setVal(0); return; }
          let cur = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(timer); }
            setVal(cur);
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{symbol}</span>;
}

export default function HomeStatsCounter() {
  return (
    <section className="hp-stats rv-scale">
      <div className="hp-stats-inner">
        <div className="hp-stat">
          <div className="hp-stat-num"><Counter target={33} /></div>
          <div className="hp-stat-label">Guide complete e gratuite</div>
        </div>
        <div className="hp-stat">
          <div className="hp-stat-num"><Counter target={54} /></div>
          <div className="hp-stat-label">Pagine aggiornate al 2026</div>
        </div>
        <div className="hp-stat">
          <div className="hp-stat-num"><Counter target={0} symbol={'\u20AC'} /></div>
          <div className="hp-stat-label">Per sempre. Nessun abbonamento.</div>
        </div>
      </div>
    </section>
  );
}
