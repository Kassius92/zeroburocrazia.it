'use client';
import { useState } from 'react';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        {q}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="faq-a">
        <div className="faq-a-inner" dangerouslySetInnerHTML={{ __html: a }} />
      </div>
    </div>
  );
}

export default function FAQ({ items = [] }) {
  return (
    <div className="faq">
      {items.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
    </div>
  );
}
