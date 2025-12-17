import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

    // Email validation
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
