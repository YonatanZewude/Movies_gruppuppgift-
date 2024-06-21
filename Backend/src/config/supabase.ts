import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key from environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
