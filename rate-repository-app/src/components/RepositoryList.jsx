import { FlatList, StyleSheet, View } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories(); //null if no repos, repos[] if there are repos

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  if (!repositoryNodes) {
    return (
      <View>
        <Text>No repositories</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};

export default RepositoryList;
