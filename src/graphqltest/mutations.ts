/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUpvote = /* GraphQL */ `
  mutation CreateUpvote(
    $input: CreateUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    createUpvote(input: $input, condition: $condition) {
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
export const updateUpvote = /* GraphQL */ `
  mutation UpdateUpvote(
    $input: UpdateUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    updateUpvote(input: $input, condition: $condition) {
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
export const deleteUpvote = /* GraphQL */ `
  mutation DeleteUpvote(
    $input: DeleteUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    deleteUpvote(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
