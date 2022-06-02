// noinspection BadExpressionStatementJS

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fefefe",
      draft: "#dfe3fa",
      darkPurple: "#252945",
      red: "#ec5757",
      purple: "#7c5dfa",
      green: "#33d69f",
      orange: "#ff8f00",
    },
    maxWidth: {
      700: "700px"
    },
    minWidth: {
      large: "90px",
    },
    borderRadius: {
      large: "20px",
    },
    extend: {
      spacing: {
        7.5: "30px",
      },
      zIndex: {
        99: "99",
      },
      flexBasis: {
        10: "10%",
      },
    },
  },
  plugins: [],
};
