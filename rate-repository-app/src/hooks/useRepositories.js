import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ order, direction }, keyword) => {
  const [repos, setRepos] = useState(null);

  const { data, loading, error } = useLazyQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: order,
      orderDirection: direction,
      searchKeyword: keyword,
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (loading) setRepos(null);
    if (!loading && !error) setRepos(data.repositories);
  }, [loading]);

  return { repositories: repos, loading, error };
};

export default useRepositories;
