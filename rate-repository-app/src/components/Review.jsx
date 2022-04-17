import { View } from "react-native";
import styles from "../styles/styles";
import Text from "./Text";

const Review = ({ item }) => {
  return (
    <View style={styles.review.container}>
      <View style={styles.review.info}>
        <View style={{ flexGrow: 0, marginEnd: 10 }}>
          <View style={styles.review.rating}>
            <Text style={{ color: "#0165d4", fontWeight: "bold" }}>
              {item.rating}
            </Text>
          </View>
        </View>
        <View style={styles.review.reviewDetails}>
          <Text fontWeight="bold">{item.user.username}</Text>
          <Text style={{ marginTop: 5, fontWeight: "bold" }} color="secondary">
            {item.createdAt}
          </Text>
          <Text style={{ marginTop: 5, color: "#000000" }}>{item.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Review;
