import { StyleSheet, TextInput as NativeTextInput } from "react-native";

const TextInput = ({ style, error, ...props }) => {
  const styles = StyleSheet.create({
    error: {
      borderColor: "#d73a4a",
    },
  });
  const textInputStyle = [style, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
