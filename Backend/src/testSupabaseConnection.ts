import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey ? "Loaded" : "Not Loaded");

const supabase = createClient(supabaseUrl, supabaseKey);

const testConnection = async () => {
  const { data, error } = await supabase.from("movies").select("*").limit(1);

  if (error) {
    console.error("Error connecting to Supabase:", error.message);
  } else {
    console.log("Successfully connected to Supabase. Sample data:", data);
  }
};

testConnection();
