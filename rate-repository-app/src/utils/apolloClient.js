import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Constants from "expo-constants";

const { apolloUri } = Constants.manifest.extra;

const httpLink = createHttpLink({
  uri: apolloUri,
});

const createApolloClient = (userStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await userStorage.getToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return { headers };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
