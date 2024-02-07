import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        GalaxyS8: "360px",
        iPhoneSE: "375px",
        iPhone12: "390px",
        Pixel7: "412px",
        iPhoneXR: "414px",
      },
    },
  },
  plugins: [],
};
export default config;
