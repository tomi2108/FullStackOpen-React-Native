import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy!
    $orderDirection: OrderDirection!
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      edges {
        node {
          createdAt
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
