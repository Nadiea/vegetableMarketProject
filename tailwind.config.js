/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px"
    },
    
    colors:{
     primary:"#d9f99d",
     secondary:"#365314",
      white:"#ffffff",
      logo:"#4d7c0f",
      hero:"#d9f99d",



      hover:"#f9f9f9",
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


// sm:  lg: xl: 2xl: md: