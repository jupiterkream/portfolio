/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#4B5563'
        },
        red: {
          500: '#B11116'
        },
        base: '#ffffff',
        subgray: '#898D95'
      },

      screens: {
        '2xs': '350px',
        xs: '426px'
      },

      fontFamily: {
        display: ['Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Helvetica', 'Arial', 'san-serif'],
        header: ['Poppins'],
        content: ['Inter']
      }
    }
  },
  plugins: []
}
