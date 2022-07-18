const darkTheme = {
  DarkGrey: "#181818",
  MediumGrey: "#212121",
  LightGrey: "#383838",
  WhiteGrey: "#909090",
  white: "#FFFFFF"
};

const colors = {
  primaryBlue: "#6A80F5",
  secondaryBlue: "#EFF7FA",
  teritaryBlue: "#E0F7FF",
  lightGrey: "#EFEFEF",
  mediumGrey: "#E6ECF0",
  white: "#FFFFFF",
  black: "#000000",
  lineBlue: "#CCD6DD",
  whiteGrey: "#DFE6EB",
  darkGrey: "#657786",
  babbler: "#009FE3",
  babblerHover: "#02AEF7",
  hover: "#F5F8FA",
  alertRed: "#E0245E",
  lightRed: "#FF2B6B"
};

const mediaQueries = {
  large: "1280px",
  sidebar: "1095px",
  medium: "1000px",
  modalBreakPoint: "775px",
  profileBP: "700px",
  small: "600px"
};

const theme = {
  ...colors,
  ...mediaQueries
};

export default theme;
