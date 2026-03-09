'use client';
import { useState, useRef, useCallback, useEffect } from 'react';

export default function Tip({ children, t }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState(null);
  const wordRef = useRef(null);
  const wrapRef = useRef(null);

  const calcPos = useCallback(() => {
    if (!wordRef.current) return;
    const r = wordRef.current.getBoundingClientRect();
    const vw = typeof window !== 'undefined' ? window.innerWidth : 360;
    const bubbleW = vw < 600 ? 200 : 240;
    let left = r.left + r.width / 2 - bubbleW / 2;
    left = Math.max(8, Math.min(left, vw - bubbleW - 8));
    const arrowLeft = r.left - left + r.width / 2;
    setPos({ top: r.top - 8, left, arrowLeft: Math.max(12, Math.min(arrowLeft, bubbleW - 12)) });
  }, []);

  // Close on outside touch (mobile)
  useEffect(() => {
    if (!show) return;
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setShow(false);
    };
    document.addEventListener('touchstart', handler);
    return () => document.removeEventListener('touchstart', handler);
  }, [show]);

  const open = () => { calcPos(); setShow(true); };
  const close = () => setShow(false);
  const toggle = (e) => { e.stopPropagation(); if (!show) calcPos(); setShow(s => !s); };

  return (
    <span className="tip-wrap" ref={wrapRef}>
      <span
        className="tip-word"
        ref={wordRef}
        onMouseEnter={open}
        onMouseLeave={close}
        onTouchStart={toggle}
      >
        {children}
      </span>
      {show && pos && (
        <span
          className="tip-bubble"
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            transform: 'translateY(-100%)',
          }}
        >
          {t}
          <span style={{
            position: 'absolute',
            top: '100%',
            left: pos.arrowLeft,
            transform: 'translateX(-50%)',
            border: '5px solid transparent',
            borderTopColor: '#1A1A2E',
          }} />
        </span>
      )}
    </span>
  );
}
