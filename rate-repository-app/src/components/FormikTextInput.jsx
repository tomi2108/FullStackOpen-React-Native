import { useField } from "formik";
import styles from "../styles/styles";
import Text from "./Text";
import TextInput from "./TextInput";

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.form.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
