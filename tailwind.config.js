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
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#baddff',
          300: '#89c8ff',
          400: '#53acff',
          500: '#2d8fff',
          600: '#176ee0',
          700: '#1658b3',
          800: '#184b93',
          900: '#1a4279',
        },
        asphalt: {
          700: '#2d313a',
          800: '#1f232b',
          900: '#11151c',
        },
        spark: {
          400: '#ffbc42',
          500: '#ffaf1f',
          600: '#ef9700',
        },
      },
    },
  },
  plugins: [],
}
