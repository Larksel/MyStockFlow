/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'hsl(var(--primary-light))',
          DEFAULT: 'hsl(var(--primary-default))',
          dark: 'hsl(var(--primary-dark))',
        },
        secondary: {
          light: 'hsl(var(--secondary-light))',
          DEFAULT: 'hsl(var(--secondary-default))',
          dark: 'hsl(var(--secondary-dark))',
        },
        neutral: {
          light: 'hsl(var(--neutral-light))',
          DEFAULT: 'hsl(var(--neutral-default))',
          dark: 'hsl(var(--neutral-dark))',
        },
        text: {
          light: 'hsl(var(--text-light))',
          DEFAULT: 'hsl(var(--text-default))',
          dark: 'hsl(var(--text-dark))',
        },
        background: {
          light: 'hsl(var(--background-light))',
          DEFAULT: 'hsl(var(--background-default))',
          dark: 'hsl(var(--background-dark))',
        },
      }
    },
  },
  plugins: [],
}

