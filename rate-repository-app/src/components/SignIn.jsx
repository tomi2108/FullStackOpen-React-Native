import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import useSignOut from "../hooks/useSignOut";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

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

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const [signOut, user] = useSignOut();
  let navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn(username, password);
      navigate("/list");
    } catch (e) {
      console.log(e);
    }
  };

  if (!user) {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <View style={styles.container}>
              <FormikTextInput
                style={styles.input}
                name="username"
                placeholder="Username"
              />
              <FormikTextInput
                secureTextEntry
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
  }

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View>
      <Pressable onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
