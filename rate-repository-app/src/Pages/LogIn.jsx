import { Formik } from "formik";
import { Pressable, View } from "react-native";
import * as yup from "yup";
import FormikTextInput from "../components/FormikTextInput";
import Text from "../components/Text";
import styles from "../styles/styles";

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
          <View style={styles.form.container}>
            <FormikTextInput
              style={styles.form.input}
              name="username"
              placeholder="Username"
            />
            <FormikTextInput
              secureTextEntry
              style={styles.form.input}
              name="password"
              placeholder="Password"
            />
            <Pressable onPress={handleSubmit} style={styles.form.button}>
              <Text color="tertiary">Log in</Text>
            </Pressable>
          </View>
        );
      }}
    </Formik>
  );
};

export default LogIn;
