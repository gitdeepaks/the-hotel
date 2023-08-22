import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rdbmyuriisibpmdtnots.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkYm15dXJpaXNpYnBtZHRub3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MDExNDEsImV4cCI6MjAwODI3NzE0MX0.hz-_9Z3P5TJzvKxkOnhzZJn7DeDBNLpAutr_YJ8_hoQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
