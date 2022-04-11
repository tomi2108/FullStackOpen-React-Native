import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = ({ username, password }) => {
  console.log(username, password);
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
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
});

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <FormikTextInput
              style={styles.input}
              name="username"
              placeholder="Username"
            />
            <FormikTextInput
              style={styles.input}
              name="password"
              placeholder="Password"
            />
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text color="tertiary">Sign in</Text>
            </Pressable>
          </View>
        );
      }}
    </Formik>
  );
};

export default SignIn;
