import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        "playersScreen": [
          "imageOne imageTwo",
          "one two",
        ],
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
} satisfies Config;
