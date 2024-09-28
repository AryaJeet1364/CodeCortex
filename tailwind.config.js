/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray1: "#E1E2E4",
        gray2: "#DEDFE1",
        gray3: "#D3D3D5",
        gray4: "#DDDDDF",
        gray5: "#DCDCDE",
        gray6: "#D6D6D8",
      },
    },
  },
  plugins: [],
};
