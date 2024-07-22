/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        99: "404px",
      },
      colors: {
        "stone-900": "#121212",
        "stone-950": "#1e1e1f",
        "stone-1000": "#363636",
        "rose-900": "#3e3e3f",
        "rose-950": "#313131",
        "rose-1000": "#383839",
        "rose-1050": "#2b2b2c",
        "rose-1100": "#202022",
        "border-001": "#373737",
        "border-002": "#282828",
        "card-001": "#222224",
        highlight: "#ffdb70",
        "navi-001": "#29292a",
        // "#343434",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.663rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      margin: {
        18: "78px",
      },
      padding: {},
    },
  },
  variants: {
    extend: {
      textColor: ["selection"],
      backgroundColor: ["selection"],
    },
  },
  plugins: [],
};
