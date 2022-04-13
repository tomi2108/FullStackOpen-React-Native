import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repos, setRepos] = useState(null);

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (loading) setRepos(null);
    if (!loading && !error) setRepos(data.repositories);
  }, [loading]);

  return { repositories: repos, loading, error };
};

export default useRepositories;
