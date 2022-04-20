import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { LOGIN } from "../graphql/mutations";
import { GET_LOGGED_USER } from "../graphql/queries";
import useUserStorage from "./useUserStorage";

const useLogin = ({ includeReviews = false }) => {
  const userStorage = useUserStorage();
  const apolloClient = useApolloClient();

  const [user, setUser] = useState(null);
  const [login] = useMutation(LOGIN);
  const [reviews, setReviews] = useState(null);

  const { data } = useQuery(GET_LOGGED_USER, {
    variables: { includeReviews },
    fetchPolicy: "cache-and-network",
    onCompleted: () => {
      setUser(data.me);
      if (includeReviews)
        setReviews(data.me.reviews.edges.map((edge) => edge.node));
    },
  });

  const signIn = async (username, password) => {
    const { data } = await login({ variables: { username, password } });
    userStorage.setToken(data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  const signOut = async () => {
    userStorage.clearToken();
    apolloClient.resetStore();
    setUser(null);
  };

  return { signIn, signOut, user, reviews };
};

export default useLogin;
