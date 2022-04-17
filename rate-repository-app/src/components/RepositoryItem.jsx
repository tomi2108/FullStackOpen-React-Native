import { Image, View } from "react-native";
import { Link } from "react-router-native";
import styles from "../styles/styles";
import Text from "./Text";

const numberParser = (number) => {
  if (number < 1000) return number;
  if (number < 1000000) return `${Math.round(number / 1000) / 10}k`;
  return `${Math.round(number / 1000000) / 10}M`;
};

const RepositoryItem = ({ item }) => {
  if (item) {
    return (
      <Link to={`/repo/${item.id}`}>
        <View style={styles.repository.container}>
          <View style={styles.repository.info}>
            <View style={{ flexGrow: 0, marginEnd: 5 }}>
              <Image
                style={styles.repository.image}
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
              <Text style={styles.repository.language}>{item.language}</Text>
            </View>
          </View>
          <View style={styles.repository.numbers}>
            <View style={styles.repository.numbersItem}>
              <Text fontWeight="bold">
                {numberParser(item.stargazersCount)}
              </Text>
              <Text>Stars</Text>
            </View>
            <View style={styles.repository.numbersItem}>
              <Text fontWeight="bold">{numberParser(item.forksCount)}</Text>
              <Text>Forks</Text>
            </View>
            <View style={styles.repository.numbersItem}>
              <Text fontWeight="bold">{numberParser(item.reviewCount)}</Text>
              <Text>Reviews</Text>
            </View>
            <View style={styles.repository.numbersItem}>
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
