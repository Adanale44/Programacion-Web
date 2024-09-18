import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    "https://ossrvikgyypwfhjaxqwl.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zc3J2aWtneXlwd2ZoamF4cXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzkxMTIsImV4cCI6MjA0MjI1NTExMn0.l1CZSaSMZsgi4TGORfNpl7nsaeGGu_4Ba4seF6-08Qw"

);
export default supabase;