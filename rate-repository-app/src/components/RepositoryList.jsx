import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { useDebounce } from "use-debounce";
import useRepositories from "../hooks/useRepositories";
import styles from "../styles/styles";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import TextInput from "./TextInput";

const ItemSeparator = () => <View style={styles.repository.separator} />;

const RepositoryList = () => {
  const [filter, setFilter] = useState("");
  const [keyword] = useDebounce(filter, 500);

  const [repositoryOrder, setRepositoryOrder] = useState({
    order: "CREATED_AT",
    direction: "DESC",
  });

  const { fetchMore, repositories } = useRepositories({
    keyword,
    ...repositoryOrder,
    first: 8,
  }); //null if no repos, repos[] if there are repos

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

  const handleEndReach = () => {
    fetchMore();
  };

  return (
    <>
      <TextInput
        style={styles.form.input}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search repository"
      />
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
        onEndReached={handleEndReach}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
      />
    </>
  );
};

export default RepositoryList;
