import { createClient } from '@supabase/supabase-js'

const supabaseUrl ='https://ukdkbmdxecccbcurlqwc.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGtibWR4ZWNjY2JjdXJscXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2OTcxMjcsImV4cCI6MjA1OTI3MzEyN30.b3zuE5Vo0jNLkfPJOri-Bzivj0FWeBUSE6i7KPDWH_k'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

export default function useSupabase () {
  return { supabase }
}
