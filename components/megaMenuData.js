export const categories = [
  {
    title: 'Fisco e soldi', slug: 'fisco', color: '#E8724A',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6M9 14l2 2 4-4"/></svg>',
    subs: [
      { title: 'Dichiarazione redditi', links: [
        { name: '730', href: '/730' },
        { name: 'Spese mediche detraibili', href: '/spese-mediche' },
      ]},
      { title: 'ISEE e bonus', links: [
        { name: 'ISEE', href: '/isee' },
        { name: 'Bonus bollette luce e gas', href: '/bonus-bollette' },
        { name: 'Assegno di inclusione (ADI)', href: '/assegno-inclusione' },
      ]},
      { title: 'Tasse e imposte', links: [
        { name: 'Partita IVA', href: '/piva' },
        { name: 'Regime forfettario', href: '/regime-forfettario' },
        { name: 'Fattura elettronica', href: '/fattura-elettronica' },
        { name: 'Cedolare secca', href: '/cedolare-secca' },
        { name: 'IMU', href: '/imu' },
      ]},
    ]
  },
  {
    title: 'Casa', slug: 'casa', color: '#2D8A6E',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    subs: [
      { title: 'Comprare e vendere', links: [
        { name: 'Compro casa', href: '/compro-casa' },
        { name: 'Mutuo', href: '/mutuo' },
      ]},
      { title: 'Lavori e bonus', links: [
        { name: 'Ristrutturare', href: '/ristrutturare' },
        { name: 'Bonus mobili', href: '/bonus-mobili' },
      ]},
      { title: 'Vivere in casa', links: [
        { name: 'Cambio residenza', href: '/cambio-residenza' },
      ]},
    ]
  },
  {
    title: 'Famiglia', slug: 'famiglia', color: '#8B6CC1',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    subs: [
      { title: 'Figli', links: [
        { name: 'Aspetto un figlio', href: '/figlio' },
        { name: 'Assegno unico', href: '/assegno-unico' },
        { name: 'Congedo parentale', href: '/congedo-parentale' },
        { name: 'Bonus nido', href: '/bonus-nido' },
      ]},
      { title: 'Coppia', links: [
        { name: 'Mi sposo', href: '/mi-sposo' },
      ]},
      { title: 'Eredit\u00e0', links: [
        { name: 'Successione', href: '/successione' },
      ]},
    ]
  },
  {
    title: 'Documenti', slug: 'documenti', color: '#5B7EC5',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
    subs: [
      { title: 'Identit\u00e0 digitale', links: [
        { name: 'SPID', href: '/spid' },
        { name: 'CIE', href: '/cie' },
        { name: 'PEC', href: '/pec' },
      ]},
      { title: 'Documenti personali', links: [
        { name: 'Passaporto', href: '/passaporto' },
        { name: 'Codice fiscale', href: '/codice-fiscale' },
      ]},
    ]
  },
  {
    title: 'Lavoro', slug: 'lavoro', color: '#C49A2A',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>',
    subs: [
      { title: 'Iniziare e cambiare', links: [
        { name: 'Dimissioni', href: '/dimissioni' },
        { name: 'Busta paga', href: '/busta-paga' },
      ]},
      { title: 'Perdere il lavoro', links: [
        { name: 'NASpI', href: '/naspi' },
        { name: 'TFR', href: '/tfr' },
      ]},
    ]
  },
  {
    title: 'Salute', slug: 'salute', color: '#2D8A6E',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    subs: [
      { title: 'Servizio sanitario', links: [
        { name: 'Esenzione ticket', href: '/esenzione-ticket' },
        { name: 'Bonus psicologo', href: '/bonus-psicologo' },
      ]},
      { title: 'Disabilit\u00e0 e assistenza', links: [
        { name: 'Legge 104', href: '/legge-104' },
      ]},
    ]
  },
];
