module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "body-background": "url('/img/main_bg.png')",
      },
      maxHeight: {
        98: "33.6rem",
        100: "38rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
