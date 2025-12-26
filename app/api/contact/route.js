import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer'; // in cima al file

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('ENV DEBUG:', {
  url: supabaseUrl ? 'OK' : 'MISSING',
  key: serviceRoleKey ? 'OK' : 'MISSING',
});

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // 1. Validazione
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Compila tutti i campi obbligatori.' },
        { status: 400 }
      );
    }

    // 2. Salvataggio su Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { ok: false, error: 'Errore nel salvataggio del messaggio.' },
        { status: 500 }
      );
    }

    // 3. Invio Email (Opzionale/Safe)
    try {
      if (process.env.RESEND_API_KEY) {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // 1. Email a te (Admin)
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'mksitestudio@gmail.com',
          subject: `Nuovo lead: ${name}`,
          html: `
            <h3>Nuovo contatto dal sito</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefono:</strong> ${phone || '-'}</p>
            <hr />
            <p><strong>Messaggio:</strong></p>
            <p>${message}</p>
          `,
        });

        // 2. Email al Cliente (Conferma)
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: email, // L'email inserita dall'utente
          subject: 'Grazie per averci contattato - MKSITE Verona',
          html: `
            <h3>Ciao ${name},</h3>
            <p>Grazie per aver contattato <strong>MKSITE Verona</strong>. Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 24 ore.</p>
            <br />
            <p>Ecco un riepilogo del tuo messaggio:</p>
            <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
              ${message}
            </blockquote>
            <br />
            <p>A presto,<br />Il team di MKSITE</p>
          `,
        });

        console.log('Emails sent successfully via Resend');
      } else {
        console.warn('RESEND_API_KEY missing, skipping email.');
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Non blocchiamo la risposta positiva se il DB ha salvato
    }

    return NextResponse.json(
      { ok: true, message: 'Messaggio inviato con successo!', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { ok: false, error: 'Errore interno del server.' },
      { status: 500 }
    );
  }
}
