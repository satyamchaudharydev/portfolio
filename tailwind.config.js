/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#C3BAB1",
        paperDark: "#dbcfb4",
        ink: "#17130f",
        inkSoft: "#756F69",
        accent: "#c0172d",
        accentDark: "#9f1023"
      },
      fontFamily: {
        masthead: ["Canopee", "serif"],
        display: ["Canopee", "serif"],
        headline: ["Playfair Display", "serif"],
        domaine: ["Domaine Disp Cond Medium", "serif"],
        instrument: ["PP Editorial New", "serif"],
        body: ["PP Editorial New", "serif"],
        mono: ["IBM Plex Mono", "monospace"]
      },
      boxShadow: {
        print: "0 8px 28px rgba(23,19,15,0.08)"
      }
    }
  },
  plugins: []
};
