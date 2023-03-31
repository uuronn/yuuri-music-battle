/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false, // 'media' or 'class',
  purge: {
    content: [
      "./app/*.{js,ts,jsx,tsx}",
      "./app/**/**/*.{js,ts,jsx,tsx}",
      "./app/components/**/*.{js,ts,jsx,tsx}",
      "./app/features/**/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
