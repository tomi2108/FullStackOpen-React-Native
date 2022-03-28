import Constants from "expo-constants";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    height: 50,
    alignItems: "flex-start",
    backgroundColor: theme.colors.secondary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text color="tertiary" fontWeight="bold">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
