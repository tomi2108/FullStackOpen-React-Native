import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { useDebounce } from "use-debounce";
import RepositoryItem from "../components/RepositoryItem";
import TextInput from "../components/TextInput";
import useRepositories from "../hooks/useRepositories";
import styles from "../styles/styles";

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
    first: 8,
  }); //null if no repos, repos[] if there are repos

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

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
        onEndReached={fetchMore}
        data={repositoryNodes ? repositoryNodes : []}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
      />
    </>
  );
};

export default RepositoryList;
