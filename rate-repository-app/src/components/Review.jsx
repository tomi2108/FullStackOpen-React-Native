import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  repository: {
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    marginEnd: 5,
  },

  info: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginStart: 5,
    width: "100%",
  },
  rating: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 100,
    borderColor: "#0165d4",
    width: 40,
    height: 40,
  },
});

const Review = ({ item }) => {
  return (
    <View style={styles.repository}>
      <View style={styles.info}>
        <View style={{ flexGrow: 0, marginEnd: 10 }}>
          <View style={styles.rating}>
            <Text style={{ color: "#0165d4", fontWeight: "bold" }}>
              {item.rating}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
            maxWidth: 350,
          }}
        >
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
