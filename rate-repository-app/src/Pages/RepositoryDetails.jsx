import { useEffect } from "react";
import { FlatList, Image, Linking, Pressable, View } from "react-native";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import Text from "../components/Text";
import useReview from "../hooks/useReview";
import styles from "../styles/styles";

const numberParser = (number) => {
  if (number < 1000) return number;
  if (number < 1000000) return `${Math.round(number / 1000) / 10}k`;
  return `${Math.round(number / 1000000) / 10}M`;
};

const ItemSeparator = () => <View style={styles.repository.separator} />;

const RepositoryDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchRepo();
  }, [id]);

  const { fetchMoreReviews, fetchRepo, repository, reviews } = useReview({
    id,
    first: 4,
  });

  if (!repository || !reviews) return <Text>Loading...</Text>;

  return (
    <View style={styles.repository.container}>
      <View style={styles.repository.info}>
        <View style={{ flexGrow: 0, marginEnd: 5 }}>
          <Image
            style={styles.repository.image}
            source={{ uri: repository.ownerAvatarUrl, width: 50, height: 50 }}
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
          <Text fontWeight="bold">{repository.fullName}</Text>
          <Text color="secondary">{repository.description}</Text>
          <Text style={styles.repository.language}>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.repository.numbers}>
        <View style={styles.repository.numbersItem}>
          <Text fontWeight="bold">
            {numberParser(repository.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.repository.numbersItem}>
          <Text fontWeight="bold">{numberParser(repository.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.repository.numbersItem}>
          <Text fontWeight="bold">{numberParser(repository.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.repository.numbersItem}>
          <Text fontWeight="bold">
            {numberParser(repository.ratingAverage)}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>

      <Pressable onPress={() => Linking.openURL(repository.url)}>
        <View style={styles.repository.button}>
          <Text color="tertiary">Open in GitHub</Text>
        </View>
      </Pressable>
      <View style={styles.repository.separator} />

      <FlatList
        onEndReached={fetchMoreReviews}
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={Review}
      />
    </View>
  );
};

export default RepositoryDetails;
