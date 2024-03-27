/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'off-white': {
          DEFAULT: '#f9f9f9',
        },
        'sky-100': {
          DEFAULT: '#8fafff',
        },
        'sky-200': {
          DEFAULT: '#87CEEB',
        },
        dark: {
          DEFAULT: "#1c1c1E",
        },
        enter: {
          DEFAULT: "#0c0c0c",
        },
        'off-dark' : {
          DEFAULT: '#2A2A2F',
        },
        'bg-gray-100' : {
          DEFAULT: '#f9f9f9',
        },
        'bg-gray-200' : {
          DEFAULT: '#f3f3f3',
        },
      },
    },
  },
  plugins: [],
};


