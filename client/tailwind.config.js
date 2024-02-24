import flowbitePlugin from "flowbite/plugin";
import tailwindScrollbar from "tailwind-scrollbar";
import tailwindcssLineClamp from '@tailwindcss/line-clamp';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin, tailwindScrollbar, tailwindcssLineClamp],
};
