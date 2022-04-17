import { Formik } from "formik";
import { Pressable, View } from "react-native";
import * as yup from "yup";
import { styles } from "../styles/FormStyles";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LogIn = ({ submit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submit}
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
              <Text color="tertiary">Log in</Text>
            </Pressable>
          </View>
        );
      }}
    </Formik>
  );
};

export default LogIn;
