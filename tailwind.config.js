/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "524": "32rem",
        "487": "30.438rem",
        "543": "34rem",
        "712": "44.5"
      },
      margin: {
        "812": "50.75rem",
        "600": "37.5"
      },
      colors: {
        "blue": "#06286E",
        "grey": "#696671"
      },
      fontFamily: {
        monsterrat: ["Montserrat"],
        inter: ["Inter"],
        lato: ["Lato"]
      }
    },
  },
  plugins: [],
}