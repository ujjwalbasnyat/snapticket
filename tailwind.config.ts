import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			height: {
				formheight: "var(--form-height)",
				
			},
			width: {
				formwidth: "var(--form-width)",
				inputwidth: "var(--form-input-width)"
			},
			fontWeight: {
				normal: "var(--font-weight-normal)",
				semibold:"var(--font-weight-semibold)",
				extrabold: "var(--font-weight-extrabold)",

			},
			fontSize: {
				'btn': 'var(--font-button)',
				'sm': 'var(--font-small)',
				'md': 'var(--font-medium)',
				'lg': 'var(--font-large)',
				'btn-default': '1rem',
				'btn-sm': '0.875rem',
				'btn-lg': '1.25rem',
				'tag' : '0.8rem',
				'footertext' : '1rem',
			},
			borderRadius: {
				sm: "var(--button-radius)",
				md: "var(--card-radius)"
				
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
				checkmark: "#23F900",
				

      },

			padding: {
				'btn-default': '0.75rem 1.5rem', //px-6 py-3
				'btn-sm': '0.5rem 1rem', //px-4 py-2
				'btn-lg': '1rem 2rem', // px-8 py-4
		},
	  
    },
  },
  plugins: [],
};
export default config;


