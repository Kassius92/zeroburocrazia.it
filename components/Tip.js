'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export default function Tip({ children, t }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState(null);
  const [mounted, setMounted] = useState(false);
  const wordRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  const calcPos = useCallback(() => {
    if (!wordRef.current) return;
    const r = wordRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const bubbleW = vw < 600 ? 200 : 240;
    let left = r.left + r.width / 2 - bubbleW / 2;
    left = Math.max(8, Math.min(left, vw - bubbleW - 8));
    const arrowLeft = r.left - left + r.width / 2;
    setPos({
      top: r.top + window.scrollY - 8,
      left,
      arrowLeft: Math.max(12, Math.min(arrowLeft, bubbleW - 12)),
    });
  }, []);

  useEffect(() => {
    if (!show) return;
    const close = (e) => {
      if (wordRef.current && !wordRef.current.contains(e.target)) setShow(false);
    };
    document.addEventListener('touchstart', close);
    window.addEventListener('scroll', () => setShow(false), { once: true });
    return () => document.removeEventListener('touchstart', close);
  }, [show]);

  const open = () => { calcPos(); setShow(true); };
  const close = () => setShow(false);
  const toggle = (e) => { e.stopPropagation(); if (!show) calcPos(); setShow(s => !s); };

  const bubble = show && pos && mounted ? createPortal(
    <span
      className="tip-bubble"
      style={{
        position: 'absolute',
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
    </span>,
    document.body
  ) : null;

  return (
    <>
      <span
        className="tip-word"
        ref={wordRef}
        onMouseEnter={open}
        onMouseLeave={close}
        onTouchStart={toggle}
      >
        {children}
      </span>
      {bubble}
    </>
  );
}
