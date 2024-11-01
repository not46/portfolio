/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match your file structure
  ],
  theme: {
    extend: {
      animation: {
        reveal: 'reveal 1.5s forwards',
        smoke: 'smoke 0.5s forwards',
        smokyEffect: 'smokyEffect 1s forwards',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(10px)' },
          '50%': { opacity: '0.5', filter: 'blur(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        smoke: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        smokyEffect: {
          '0%': { opacity: '0.1' },
          '100%': { opacity: '0.5' },
        },
        fontFamily: {
          ligo: ['Ligo', 'sans-serif'], // Add 'Ligo' as a custom font family
        },
      },
    },
  },
  plugins: [],
}
