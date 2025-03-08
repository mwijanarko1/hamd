import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'navy': {
          900: '#0A1A2F',
        },
        'cream': {
          50: '#FFFBF5',
        },
        'gold': {
          50: '#FFF9E5',
          100: '#FFF2CC',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFC933',
          500: '#E6B31E', // Primary gold color
          600: '#CC9900',
          700: '#B38600',
          800: '#997300',
          900: '#806000'
        },
      },
    },
  },
  plugins: [],
};
export default config;
