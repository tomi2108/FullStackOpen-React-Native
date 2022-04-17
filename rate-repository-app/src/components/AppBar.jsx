import Constants from "expo-constants";
import { Pressable, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import theme from "../utils/theme";
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

const AppBar = ({ onSignOut, user }) => {
  return (
    <View style={styles.container}>
      {!user && (
        <>
          <Link to="/sign">
            <Text color="tertiary" fontWeight="bold">
              Log In
            </Text>
          </Link>
          <Link to="/register">
            <Text color="tertiary" fontWeight="bold">
              Sign Up
            </Text>
          </Link>
        </>
      )}
      {user && (
        <>
          <Pressable onPress={onSignOut}>
            <Text color="tertiary" fontWeight="bold">
              Sign Out
            </Text>
          </Pressable>
          <Link to="/create">
            <Text color="tertiary" fontWeight="bold">
              Create a review
            </Text>
          </Link>
          <Link to="/list">
            <Text color="tertiary" fontWeight="bold">
              Repositories
            </Text>
          </Link>
        </>
      )}
    </View>
  );
};

export default AppBar;
