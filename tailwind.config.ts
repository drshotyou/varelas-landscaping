import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#49573B",
          secondary: "#bab193",
          neutral: "#b5aaa7",
          "base-100": "#f8f6f1",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
