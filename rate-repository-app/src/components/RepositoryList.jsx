import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { useDebounce } from "use-debounce";
import useRepositories from "../hooks/useRepositories";
import styles from "../styles/styles";
import RepositoryItem from "./RepositoryItem";
import TextInput from "./TextInput";

const ItemSeparator = () => <View style={styles.repository.separator} />;

const RepositoryList = () => {
  const [filter, setFilter] = useState("");
  const [keyword] = useDebounce(filter, 500);

  const [repositoryOrder, setRepositoryOrder] = useState([
    "CREATED_AT",
    "DESC",
  ]);

  const { fetchMore, repositories } = useRepositories({
    searchKeyword: keyword,
    orderBy: repositoryOrder[0],
    orderDirection: repositoryOrder[1],
    first: 6,
  }); //null if no repos, repos[] if there are repos

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const handleEndReach = () => {
    fetchMore();
  };

  return (
    <>
      <TextInput
        style={styles.form.input}
        value={filter}
        onChangeText={(text) => setFilter(text)}
        placeholder="Search repository"
      />
      <Picker
        selectedValue={repositoryOrder}
        onValueChange={(itemValue) => setRepositoryOrder(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Order repositories" />
        <Picker.Item
          label="Latest repositories"
          value={["CREATED_AT", "DESC"]}
        />
        <Picker.Item
          label="Highest rated repositories"
          value={["RATING_AVERAGE", "DESC"]}
        />
        <Picker.Item
          label="Lowest rated repositories"
          value={["RATING_AVERAGE", "ASC"]}
        />
      </Picker>

      <FlatList
        onEndReached={handleEndReach}
        data={repositoryNodes ? repositoryNodes : []}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
      />
    </>
  );
};

export default RepositoryList;
