import { Pressable, View } from "react-native";
import { useNavigate } from "react-router-native";
import styles from "../styles/styles";
import Text from "./Text";

const AppBar = ({ onSignOut, user }) => {
  let navigate = useNavigate();

  return (
    <View style={styles.appBar.container}>
      {!user && (
        <>
          <Pressable onPress={() => navigate("sign")}>
            <Text color="tertiary" fontWeight="bold">
              Log In
            </Text>
          </Pressable>

          <Pressable onPress={() => navigate("/register")}>
            <Text color="tertiary" fontWeight="bold">
              Sign Up
            </Text>
          </Pressable>
        </>
      )}
      {user && (
        <>
          <Pressable onPress={onSignOut}>
            <Text color="tertiary" fontWeight="bold">
              Sign Out
            </Text>
          </Pressable>
          <Pressable onPress={() => navigate("/create")}>
            <Text color="tertiary" fontWeight="bold">
              Create a review
            </Text>
          </Pressable>
          <Pressable onPress={() => navigate("/list")}>
            <Text color="tertiary" fontWeight="bold">
              Repositories
            </Text>
          </Pressable>
          <Pressable onPress={() => navigate("/me")}>
            <Text color="tertiary" fontWeight="bold">
              My reviews
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default AppBar;
