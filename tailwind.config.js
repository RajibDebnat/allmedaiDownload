/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Make sure to include all file types you use
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrate:["Montserrat"," system-ui"],
        "Open Sans":[ "Open Sans", "sans-serif"],
      },
      colors:{
        'heading-color':'#212529',
        'para-color':"#495057",
        'main-btn-color':'#343a40',
        // 'secondary-btn-color':''
      }
      ,
      screens: {
        'xs': '600px', // Add this custom breakpoint
      },
    },
  },
  plugins: [],
};
// extend: {
//   fontFamily: {
//     montserrat: ["Montserrat", "sans-serif"],

//     poppins: ["Poppins", " sans-serif"],

//     "roboto-mono": ["Roboto Mono", "monospace"],
//   },
