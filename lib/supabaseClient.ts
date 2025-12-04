import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import localForage from "localforage";
import Constants from "expo-constants";

const SUPABASE_URL =
  process.env.EXPO_PUBLIC_SUPABASE_URL ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_SUPABASE_URL ||
  "https://qyhbwuqnedkizvvsyfyx.supabase.co";

const SUPABASE_ANON_KEY =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5aGJ3dXFuZWRraXp2dnN5Znl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MzkwNTksImV4cCI6MjA2OTExNTA1OX0.KL2xauqyGp8edlQPAhhAVD-TT71UY86C9MhHENRi-i4";

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
