import reactRefresh from "@vitejs/plugin-react-refresh";

export default {
  plugins: [reactRefresh()],
  // Add the ESLint configuration here
  eslint: {
    configure: {
      extends: "react-app",
    },
  },
};
