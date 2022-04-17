import { TextInput as NativeTextInput } from "react-native";
import styles from "../styles/styles";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.form.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
