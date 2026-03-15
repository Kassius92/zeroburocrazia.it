'use client';
import { useState } from 'react';

export default function WiseSection({ visual, detail, label }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {visual}
      {detail && (
        <>
          <button className={`ws-more${open ? ' ws-more-on' : ''}`} onClick={() => setOpen(!open)}>
            {open ? 'Chiudi' : (label || 'Leggi di più')}
            <span className="ws-more-arrow">{open ? '↑' : '↓'}</span>
          </button>
          {open && <div className="ws-detail">{detail}</div>}
        </>
      )}
    </>
  );
}
