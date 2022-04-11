import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
