import { Image, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
  repository: {
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    marginEnd: 5,
  },
  info: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginStart: 5,
    width: "100%",
  },
  numbers: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  numbersItem: {
    flexDirection: "column",
    height: 55,
    marginEnd: 5,
    width: 55,
  },
  image: {
    borderRadius: 5,
  },
  language: {
    backgroundColor: "#0265D0",
    borderRadius: 3,
    color: "white",
    padding: 3,
  },
});

const numberParser = (number) => {
  if (number < 1000) return number;
  if (number < 1000000) return `${Math.round(number / 1000) / 10}k`;
  return `${Math.round(number / 1000000) / 10}M`;
};

const RepositoryItem = ({ item }) => {
  if (item) {
    return (
      <Link to={`/repo/${item.id}`}>
        <View style={styles.repository}>
          <View style={styles.info}>
            <View style={{ flexGrow: 0, marginEnd: 5 }}>
              <Image
                style={styles.image}
                source={{ uri: item.ownerAvatarUrl, width: 50, height: 50 }}
              />
            </View>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-start",
                maxWidth: 350,
              }}
            >
              <Text fontWeight="bold">{item.fullName}</Text>
              <Text color="secondary">{item.description}</Text>
              <Text style={styles.language}>{item.language}</Text>
            </View>
          </View>
          <View style={styles.numbers}>
            <View style={styles.numbersItem}>
              <Text fontWeight="bold">
                {numberParser(item.stargazersCount)}
              </Text>
              <Text>Stars</Text>
            </View>
            <View style={styles.numbersItem}>
              <Text fontWeight="bold">{numberParser(item.forksCount)}</Text>
              <Text>Forks</Text>
            </View>
            <View style={styles.numbersItem}>
              <Text fontWeight="bold">{numberParser(item.reviewCount)}</Text>
              <Text>Reviews</Text>
            </View>
            <View style={styles.numbersItem}>
              <Text fontWeight="bold">{numberParser(item.ratingAverage)}</Text>
              <Text>Rating</Text>
            </View>
          </View>
        </View>
      </Link>
    );
  }
};

export default RepositoryItem;
