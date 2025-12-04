import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import localForage from "localforage";
import Constants from "expo-constants";

const SUPABASE_URL =
  process.env.EXPO_PUBLIC_SUPABASE_URL ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_SUPABASE_URL ||
  "https://0ec90b57d6e95fcbda19832f.supabase.co";

const SUPABASE_ANON_KEY =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw";

console.log("🔍 Loaded ENV Variables:");
console.log("   SUPABASE_URL =", SUPABASE_URL);
console.log("   SUPABASE_ANON_KEY (first 10) =", SUPABASE_ANON_KEY?.slice(0, 10));
console.log("   typeof window:", typeof window);
console.log("   Using storage:", typeof window !== "undefined" ? "localForage (web)" : "AsyncStorage (native)");

const storage = typeof window !== "undefined" ? localForage : AsyncStorage;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

console.log("✅ Supabase client initialized with", typeof window !== "undefined" ? "localForage (web)" : "AsyncStorage (native)");
