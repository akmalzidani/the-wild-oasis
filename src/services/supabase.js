import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vrhnpwciraajgxmdulun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyaG5wd2NpcmFhamd4bWR1bHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3MDUwODgsImV4cCI6MjA3MTI4MTA4OH0.7ftuvUCHBl6AKM4i_kVKAlpiEUshPrr3y4oYsIfC64M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
