/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Inspiration: ['Inspiration', 'serif'],
      },
      backgroundImage: {
        'gradient-bottom': 'linear-gradient(to top, #ffffff, #ff0000)', // Define the gradient
      },
      animation: {
        writing: 'typing 3s steps(30) 1s forwards',
        blink: 'blink 0.75s infinite',
      },
      keyframes: {
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
          '100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}