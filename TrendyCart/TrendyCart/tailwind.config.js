
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-gradient-to-tr',
    'from-[#ff4694]',
    'to-[#776fff]',
    'aspect-1097/845',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ed3849',
        'primary-dark': "#d23141",
        'primary-light': '#f4e5ec',
        'text-dark': '#0f172a',
        'text-light': '#64748b',
        'extra-light': '#f8fafc',
      },
      aspectRatio: {
        '1097/845': 1097 / 845,
      },
    },
  },
  plugins: [],
}

