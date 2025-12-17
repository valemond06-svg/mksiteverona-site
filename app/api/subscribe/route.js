import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Email non valida' }),
        { status: 400 }
      );
    }

    // Salva in Supabase
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          email,
          created_at: new Date().toISOString(),
          source: 'lead_magnet_modal',
        },
      ]);

    if (error) {
      console.error('Supabase error:', error);
      return new Response(
        JSON.stringify({ error: 'Errore nel salvataggio' }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email salvata con successo' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({ error: 'Errore del server' }),
      { status: 500 }
    );
  }
}
