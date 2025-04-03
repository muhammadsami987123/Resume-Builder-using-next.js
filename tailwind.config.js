/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '2': '0.5rem',
        '4': '1rem',
      },
      borderRadius: {
        'default': '0.375rem',
      },
      colors: {
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss/nesting'),
  ],
} 