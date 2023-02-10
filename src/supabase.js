import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lnsaoavwzafxgfhdctll.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxuc2FvYXZ3emFmeGdmaGRjdGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3OTAzODgsImV4cCI6MTk4OTM2NjM4OH0.M5-TRjZoDMLHy8eUJWCQ492qGiJtbLVjP7nlPxX4gyA";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;