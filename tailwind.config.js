/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        themeGreen: "#538235"
      },
      keyframes: {
        fromLeft: {
          'from': {left: '-300px', opacity:"0"},
          'to': {left: '0', opacity: '1'}
        },
        toLeft: {
          'from': {left: '0', opacity: '1'},
          'to': {left:'-300px', opacity: '0'}
        },
        animation: {
          fromLeft: 'fromLeft 1s ease-in-out'
        },
      }
    },
  },
  plugins: [],
}