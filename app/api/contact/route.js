import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Configurazione Nodemailer con Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

async function sendEmail(to, subject, html) {
  try {
    await transporter.sendMail({
      from: `MKSite Verona <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('Email error:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Nome, email e messaggio sono obbligatori' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Email non valida' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          message,
          service: service || null,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Errore nel salvataggio del messaggio' },
        { status: 500 }
      );
    }

    // Send email to client
    await sendEmail(
      email,
      '✓ Abbiamo ricevuto il tuo messaggio!',
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f1419; color: #f5f5f5; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #32b8c6; margin: 0;">MKSite Verona</h1>
          </div>
          
          <div style="background: #1a1f2e; padding: 20px; border-radius: 10px; border: 1px solid #2a3142;">
            <h2 style="color: #50d3e3; margin-top: 0;">Ciao ${name}! 👋</h2>
            
            <p style="line-height: 1.6;">Abbiamo ricevuto il tuo messaggio e siamo entusiasti di collaborare con te!</p>
            
            <div style="background: #0f1419; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #32b8c6; margin-top: 0;">Riepilogo del tuo messaggio:</h3>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ''}
              ${service ? `<p><strong>Servizio interessato:</strong> ${service}</p>` : ''}
              <p><strong>Messaggio:</strong> ${message}</p>
            </div>
            
            <p style="line-height: 1.6;">Il nostro team ti contatterà entro <strong>24 ore</strong> per discutere i dettagli del tuo progetto.</p>
            
            <p style="line-height: 1.6;">Nel frattempo, puoi contattarci direttamente:</p>
            <ul style="line-height: 1.8;">
              <li>📞 <strong>Telefono:</strong> +39 3701093391</li>
              <li>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/393701093391" style="color: #32b8c6; text-decoration: none;">Clicca qui</a></li>
              <li>📸 <strong>Instagram:</strong> <a href="https://instagram.com/mksite.verona" style="color: #32b8c6; text-decoration: none;">@mksite.verona</a></li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #2a3142; color: #999;">
            <p style="font-size: 12px; margin: 0;">© 2025 MKSITE Verona. Tutti i diritti riservati.</p>
          </div>
        </div>
      `
    );

    // Send email to admin
    await sendEmail(
      'mksitestudio@gmail.com',
      `🔔 Nuovo contatto da ${name}`,
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nuovo messaggio dal modulo contatti</h2>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Servizio:</strong> ${service}</p>` : ''}
            <p><strong>Messaggio:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Rispondi direttamente a ${email} per contattare il cliente.
          </p>
        </div>
      `
    );

    return Response.json(
      { success: true, message: 'Messaggio inviato con successo!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { error: 'Errore del server' },
      { status: 500 }
    );
  }
}
