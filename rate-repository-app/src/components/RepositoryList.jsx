import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { FlatList, View } from "react-native";
import useRepositories from "../hooks/useRepositories";
import styles from "../styles/styles";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const ItemSeparator = () => <View style={styles.repository.separator} />;

const RepositoryList = () => {
  const [repositoryOrder, setRepositoryOrder] = useState({
    order: "CREATED_AT",
    direction: "DESC",
  });

  const { repositories } = useRepositories(repositoryOrder); //null if no repos, repos[] if there are repos

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
    <>
      <Picker
        selectedValue={repositoryOrder}
        onValueChange={(itemValue) => {
          setRepositoryOrder(itemValue);
        }}
      >
        <Picker.Item
          label="Latest repositories"
          value={{ order: "CREATED_AT", direction: "DESC" }}
        />
        <Picker.Item
          label="Highest rated repositories"
          value={{ order: "RATING_AVERAGE", direction: "DESC" }}
        />
        <Picker.Item
          label="Lowest rated repositories"
          value={{ order: "RATING_AVERAGE", direction: "ASC" }}
        />
      </Picker>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
      />
    </>
  );
};

export default RepositoryList;
