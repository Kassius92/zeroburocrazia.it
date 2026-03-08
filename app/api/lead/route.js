import { NextResponse } from 'next/server';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzwgeKBMEUseNbkEGq5c8HW_EBc72h3Ls3FBQ6v6N1NzIrgIuiKrYfYv5xKcXwvYWlAQw/exec';

export async function POST(request) {
  try {
    const { guida, cap, telefono, email } = await request.json();

    if (!cap || !telefono) {
      return NextResponse.json({ error: 'CAP e telefono sono obbligatori' }, { status: 400 });
    }

    // Log to Google Sheet (fire-and-forget)
    const params = new URLSearchParams({
      tipo: 'lead',
      guida: guida || 'non specificata',
      cap,
      telefono,
      email: email || '',
      data: new Date().toISOString(),
    });

    fetch(`${SHEET_URL}?${params.toString()}`).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 });
  }
}
