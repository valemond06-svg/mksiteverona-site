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

        // Template Base
        const emailTemplate = (content) => `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Arial', sans-serif; background-color: #f4f4f9; color: #333; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 20px; text-align: center; color: white; }
                .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
                .content { padding: 30px; }
                .field { margin-bottom: 20px; }
                .label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; font-weight: bold; }
                .value { font-size: 16px; font-weight: 500; margin-top: 5px; }
                .message-box { background: #f8fafc; border-left: 4px solid #06b6d4; padding: 15px; border-radius: 4px; color: #555; font-style: italic; }
                .footer { background: #1e293b; padding: 15px; text-align: center; color: #94a3b8; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>MKSITE Verona</h1>
                </div>
                <div class="content">
                  ${content}
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} MKSITE Verona. Tutti i diritti riservati.
                </div>
              </div>
            </body>
          </html>
        `;

        // 1. Email a te (Admin)
        console.log('Attempting to send Admin email...');
        const adminRes = await resend.emails.send({
          from: 'MKSITE Form <info@send.mksiteverona.com>',
          to: 'mksitestudio@gmail.com',
          subject: `✨ Nuovo Lead: ${name}`,
          html: emailTemplate(`
            <h2 style="color: #0f172a; margin-top: 0;">Nuova Richiesta di Contatto</h2>
            <div class="field">
              <div class="label">Nome</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Telefono</div>
              <div class="value">${phone || '-'}</div>
            </div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <div class="field">
              <div class="label">Messaggio</div>
              <div class="value message-box">${message}</div>
            </div>
          `),
        });
        console.log('Admin email result:', adminRes);
        if (adminRes.error) console.error('Admin email error:', adminRes.error);

        // 2. Email al Cliente (Conferma)
        console.log('Attempting to send Client email...');
        const clientRes = await resend.emails.send({
          from: 'MKSITE Verona <info@send.mksiteverona.com>',
          to: email,
          subject: 'Abbiamo ricevuto la tua richiesta! 🚀',
          html: emailTemplate(`
            <h2 style="color: #0f172a; margin-top: 0;">Grazie per averci scritto, ${name.split(' ')[0]}!</h2>
            <p style="color: #475569; line-height: 1.6;">
              Abbiamo ricevuto correttamente il tuo messaggio. Un nostro esperto ti risponderà <strong>entro 24 ore</strong>.
            </p>
            <br />
            <div style="background: #ecfeff; border: 1px solid #cffafe; padding: 20px; border-radius: 8px;">
               <p style="margin: 0; font-weight: bold; color: #0e7490;">Il tuo messaggio:</p>
               <p style="margin-top: 10px; color: #155e75; font-style: italic;">"${message}"</p>
            </div>
            <br />
            <p style="color: #475569;">Nel frattempo, puoi visitare i nostri profili social per vedere i nostri ultimi lavori.</p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://instagram.com/mksite.verona" style="background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">Seguici su Instagram</a>
            </div>
          `),
        });
        console.log('Client email result:', clientRes);
        if (clientRes.error) console.error('Client email error:', clientRes.error);

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
