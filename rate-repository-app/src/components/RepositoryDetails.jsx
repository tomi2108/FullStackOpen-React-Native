import { useLazyQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import { FlatList, Image, Linking, Pressable, View } from "react-native";
import { useParams } from "react-router-dom";
import { GET_REPO } from "../graphql/queries";
import styles from "../styles/styles";
import Review from "./Review";
import Text from "./Text";

const numberParser = (number) => {
  if (number < 1000) return number;
  if (number < 1000000) return `${Math.round(number / 1000) / 10}k`;
  return `${Math.round(number / 1000000) / 10}M`;
};

const ItemSeparator = () => <View style={styles.repository.separator} />;

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
          <Text fontWeight="bold">{numberParser(item.stargazersCount)}</Text>
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

      <Pressable onPress={() => Linking.openURL(item.url)}>
        <View style={styles.repository.button}>
          <Text color="tertiary">Open in GitHub</Text>
        </View>
      </Pressable>
      <View style={styles.repository.separator} />

      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={Review}
      />
    </View>
  );
};

export default RepositoryDetails;
