/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import { gql } from "@apollo/client";

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      points
      creatorID
      creator {
        id
        username
        password
        email
        avatar
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        upvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      voteStatus
      upvotes {
        items {
          id
          value
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          content
          points
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ gql`
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        points
        creatorID
        creator {
          id
          username
          password
          email
          avatar
          createdAt
          updatedAt
        }
        voteStatus
        upvotes {
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
            updatedAt
            points
            creator {
              username
              avatar
            }
            replies {
              items {
                id
                content
                createdAt
                updatedAt
                creator {
                  username
                  avatar
                }
              }
            }
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        title
        content
        points
        creatorID
        creator {
          id
          username
          password
          email
          avatar
          createdAt
          updatedAt
        }
        voteStatus
        upvotes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      points
      creatorID
      creator {
        id
        username
        password
        email
        avatar
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        upvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      replies {
        items {
          id
          postID
          content
          points
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          title
          content
          points
          creatorID
          voteStatus
          createdAt
          updatedAt
        }
        content
        points
        creatorID
        creator {
          id
          username
          password
          email
          avatar
          createdAt
          updatedAt
        }
        replies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUpvote = /* GraphQL */ `
  query GetUpvote($id: ID!) {
    getUpvote(id: $id) {
      id
      value
      userID
      user {
        id
        username
        password
        email
        avatar
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        upvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        title
        content
        points
        creatorID
        creator {
          id
          username
          password
          email
          avatar
          createdAt
          updatedAt
        }
        voteStatus
        upvotes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUpvotes = /* GraphQL */ `
  query ListUpvotes(
    $filter: ModelUpvoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpvotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        userID
        user {
          id
          username
          password
          email
          avatar
          createdAt
          updatedAt
        }
        postID
        post {
          id
          title
          content
          points
          creatorID
          voteStatus
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      password
      email
      avatar
      posts {
        items {
          id
          title
          content
          points
          creatorID
          voteStatus
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          content
          points
          creatorID
          createdAt
          updatedAt
        }
        nextToken
      }
      upvotes {
        items {
          id
          value
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        password
        email
        avatar
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        upvotes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
