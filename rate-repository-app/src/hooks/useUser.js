import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useUser = () => {
  const [create] = useMutation(CREATE_USER);

  const createUser = async (user) => {
    await create({ variables: { user } });
  };
  return createUser;
};

export default useUser;
