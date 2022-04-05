module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#A73D10',
        'background': '#FEF8F8;'
      },
      padding: {

      },
      border: {
        '1': '1px'
      },
    },
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
