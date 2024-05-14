/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens : {
        lg: '1300px',
        xl: '1300px',
        '2xl' : '1300px'
      }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins' , 'sans-serif']
      }
    },
  },
  plugins: [],
}

