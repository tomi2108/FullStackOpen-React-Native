import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [create] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    await create({ variables: { review } });
  };
  return createReview;
};

export default useReview;
