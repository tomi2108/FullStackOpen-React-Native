import Constants from "expo-constants";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-native";
import useSignOut from "../hooks/useSignOut";
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

const AppBar = () => {
  const [signOut, user] = useSignOut();
  let navigate = useNavigate();

  const onSignOut = async ({ username, password }) => {
    try {
      await signOut(username, password);
      navigate("/sign");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      {!user && (
        <Link to="/sign">
          <Text color="tertiary" fontWeight="bold">
            Sign In
          </Text>
        </Link>
      )}
      {user && (
        <Pressable onPress={onSignOut}>
          <Text color="tertiary" fontWeight="bold">
            Sign Out
          </Text>
        </Pressable>
      )}

      <Link to="/list">
        <Text color="tertiary" fontWeight="bold">
          Repositories
        </Text>
      </Link>
    </View>
  );
};

export default AppBar;
