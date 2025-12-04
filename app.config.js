export default {
  web: {
    bundler: "metro",
    output: "single",
    favicon: "./assets/images/favicon.png",
    redirects: [
      {
        source: "/(.*)",
        destination: "/index.html",
        permanent: false,
      },
    ],
  },
  extra: {
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  },
};
