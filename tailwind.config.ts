import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        normal: "var(--font-weight-normal)",
        semibold: "var(--font-weight-semibold)",
        extrabold: "var(--font-weight-extrabold)",
      },
      fontSize: {
        button: "var(--font-button)",
        small: "var(--font-small)",
        medium: "var(--font-medium)",
        large: "var(--font-large)",
      },
      borderRadius: {
        sm: "var(--button-radius)",
        md: "var(--card-radius)",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--color-accent)",
        footer: "var(--footer-background)",
        btntext: "var(--button-text)",
        border: "var(--border)",
        ring: "var(--ring)",
        hover: "var(--button-hover)",
        placeholder: "var(--input-placeholder)",
      },
    },
  },
  plugins: [],
};
export default config;
