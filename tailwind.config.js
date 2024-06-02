/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        'thumbs-teal': 'rgba(60, 187, 180, 0.8)',
        'thumbs-yellow': 'rgba(249, 173, 29, 0.8)',
      },
    },
  },
  plugins: [],
}
