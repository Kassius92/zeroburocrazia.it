'use client';
import { useState } from 'react';

export default function Tip({ children, t }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="tip-wrap"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(!show)}
      style={{ position: 'relative', borderBottom: '1.5px dashed var(--green)', cursor: 'help' }}
    >
      {children}
      {show && (
        <span style={{
          position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--ink)', color: '#fff', padding: '10px 14px', borderRadius: '10px',
          fontSize: '13px', lineHeight: '1.5', maxWidth: '280px', width: 'max-content',
          zIndex: 50, boxShadow: '0 4px 20px rgba(0,0,0,.2)', pointerEvents: 'none',
        }}>
          {t}
        </span>
      )}
    </span>
  );
}
