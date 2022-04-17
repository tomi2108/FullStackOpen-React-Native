import { Platform } from "react-native";

const platformEspecificFont = Platform.select({
  ios: "Arial",
  android: "Roboto",
  default: "System",
});

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#676767",
    textTertiary: "#ebf5ff",
    primary: "#0366d6",
    secondary: "#24292e",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: platformEspecificFont,
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
