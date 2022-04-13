import { useApolloClient, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_LOGGED_USER } from "../graphql/queries";
import useUserStorage from "./useUserStorage";

const useSignOut = () => {
  const userStorage = useUserStorage();
  const apolloClient = useApolloClient();
  const [user, setUser] = useState(null);

  const { data, loading, error } = useQuery(GET_LOGGED_USER, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (loading) return;
    if (!loading && !error) setUser(data.me);
  }, [loading]);

  const signOut = async () => {
    userStorage.clearToken();
    apolloClient.resetStore();
    setUser(null);
  };

  return [signOut, user];
};

export default useSignOut;
