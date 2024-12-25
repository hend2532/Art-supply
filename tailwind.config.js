/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#FF4081', 
        customRed: '#D32F2F',
        customBlue: '#1E90FF',
      },
      boxShadow:{
        customShadow:'0px 0px 5px 0px #ff408064' 
      }
    },
  },
  plugins: [],
}

