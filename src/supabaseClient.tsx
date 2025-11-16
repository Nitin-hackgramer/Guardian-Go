// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://myewhuwnwlixjzgnynqi.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZXdodXdud2xpeGp6Z255bnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMTc0ODAsImV4cCI6MjA3Njc5MzQ4MH0.PHJY8SmHbSHzKHONGLF7kAjDUA5cRTV5CwXi73WAV_A";

export const supabase = createClient(supabaseUrl, supabaseKey);
