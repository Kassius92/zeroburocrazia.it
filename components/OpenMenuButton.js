'use client';

export default function OpenMenuButton() {
  function openMenu() {
    const btn = document.querySelector('.hamburger');
    if (btn && !btn.classList.contains('open')) btn.click();
  }

  return (
    <button className="open-all-btn" onClick={openMenu}>
      Tutte le guide &rarr;
    </button>
  );
}
