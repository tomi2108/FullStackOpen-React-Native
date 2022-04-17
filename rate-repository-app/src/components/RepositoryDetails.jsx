import { useLazyQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { useParams } from "react-router-dom";
import { GET_REPO } from "../graphql/queries";
import Review from "./Review";
import Text from "./Text";

const numberParser = (number) => {
  if (number < 1000) return number;
  if (number < 1000000) return `${Math.round(number / 1000) / 10}k`;
  return `${Math.round(number / 1000000) / 10}M`;
};
const styles = StyleSheet.create({
  repository: {
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    marginEnd: 5,
  },
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0165d4",
    borderRadius: 5,
    color: "#ffffff",
    height: 40,
    justifyContent: "center",
    marginTop: 10,
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

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryDetails = () => {
  const [item, setItem] = useState(null);
  const [reviews, setReviews] = useState(null);

  const { id } = useParams();

  const [fetchRepo, { data }] = useLazyQuery(GET_REPO, {
    variables: { id: id },
    fetchPolicy: "cache-and-network",
    onCompleted: () => {
      setItem(data.repository);
      setReviews(data.repository.reviews.edges.map((edge) => edge.node));
    },
  });

  useEffect(() => {
    if (id) fetchRepo();
  }, [id]);

  if (!item || !reviews) return <Text>Loading...</Text>;

  return (
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
          <Text fontWeight="bold">{numberParser(item.stargazersCount)}</Text>
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

      <Pressable onPress={() => Linking.openURL(item.url)}>
        <View style={styles.button}>
          <Text color="tertiary">Open in GitHub</Text>
        </View>
      </Pressable>
      <View style={styles.separator} />
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={Review}
      />
    </View>
  );
};

export default RepositoryDetails;
