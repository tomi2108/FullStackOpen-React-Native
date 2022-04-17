import { Text as NativeText } from "react-native";
import styles from "../styles/styles";

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.textComponent.text,
    color === "secondary" && styles.textComponent.colorTextSecondary,
    color === "primary" && styles.textComponent.colorPrimary,
    color === "tertiary" && styles.textComponent.colorTextTertiary,
    fontSize === "subheading" && styles.textComponent.fontSizeSubheading,
    fontWeight === "bold" && styles.textComponent.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
