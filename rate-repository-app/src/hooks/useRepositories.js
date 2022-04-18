import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ order, direction, keyword = "", first }) => {
  const [repos, setRepos] = useState(null);
  const variables = {
    orderBy: order,
    orderDirection: direction,
    searchKeyword: keyword ? keyword : "",
    first,
  };

  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  useEffect(() => {
    if (loading) setRepos(null);
    if (!loading && !error) setRepos(data.repositories);
  }, [loading]);

  return { fetchMore: handleFetchMore, repositories: repos, loading, error };
};

export default useRepositories;
