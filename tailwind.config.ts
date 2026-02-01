import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#223614", // The dark green text
        paper: "#FBF6F1", // The cream background
        sage: "#E5E0DA",
        hero: "#B7CFE7",
      },
      fontFamily: {
        // "Gopher" is a geometric sans. "Outfit" or "DM Sans" from Google Fonts are great free alternatives.
        heading: ["var(--font-heading)", "sans-serif"], 
        body: ["var(--font-body)", "serif"],
      },
      fontSize: {
        // Adding the exact size from your inspect element
        'mega': ['87.82px', { lineHeight: '90.63px', letterSpacing: 'normal' }],
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};

export default config;