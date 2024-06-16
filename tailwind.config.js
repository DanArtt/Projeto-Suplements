/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        moon: 'moonGrow 0.2s linear 0.2s',
        sun: 'sunGrow 0.2s linear 0.2s',
      },
      keyframes: {
        moonGrow: {
          '0%,' : { backgroundSize: '13px 13px' },
          '50%': { backgroundSize: '9px 9px' },
          '100%': { backgroundSize: '13px 13px' },
        },

        sunGrow: {
          '0%,' : { backgroundSize: '13px 13px' },
          '50%': { backgroundSize: '9px 9px' },
          '100%': { backgroundSize: '13px 13px' },
        }
      }
    },
  },
  plugins: [],
}

