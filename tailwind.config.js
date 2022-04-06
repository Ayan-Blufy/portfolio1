module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'backtextures': "url('./images/bg-texture.png')",

      },
      colors: {
        "theme-green": "#00b140",
        "theme-blue-base": "#172a45",
        "theme-blue-deep": "#0a192f",
        "theme-gray-light": "#ccd6f6",
        "theme-gray-deep": "#8892b0",
        "theme-aquamarine": "#44dbb2",
        "theme-dk":"rgba(0, 0, 0, 0.733) 0px 5px 15px",
      }
    },
  },
  plugins: [],
}
