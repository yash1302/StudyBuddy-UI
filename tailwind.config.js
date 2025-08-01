/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include your file types
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dashboard-bg": "#F8F9FA", // A slightly off-white gray for the main background
        "sidebar-bg": "#7E5BE8", // A custom deep purple for the sidebar
        "sidebar-active": "#9B81EE", // Lighter purple for the active link
        "primary-purple": "#7E5BE8", // Primary button color
        "text-purple": "#543088", // Darker text color
        "subtle-purple": "#C4B2E8", // Lighter text color
      },
      boxShadow: {
        "card-lg": "0 10px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
