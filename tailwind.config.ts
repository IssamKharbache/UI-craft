import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:{
          DEFAULT:"#F19F9F",
          hover:"#e37d7d"
        }
      }
    },
    screens:{
      "sm":"640px",
      "md":"820px",
      "lg":"1300px",
      "xl":"1500px"
    }
  },
  plugins: [],
};
export default config;
