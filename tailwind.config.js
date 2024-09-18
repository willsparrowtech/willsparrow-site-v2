/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FC7632',
        secondary: '#3f444b',
      },
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
      height: {
        '60': '240px',
      },
      width: {
          '125': '500px',
      },
    },
  },
  plugins: [],
}