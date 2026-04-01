/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cycle: {
          50: '#fff1f7',
          100: '#ffe4f1',
          200: '#ffc7e2',
          300: '#ffa0cc',
          400: '#ff6fb0',
          500: '#ff3f94',
          600: '#e71f79',
          700: '#c31263',
          800: '#9f1252',
          900: '#841348',
        },
        asphalt: {
          700: '#4a1f39',
          800: '#35142a',
          900: '#220c1b',
        },
        spark: {
          400: '#ff9ec8',
          500: '#ff74af',
          600: '#f74994',
        },
      },
    },
  },
  plugins: [],
}
