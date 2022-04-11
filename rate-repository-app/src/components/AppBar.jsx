import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    height: 80,
    backgroundColor: theme.colors.secondary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/sign">
        <Text color="tertiary" fontWeight="bold">
          Sign In
        </Text>
      </Link>

      <Link to="/list">
        <Text color="tertiary" fontWeight="bold">
          Repositories
        </Text>
      </Link>
    </View>
  );
};

export default AppBar;
