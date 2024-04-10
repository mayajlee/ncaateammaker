import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yovvpvlxtyzxkibyxidi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdnZwdmx4dHl6eGtpYnl4aWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2MzI1NTYsImV4cCI6MjAyODIwODU1Nn0.Jw58QyJ_Mjf0BtpRD3Ao2v_padX_onKrtgEwshqwn-I';
export const supabase = createClient(supabaseUrl, supabaseKey);

