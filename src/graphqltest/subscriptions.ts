/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUpvote = /* GraphQL */ `
  subscription OnCreateUpvote {
    onCreateUpvote {
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
export const onUpdateUpvote = /* GraphQL */ `
  subscription OnUpdateUpvote {
    onUpdateUpvote {
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
export const onDeleteUpvote = /* GraphQL */ `
  subscription OnDeleteUpvote {
    onDeleteUpvote {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
