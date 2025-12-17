import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

// Helper function to insert contact form data
export async function insertContact(data) {
  const { data: result, error } = await supabase
    .from('contacts')
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        service: data.service,
        created_at: new Date(),
      },
    ]);

  return { result, error };
}
