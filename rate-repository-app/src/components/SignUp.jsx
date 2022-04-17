import { Formik } from "formik";
import { Pressable, View } from "react-native";
import * as yup from "yup";
import useUser from "../hooks/useUser";
import styles from "../styles/styles";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(1, "Username must be between 1 and 30 characters")
    .max(30, "Username must be between 1 and 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Username must be between 5 and 50 characters")
    .max(50, "Username must be between 5 and 50 characters"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirm is required"),
});

const SignUp = () => {
  const createUser = useUser();

  const handleSubmit = async ({ username, password }) => {
    await createUser({ username, password });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm({ values: initialValues });
      }}
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
            <FormikTextInput
              secureTextEntry
              style={styles.form.input}
              name="passwordConfirmation"
              placeholder="Password confirmation"
            />
            <Pressable onPress={handleSubmit} style={styles.form.button}>
              <Text color="tertiary">Sign up</Text>
            </Pressable>
          </View>
        );
      }}
    </Formik>
  );
};
export default SignUp;
