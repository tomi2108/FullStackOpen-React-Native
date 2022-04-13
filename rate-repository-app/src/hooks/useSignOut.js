import { useApolloClient, useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_LOGGED_USER } from "../graphql/queries";
import useUserStorage from "./useUserStorage";

const useSignOut = () => {
  const userStorage = useUserStorage();
  const apolloClient = useApolloClient();
  const [user, setUser] = useState(null);

  const { data } = useQuery(GET_LOGGED_USER, {
    fetchPolicy: "cache-and-network",
    onCompleted: () => {
      setUser(data.me);
    },
  });

  const signOut = async () => {
    userStorage.clearToken();
    apolloClient.resetStore();
    setUser(null);
  };

  return [signOut, user];
};

export default useSignOut;
