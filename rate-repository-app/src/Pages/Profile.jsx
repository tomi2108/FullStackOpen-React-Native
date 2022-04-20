import { FlatList, View } from "react-native";
import Review from "../components/Review";
import useLogin from "../hooks/useLogin";
import styles from "../styles/styles";

const ItemSeparator = () => <View style={styles.repository.separator} />;

const Profile = () => {
  const { reviews } = useLogin({ includeReviews: true });
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={Review}
    />
  );
};

export default Profile;
