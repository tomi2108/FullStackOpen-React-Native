import Constants from "expo-constants";
import theme from "./theme";

const styles = {
  //------------------ APP BAR ---------------------
  appBar: {
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingTop: Constants.statusBarHeight,
      height: 80,
      backgroundColor: theme.colors.secondary,
    },
  },

  //------------------ FORM ------------------------
  form: {
    container: {
      padding: 10,
    },
    error: {
      borderColor: "#d73a4a",
    },
    errorText: {
      color: "#d73a4a",
      marginTop: 5,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0165d4",
      borderRadius: 5,
      color: "#ffffff",
      height: 40,
      justifyContent: "center",
      marginTop: 10,
    },
    input: {
      borderColor: "#b9b9b9",
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 10,
      padding: 8,
    },
  },
  //------------------ REPOSITORY ------------------
  repository: {
    container: {
      backgroundColor: "white",
      flexDirection: "column",
      justifyContent: "center",
      marginEnd: 5,
    },
    separator: {
      height: 10,
      backgroundColor: "#e1e4e8",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0165d4",
      borderRadius: 5,
      color: "#ffffff",
      height: 40,
      justifyContent: "center",
      marginTop: 10,
    },
    info: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginStart: 5,
      width: "100%",
    },
    numbers: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    },
    numbersItem: {
      flexDirection: "column",
      height: 55,
      marginEnd: 5,
      width: 55,
    },
    image: {
      borderRadius: 5,
    },
    language: {
      backgroundColor: "#0265D0",
      borderRadius: 3,
      color: "white",
      padding: 3,
    },
  },
  //------------------ REVIEW ----------------------
  review: {
    container: {
      backgroundColor: "white",
      flexDirection: "column",
      justifyContent: "center",
      marginEnd: 5,
      padding: 10,
    },
    reviewDetails: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-start",
      maxWidth: 350,
    },
    info: {
      alignItems: "flex-start",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginStart: 5,
      marginEnd: 5,
      width: "100%",
    },
    rating: {
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 3,
      borderRadius: 100,
      borderColor: "#0165d4",
      width: 40,
      aspectRatio: 1 / 1,
    },
  },
  //------------------ TEXT ------------------------
  textComponent: {
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.normal,
    },
    backgroundColor: {
      backgroundColor: theme.colors.secondary,
    },
    colorTextSecondary: {
      color: theme.colors.textSecondary,
    },
    colorTextTertiary: {
      color: theme.colors.textTertiary,
    },
    colorPrimary: {
      color: theme.colors.primary,
    },
    fontSizeSubheading: {
      fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
      fontWeight: theme.fontWeights.bold,
    },
  },
};

export default styles;
