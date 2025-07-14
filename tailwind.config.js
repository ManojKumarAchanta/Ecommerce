// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    boxShadow: true, // ✅ enables shadow classes like shadow-lg
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
