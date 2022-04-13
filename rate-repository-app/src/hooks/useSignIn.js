import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import useUserStorage from "./useUserStorage";

const useSignIn = () => {
  const userStorage = useUserStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(LOGIN);

  const signIn = async (username, password) => {
    const { data } = await mutate({ variables: { username, password } });
    userStorage.setToken(data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
