/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rosso: "var(--rosso)",
        verde_scuro: "var(--verde-scuro)",
        verde_chiaro: "var(--verde-chiaro)",
        pesca: "var(--pesca)",

      },
      height: {
        110: '30rem',
        128: '32rem',
        144: '42rem',
      },
      width: {
        110: '30rem',
        128: '32rem',
        134: '40rem',
        144: '42rem',
        200: '88rem',
      }
    },
  },
  plugins: [],
}

