import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');



const config: Config = {
  
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F2F2F2",
        secondary:"#d7873c",
        secondary1:"#af581c", 
        secondary2:"#762008",
        secondary3:"#f6e7cf", 
        secondary4:"#ad5a1d",  
        secondary5:"#ffc219",  
        secondary6:"#fcaf01", 

        background:"#f8f7f2",
        background2:"#fff6d9",
        dark_background:"#715e51",
        dark_background2:"#7e6a5d",

        primary_text:"#715e51",
        dark_text:"#f6e7cf",
        dark_text2:"#fcaf01",
          
      },
      fontFamily: {
        Brush: ["Brush Script MT"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      google: {
        'text-gray': '#3c4043', 
        'button-blue': '#1a73e8',
        'button-blue-hover': '#5195ee',
        'button-dark': '#202124',
        'button-dark-hover': '#555658',
        'button-border-light': '#dadce0',
        'logo-blue': '#4285f4',
        'logo-green': '#34a853',
        'logo-yellow': '#fbbc05', 
        'logo-red': '#ea4335',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }: any) {
        addVariant('activee', ['&:activee', '&.router-link-active'])
      }),
    require("flowbite/plugin"),
  ],
};
export default config;
