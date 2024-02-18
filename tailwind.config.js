/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "hsl(223, 87%, 63%)",
        "secondary-blue": "hsl(223, 100%, 88%)",
        "secondary-red": "hsl(354, 100%, 66%)",
        "neutral-gray": "hsl(0, 0%, 59%)",
        "neutral-dark-blue": "hsl(209, 33%, 12%)",
      },

      boxShadow: {
        custom: "0px .4rem .7rem 0px rgba(194, 211, 255,1)",
      },
    },
  },
  plugins: [],
};
