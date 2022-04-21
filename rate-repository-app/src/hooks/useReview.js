import { useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_REVIEW, DELETE_REVIEW } from "../graphql/mutations";
import { GET_REPO } from "../graphql/queries";

const useReview = (variables) => {
  const [create] = useMutation(CREATE_REVIEW);
  const [remove] = useMutation(DELETE_REVIEW);

  const [reviews, setReviews] = useState(null);

  const [fetchRepo, { fetchMore, data, loading }] = useLazyQuery(GET_REPO, {
    variables,
    fetchPolicy: "cache-and-network",
    onCompleted: () => {
      setReviews(data.repository.reviews.edges.map((edge) => edge.node));
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  const createReview = async (review) => {
    await create({ variables: { review } });
  };

  const deleteReview = async (id) => {
    await remove({ variables: { deleteReviewId: id } });
  };

  return {
    createReview,
    deleteReview,
    fetchMoreReviews: handleFetchMore,
    fetchRepo,
    reviews,
    repository: data?.repository,
  };
};

export default useReview;
