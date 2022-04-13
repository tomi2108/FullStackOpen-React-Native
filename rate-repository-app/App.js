import { ApolloProvider } from "@apollo/client";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import UserStorageContext from "./src/contexts/userStorageContext";
import createApolloClient from "./src/utils/apolloClient";
import UserStorage from "./src/utils/UserStorage";

const userStorage = new UserStorage("UserStorage");

const apolloClient = createApolloClient(userStorage);

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <UserStorageContext.Provider value={userStorage}>
            <Main />
          </UserStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
