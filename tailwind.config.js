/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
     primary:"#d9f99d",
     secondary:"#365314",
      white:"#ffffff",
    },
    fontFamily:{
      sans:["Poppins","sans-serif"]
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"2rem",
        lg:"4rem",
        xl:"5rem"
      }
    }
  },
  plugins: [],
}