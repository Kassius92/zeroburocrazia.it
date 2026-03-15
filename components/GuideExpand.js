'use client';
import { useState } from 'react';

export default function GuideExpand({ visual, detail, label }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {visual}
      {detail && (
        <>
          <button
            className={'g-expand' + (open ? ' g-expand--on' : '')}
            onClick={() => setOpen(!open)}
          >
            <span>{open ? 'Chiudi' : (label || 'Leggi di pi\u00f9')}</span>
            <span className="g-expand-arrow">{open ? '\u2191' : '\u2193'}</span>
          </button>
          {open && <div className="g-detail">{detail}</div>}
        </>
      )}
    </>
  );
}
