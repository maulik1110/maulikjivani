import { Scada } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'repeating-radial-gradient': 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff 5px, #fff 80px)',
          'repeating-radial-gradient-sm': 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff 5px, #fff 30px)',

      },
      animation:{
        blob:"blob 8s infinite",
        blob2:"blob2 8s infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px,0px ) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-50px ) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px,20px ) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px,0px ) scale(1)"
          },

        },
        blob2:{
          "0%":{
            transform: "translate(0px,0px ) scale(1)",
          },
          "33%": {
            transform: "translate(10px,-20px ) scale(1.1)"
          },
          "66%": {
            transform: "translate(-10px,10px ) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px,0px ) scale(1)"
          },

        },
        spotlight:{
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        
      }
    },
  },
  plugins: [],
};

export default config;
