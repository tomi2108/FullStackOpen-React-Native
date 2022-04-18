import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy!
    $orderDirection: OrderDirection!
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: searchKeyword
    ) {
      edges {
        node {
          description
          fullName
          id
          ownerAvatarUrl
          language
          ratingAverage
          reviewCount
          forksCount
          stargazersCount
        }
      }
    }
  }
`;

export const GET_REPO = gql`
  query ($id: ID!) {
    repository(id: $id) {
      description
      fullName
      id
      ownerAvatarUrl
      language
      ratingAverage
      reviewCount
      forksCount
      stargazersCount
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_LOGGED_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
