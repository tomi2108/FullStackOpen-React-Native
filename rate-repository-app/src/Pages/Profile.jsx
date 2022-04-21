import { FlatList, View } from "react-native";
import Review from "../components/Review";
import Text from "../components/Text";
import useLogin from "../hooks/useLogin";
import styles from "../styles/styles";

const ItemSeparator = () => <View style={styles.repository.separator} />;

const Profile = () => {
  const { reviews } = useLogin({ includeReviews: true });

  if (reviews?.length === 0) {
    return (
      <View>
        <Text>You have no reviews</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Review review={item} showActions={true} />}
    />
  );
};

export default Profile;
