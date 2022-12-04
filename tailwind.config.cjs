/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      alt: ['Noto Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': "#c6efc8",
        'secondary': "#146531",
        'lightGreen': "#a2c3a4"
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
