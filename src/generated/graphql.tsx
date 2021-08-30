import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getPost?: Maybe<Post>;
  listPosts?: Maybe<ModelPostConnection>;
  getComment?: Maybe<Comment>;
  listComments?: Maybe<ModelCommentConnection>;
  getUpvote?: Maybe<Upvote>;
  listUpvotes?: Maybe<ModelUpvoteConnection>;
  getUser?: Maybe<User>;
  listUsers?: Maybe<ModelUserConnection>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryListPostsArgs = {
  filter?: Maybe<ModelPostFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryListCommentsArgs = {
  filter?: Maybe<ModelCommentFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type QueryGetUpvoteArgs = {
  id: Scalars['ID'];
};


export type QueryListUpvotesArgs = {
  filter?: Maybe<ModelUpvoteFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryListUsersArgs = {
  filter?: Maybe<ModelUserFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  points: Scalars['Int'];
  creatorID: Scalars['ID'];
  creator?: Maybe<User>;
  voteStatus?: Maybe<Scalars['Int']>;
  upvotes?: Maybe<ModelUpvoteConnection>;
  comments?: Maybe<ModelCommentConnection>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type PostUpvotesArgs = {
  filter?: Maybe<ModelUpvoteFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type PostCommentsArgs = {
  content?: Maybe<ModelStringKeyConditionInput>;
  filter?: Maybe<ModelCommentFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  posts?: Maybe<ModelPostConnection>;
  comments?: Maybe<ModelCommentConnection>;
  upvotes?: Maybe<ModelUpvoteConnection>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type UserPostsArgs = {
  filter?: Maybe<ModelPostFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type UserCommentsArgs = {
  filter?: Maybe<ModelCommentFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type UserUpvotesArgs = {
  filter?: Maybe<ModelUpvoteFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelPostConnection = {
  __typename?: 'ModelPostConnection';
  items?: Maybe<Array<Maybe<Post>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelPostFilterInput = {
  id?: Maybe<ModelIdInput>;
  title?: Maybe<ModelStringInput>;
  content?: Maybe<ModelStringInput>;
  points?: Maybe<ModelIntInput>;
  creatorID?: Maybe<ModelIdInput>;
  voteStatus?: Maybe<ModelIntInput>;
  and?: Maybe<Array<Maybe<ModelPostFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelPostFilterInput>>>;
  not?: Maybe<ModelPostFilterInput>;
};

export type ModelIdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
  beginsWith?: Maybe<Scalars['ID']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export enum ModelAttributeTypes {
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
  Null = '_null'
}

export type ModelSizeInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ModelStringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export type ModelIntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelCommentConnection = {
  __typename?: 'ModelCommentConnection';
  items?: Maybe<Array<Maybe<Comment>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  postID: Scalars['ID'];
  post?: Maybe<Post>;
  content: Scalars['String'];
  points: Scalars['Int'];
  creatorID: Scalars['ID'];
  creator?: Maybe<User>;
  replies?: Maybe<ModelCommentConnection>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type CommentRepliesArgs = {
  filter?: Maybe<ModelCommentFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelCommentFilterInput = {
  id?: Maybe<ModelIdInput>;
  postID?: Maybe<ModelIdInput>;
  content?: Maybe<ModelStringInput>;
  points?: Maybe<ModelIntInput>;
  creatorID?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelCommentFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelCommentFilterInput>>>;
  not?: Maybe<ModelCommentFilterInput>;
};


export type ModelUpvoteConnection = {
  __typename?: 'ModelUpvoteConnection';
  items?: Maybe<Array<Maybe<Upvote>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Upvote = {
  __typename?: 'Upvote';
  id: Scalars['ID'];
  value?: Maybe<Scalars['Int']>;
  userID: Scalars['ID'];
  user?: Maybe<User>;
  postID: Scalars['ID'];
  post?: Maybe<Post>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};

export type ModelUpvoteFilterInput = {
  id?: Maybe<ModelIdInput>;
  value?: Maybe<ModelIntInput>;
  userID?: Maybe<ModelIdInput>;
  postID?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelUpvoteFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelUpvoteFilterInput>>>;
  not?: Maybe<ModelUpvoteFilterInput>;
};

export type ModelStringKeyConditionInput = {
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items?: Maybe<Array<Maybe<User>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelUserFilterInput = {
  id?: Maybe<ModelIdInput>;
  username?: Maybe<ModelStringInput>;
  password?: Maybe<ModelStringInput>;
  email?: Maybe<ModelStringInput>;
  avatar?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelUserFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelUserFilterInput>>>;
  not?: Maybe<ModelUserFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deletePost?: Maybe<Post>;
  createComment?: Maybe<Comment>;
  updateComment?: Maybe<Comment>;
  deleteComment?: Maybe<Comment>;
  createUpvote?: Maybe<Upvote>;
  updateUpvote?: Maybe<Upvote>;
  deleteUpvote?: Maybe<Upvote>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
  condition?: Maybe<ModelPostConditionInput>;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
  condition?: Maybe<ModelPostConditionInput>;
};


export type MutationDeletePostArgs = {
  input: DeletePostInput;
  condition?: Maybe<ModelPostConditionInput>;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
};


export type MutationCreateUpvoteArgs = {
  input: CreateUpvoteInput;
  condition?: Maybe<ModelUpvoteConditionInput>;
};


export type MutationUpdateUpvoteArgs = {
  input: UpdateUpvoteInput;
  condition?: Maybe<ModelUpvoteConditionInput>;
};


export type MutationDeleteUpvoteArgs = {
  input: DeleteUpvoteInput;
  condition?: Maybe<ModelUpvoteConditionInput>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
  condition?: Maybe<ModelUserConditionInput>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  condition?: Maybe<ModelUserConditionInput>;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
  condition?: Maybe<ModelUserConditionInput>;
};

export type CreatePostInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  content: Scalars['String'];
  points: Scalars['Int'];
  creatorID: Scalars['ID'];
  voteStatus?: Maybe<Scalars['Int']>;
};

export type ModelPostConditionInput = {
  title?: Maybe<ModelStringInput>;
  content?: Maybe<ModelStringInput>;
  points?: Maybe<ModelIntInput>;
  creatorID?: Maybe<ModelIdInput>;
  voteStatus?: Maybe<ModelIntInput>;
  and?: Maybe<Array<Maybe<ModelPostConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelPostConditionInput>>>;
  not?: Maybe<ModelPostConditionInput>;
};

export type UpdatePostInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  creatorID?: Maybe<Scalars['ID']>;
  voteStatus?: Maybe<Scalars['Int']>;
};

export type DeletePostInput = {
  id: Scalars['ID'];
};

export type CreateCommentInput = {
  id?: Maybe<Scalars['ID']>;
  postID: Scalars['ID'];
  content: Scalars['String'];
  points: Scalars['Int'];
  creatorID: Scalars['ID'];
};

export type ModelCommentConditionInput = {
  postID?: Maybe<ModelIdInput>;
  content?: Maybe<ModelStringInput>;
  points?: Maybe<ModelIntInput>;
  creatorID?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelCommentConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelCommentConditionInput>>>;
  not?: Maybe<ModelCommentConditionInput>;
};

export type UpdateCommentInput = {
  id: Scalars['ID'];
  postID?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  creatorID?: Maybe<Scalars['ID']>;
};

export type DeleteCommentInput = {
  id: Scalars['ID'];
};

export type CreateUpvoteInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['Int']>;
  userID: Scalars['ID'];
  postID: Scalars['ID'];
};

export type ModelUpvoteConditionInput = {
  value?: Maybe<ModelIntInput>;
  userID?: Maybe<ModelIdInput>;
  postID?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelUpvoteConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelUpvoteConditionInput>>>;
  not?: Maybe<ModelUpvoteConditionInput>;
};

export type UpdateUpvoteInput = {
  id: Scalars['ID'];
  value?: Maybe<Scalars['Int']>;
  userID?: Maybe<Scalars['ID']>;
  postID?: Maybe<Scalars['ID']>;
};

export type DeleteUpvoteInput = {
  id: Scalars['ID'];
};

export type CreateUserInput = {
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
};

export type ModelUserConditionInput = {
  username?: Maybe<ModelStringInput>;
  password?: Maybe<ModelStringInput>;
  email?: Maybe<ModelStringInput>;
  avatar?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelUserConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelUserConditionInput>>>;
  not?: Maybe<ModelUserConditionInput>;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type DeleteUserInput = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreatePost?: Maybe<Post>;
  onUpdatePost?: Maybe<Post>;
  onDeletePost?: Maybe<Post>;
  onCreateComment?: Maybe<Comment>;
  onUpdateComment?: Maybe<Comment>;
  onDeleteComment?: Maybe<Comment>;
  onCreateUpvote?: Maybe<Upvote>;
  onUpdateUpvote?: Maybe<Upvote>;
  onDeleteUpvote?: Maybe<Upvote>;
  onCreateUser?: Maybe<User>;
  onUpdateUser?: Maybe<User>;
  onDeleteUser?: Maybe<User>;
};

export type ModelFloatInput = {
  ne?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelBooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
  condition?: Maybe<ModelPostConditionInput>;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostInput;
  condition?: Maybe<ModelPostConditionInput>;
}>;


export type UpdatePostMutation = (
  { __typename?: 'Mutation' }
  & { updatePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type DeletePostMutationVariables = Exact<{
  input: DeletePostInput;
  condition?: Maybe<ModelPostConditionInput>;
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & { deletePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )>, creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, replies?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type UpdateCommentMutationVariables = Exact<{
  input: UpdateCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
}>;


export type UpdateCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )>, creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, replies?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type DeleteCommentMutationVariables = Exact<{
  input: DeleteCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
}>;


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )>, creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, replies?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type CreateUpvoteMutationVariables = Exact<{
  input: CreateUpvoteInput;
  condition?: Maybe<ModelUpvoteConditionInput>;
}>;


export type CreateUpvoteMutation = (
  { __typename?: 'Mutation' }
  & { createUpvote?: Maybe<(
    { __typename?: 'Upvote' }
    & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type UpdateUpvoteMutationVariables = Exact<{
  input: UpdateUpvoteInput;
  condition?: Maybe<ModelUpvoteConditionInput>;
}>;


export type UpdateUpvoteMutation = (
  { __typename?: 'Mutation' }
  & { updateUpvote?: Maybe<(
    { __typename?: 'Upvote' }
    & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type DeleteUpvoteMutationVariables = Exact<{
  input: DeleteUpvoteInput;
  condition?: Maybe<ModelUpvoteConditionInput>;
}>;


export type DeleteUpvoteMutation = (
  { __typename?: 'Mutation' }
  & { deleteUpvote?: Maybe<(
    { __typename?: 'Upvote' }
    & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
  condition?: Maybe<ModelUserConditionInput>;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
    & { posts?: Maybe<(
      { __typename?: 'ModelPostConnection' }
      & Pick<ModelPostConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
  condition?: Maybe<ModelUserConditionInput>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
    & { posts?: Maybe<(
      { __typename?: 'ModelPostConnection' }
      & Pick<ModelPostConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
  condition?: Maybe<ModelUserConditionInput>;
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
    & { posts?: Maybe<(
      { __typename?: 'ModelPostConnection' }
      & Pick<ModelPostConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { getPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type ListPostsQueryVariables = Exact<{
  filter?: Maybe<ModelPostFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListPostsQuery = (
  { __typename?: 'Query' }
  & { listPosts?: Maybe<(
    { __typename?: 'ModelPostConnection' }
    & Pick<ModelPostConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & { items?: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'content' | 'createdAt' | 'updatedAt' | 'points'>
          & { creator?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'username' | 'avatar'>
          )>, replies?: Maybe<(
            { __typename?: 'ModelCommentConnection' }
            & { items?: Maybe<Array<Maybe<(
              { __typename?: 'Comment' }
              & Pick<Comment, 'id' | 'content' | 'createdAt' | 'updatedAt'>
              & { creator?: Maybe<(
                { __typename?: 'User' }
                & Pick<User, 'username' | 'avatar'>
              )> }
            )>>> }
          )> }
        )>>> }
      )> }
    )>>> }
  )> }
);

export type GetCommentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCommentQuery = (
  { __typename?: 'Query' }
  & { getComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )>, creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, replies?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type ListCommentsQueryVariables = Exact<{
  filter?: Maybe<ModelCommentFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListCommentsQuery = (
  { __typename?: 'Query' }
  & { listComments?: Maybe<(
    { __typename?: 'ModelCommentConnection' }
    & Pick<ModelCommentConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      & { post?: Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )>, creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, replies?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )>>> }
  )> }
);

export type GetUpvoteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUpvoteQuery = (
  { __typename?: 'Query' }
  & { getUpvote?: Maybe<(
    { __typename?: 'Upvote' }
    & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type ListUpvotesQueryVariables = Exact<{
  filter?: Maybe<ModelUpvoteFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListUpvotesQuery = (
  { __typename?: 'Query' }
  & { listUpvotes?: Maybe<(
    { __typename?: 'ModelUpvoteConnection' }
    & Pick<ModelUpvoteConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Upvote' }
      & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, post?: Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )> }
    )>>> }
  )> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
    & { posts?: Maybe<(
      { __typename?: 'ModelPostConnection' }
      & Pick<ModelPostConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type ListUsersQueryVariables = Exact<{
  filter?: Maybe<ModelUserFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
}>;


export type ListUsersQuery = (
  { __typename?: 'Query' }
  & { listUsers?: Maybe<(
    { __typename?: 'ModelUserConnection' }
    & Pick<ModelUserConnection, 'nextToken'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>>> }
  )> }
);

export type OnCreatePostSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreatePostSubscription = (
  { __typename?: 'Subscription' }
  & { onCreatePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnUpdatePostSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdatePostSubscription = (
  { __typename?: 'Subscription' }
  & { onUpdatePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnDeletePostSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeletePostSubscription = (
  { __typename?: 'Subscription' }
  & { onDeletePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
    & { creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnCreateCommentSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateCommentSubscription = (
  { __typename?: 'Subscription' }
  & { onCreateComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )>, creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, replies?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnUpdateCommentSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateCommentSubscription = (
  { __typename?: 'Subscription' }
  & { onUpdateComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )>, creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, replies?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnDeleteCommentSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteCommentSubscription = (
  { __typename?: 'Subscription' }
  & { onDeleteComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )>, creator?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, replies?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnCreateUpvoteSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateUpvoteSubscription = (
  { __typename?: 'Subscription' }
  & { onCreateUpvote?: Maybe<(
    { __typename?: 'Upvote' }
    & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type OnUpdateUpvoteSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateUpvoteSubscription = (
  { __typename?: 'Subscription' }
  & { onUpdateUpvote?: Maybe<(
    { __typename?: 'Upvote' }
    & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type OnDeleteUpvoteSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteUpvoteSubscription = (
  { __typename?: 'Subscription' }
  & { onDeleteUpvote?: Maybe<(
    { __typename?: 'Upvote' }
    & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      & { posts?: Maybe<(
        { __typename?: 'ModelPostConnection' }
        & Pick<ModelPostConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )> }
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      & { creator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
      )>, upvotes?: Maybe<(
        { __typename?: 'ModelUpvoteConnection' }
        & Pick<ModelUpvoteConnection, 'nextToken'>
      )>, comments?: Maybe<(
        { __typename?: 'ModelCommentConnection' }
        & Pick<ModelCommentConnection, 'nextToken'>
      )> }
    )> }
  )> }
);

export type OnCreateUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateUserSubscription = (
  { __typename?: 'Subscription' }
  & { onCreateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
    & { posts?: Maybe<(
      { __typename?: 'ModelPostConnection' }
      & Pick<ModelPostConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnUpdateUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateUserSubscription = (
  { __typename?: 'Subscription' }
  & { onUpdateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
    & { posts?: Maybe<(
      { __typename?: 'ModelPostConnection' }
      & Pick<ModelPostConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);

export type OnDeleteUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteUserSubscription = (
  { __typename?: 'Subscription' }
  & { onDeleteUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password' | 'email' | 'avatar' | 'createdAt' | 'updatedAt'>
    & { posts?: Maybe<(
      { __typename?: 'ModelPostConnection' }
      & Pick<ModelPostConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'content' | 'points' | 'creatorID' | 'voteStatus' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'ModelCommentConnection' }
      & Pick<ModelCommentConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'postID' | 'content' | 'points' | 'creatorID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )>, upvotes?: Maybe<(
      { __typename?: 'ModelUpvoteConnection' }
      & Pick<ModelUpvoteConnection, 'nextToken'>
      & { items?: Maybe<Array<Maybe<(
        { __typename?: 'Upvote' }
        & Pick<Upvote, 'id' | 'value' | 'userID' | 'postID' | 'createdAt' | 'updatedAt'>
      )>>> }
    )> }
  )> }
);


export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
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
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
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
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, baseOptions);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
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
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, baseOptions);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
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
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
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
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, baseOptions);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
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
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, baseOptions);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const CreateUpvoteDocument = gql`
    mutation CreateUpvote($input: CreateUpvoteInput!, $condition: ModelUpvoteConditionInput) {
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
export type CreateUpvoteMutationFn = Apollo.MutationFunction<CreateUpvoteMutation, CreateUpvoteMutationVariables>;

/**
 * __useCreateUpvoteMutation__
 *
 * To run a mutation, you first call `useCreateUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUpvoteMutation, { data, loading, error }] = useCreateUpvoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateUpvoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateUpvoteMutation, CreateUpvoteMutationVariables>) {
        return Apollo.useMutation<CreateUpvoteMutation, CreateUpvoteMutationVariables>(CreateUpvoteDocument, baseOptions);
      }
export type CreateUpvoteMutationHookResult = ReturnType<typeof useCreateUpvoteMutation>;
export type CreateUpvoteMutationResult = Apollo.MutationResult<CreateUpvoteMutation>;
export type CreateUpvoteMutationOptions = Apollo.BaseMutationOptions<CreateUpvoteMutation, CreateUpvoteMutationVariables>;
export const UpdateUpvoteDocument = gql`
    mutation UpdateUpvote($input: UpdateUpvoteInput!, $condition: ModelUpvoteConditionInput) {
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
export type UpdateUpvoteMutationFn = Apollo.MutationFunction<UpdateUpvoteMutation, UpdateUpvoteMutationVariables>;

/**
 * __useUpdateUpvoteMutation__
 *
 * To run a mutation, you first call `useUpdateUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUpvoteMutation, { data, loading, error }] = useUpdateUpvoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateUpvoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUpvoteMutation, UpdateUpvoteMutationVariables>) {
        return Apollo.useMutation<UpdateUpvoteMutation, UpdateUpvoteMutationVariables>(UpdateUpvoteDocument, baseOptions);
      }
export type UpdateUpvoteMutationHookResult = ReturnType<typeof useUpdateUpvoteMutation>;
export type UpdateUpvoteMutationResult = Apollo.MutationResult<UpdateUpvoteMutation>;
export type UpdateUpvoteMutationOptions = Apollo.BaseMutationOptions<UpdateUpvoteMutation, UpdateUpvoteMutationVariables>;
export const DeleteUpvoteDocument = gql`
    mutation DeleteUpvote($input: DeleteUpvoteInput!, $condition: ModelUpvoteConditionInput) {
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
export type DeleteUpvoteMutationFn = Apollo.MutationFunction<DeleteUpvoteMutation, DeleteUpvoteMutationVariables>;

/**
 * __useDeleteUpvoteMutation__
 *
 * To run a mutation, you first call `useDeleteUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUpvoteMutation, { data, loading, error }] = useDeleteUpvoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteUpvoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUpvoteMutation, DeleteUpvoteMutationVariables>) {
        return Apollo.useMutation<DeleteUpvoteMutation, DeleteUpvoteMutationVariables>(DeleteUpvoteDocument, baseOptions);
      }
export type DeleteUpvoteMutationHookResult = ReturnType<typeof useDeleteUpvoteMutation>;
export type DeleteUpvoteMutationResult = Apollo.MutationResult<DeleteUpvoteMutation>;
export type DeleteUpvoteMutationOptions = Apollo.BaseMutationOptions<DeleteUpvoteMutation, DeleteUpvoteMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
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
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
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
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
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
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetPostDocument = gql`
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

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const ListPostsDocument = gql`
    query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * __useListPostsQuery__
 *
 * To run a query within a React component, call `useListPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPostsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListPostsQuery(baseOptions?: Apollo.QueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
        return Apollo.useQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, baseOptions);
      }
export function useListPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
          return Apollo.useLazyQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, baseOptions);
        }
export type ListPostsQueryHookResult = ReturnType<typeof useListPostsQuery>;
export type ListPostsLazyQueryHookResult = ReturnType<typeof useListPostsLazyQuery>;
export type ListPostsQueryResult = Apollo.QueryResult<ListPostsQuery, ListPostsQueryVariables>;
export const GetCommentDocument = gql`
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

/**
 * __useGetCommentQuery__
 *
 * To run a query within a React component, call `useGetCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommentQuery(baseOptions?: Apollo.QueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
        return Apollo.useQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, baseOptions);
      }
export function useGetCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
          return Apollo.useLazyQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, baseOptions);
        }
export type GetCommentQueryHookResult = ReturnType<typeof useGetCommentQuery>;
export type GetCommentLazyQueryHookResult = ReturnType<typeof useGetCommentLazyQuery>;
export type GetCommentQueryResult = Apollo.QueryResult<GetCommentQuery, GetCommentQueryVariables>;
export const ListCommentsDocument = gql`
    query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * __useListCommentsQuery__
 *
 * To run a query within a React component, call `useListCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCommentsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListCommentsQuery(baseOptions?: Apollo.QueryHookOptions<ListCommentsQuery, ListCommentsQueryVariables>) {
        return Apollo.useQuery<ListCommentsQuery, ListCommentsQueryVariables>(ListCommentsDocument, baseOptions);
      }
export function useListCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCommentsQuery, ListCommentsQueryVariables>) {
          return Apollo.useLazyQuery<ListCommentsQuery, ListCommentsQueryVariables>(ListCommentsDocument, baseOptions);
        }
export type ListCommentsQueryHookResult = ReturnType<typeof useListCommentsQuery>;
export type ListCommentsLazyQueryHookResult = ReturnType<typeof useListCommentsLazyQuery>;
export type ListCommentsQueryResult = Apollo.QueryResult<ListCommentsQuery, ListCommentsQueryVariables>;
export const GetUpvoteDocument = gql`
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

/**
 * __useGetUpvoteQuery__
 *
 * To run a query within a React component, call `useGetUpvoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpvoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpvoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUpvoteQuery(baseOptions?: Apollo.QueryHookOptions<GetUpvoteQuery, GetUpvoteQueryVariables>) {
        return Apollo.useQuery<GetUpvoteQuery, GetUpvoteQueryVariables>(GetUpvoteDocument, baseOptions);
      }
export function useGetUpvoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpvoteQuery, GetUpvoteQueryVariables>) {
          return Apollo.useLazyQuery<GetUpvoteQuery, GetUpvoteQueryVariables>(GetUpvoteDocument, baseOptions);
        }
export type GetUpvoteQueryHookResult = ReturnType<typeof useGetUpvoteQuery>;
export type GetUpvoteLazyQueryHookResult = ReturnType<typeof useGetUpvoteLazyQuery>;
export type GetUpvoteQueryResult = Apollo.QueryResult<GetUpvoteQuery, GetUpvoteQueryVariables>;
export const ListUpvotesDocument = gql`
    query ListUpvotes($filter: ModelUpvoteFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * __useListUpvotesQuery__
 *
 * To run a query within a React component, call `useListUpvotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUpvotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUpvotesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListUpvotesQuery(baseOptions?: Apollo.QueryHookOptions<ListUpvotesQuery, ListUpvotesQueryVariables>) {
        return Apollo.useQuery<ListUpvotesQuery, ListUpvotesQueryVariables>(ListUpvotesDocument, baseOptions);
      }
export function useListUpvotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUpvotesQuery, ListUpvotesQueryVariables>) {
          return Apollo.useLazyQuery<ListUpvotesQuery, ListUpvotesQueryVariables>(ListUpvotesDocument, baseOptions);
        }
export type ListUpvotesQueryHookResult = ReturnType<typeof useListUpvotesQuery>;
export type ListUpvotesLazyQueryHookResult = ReturnType<typeof useListUpvotesLazyQuery>;
export type ListUpvotesQueryResult = Apollo.QueryResult<ListUpvotesQuery, ListUpvotesQueryVariables>;
export const GetUserDocument = gql`
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

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const ListUsersDocument = gql`
    query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, baseOptions);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, baseOptions);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const OnCreatePostDocument = gql`
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

/**
 * __useOnCreatePostSubscription__
 *
 * To run a query within a React component, call `useOnCreatePostSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreatePostSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreatePostSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreatePostSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreatePostSubscription, OnCreatePostSubscriptionVariables>) {
        return Apollo.useSubscription<OnCreatePostSubscription, OnCreatePostSubscriptionVariables>(OnCreatePostDocument, baseOptions);
      }
export type OnCreatePostSubscriptionHookResult = ReturnType<typeof useOnCreatePostSubscription>;
export type OnCreatePostSubscriptionResult = Apollo.SubscriptionResult<OnCreatePostSubscription>;
export const OnUpdatePostDocument = gql`
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

/**
 * __useOnUpdatePostSubscription__
 *
 * To run a query within a React component, call `useOnUpdatePostSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdatePostSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdatePostSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdatePostSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdatePostSubscription, OnUpdatePostSubscriptionVariables>) {
        return Apollo.useSubscription<OnUpdatePostSubscription, OnUpdatePostSubscriptionVariables>(OnUpdatePostDocument, baseOptions);
      }
export type OnUpdatePostSubscriptionHookResult = ReturnType<typeof useOnUpdatePostSubscription>;
export type OnUpdatePostSubscriptionResult = Apollo.SubscriptionResult<OnUpdatePostSubscription>;
export const OnDeletePostDocument = gql`
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

/**
 * __useOnDeletePostSubscription__
 *
 * To run a query within a React component, call `useOnDeletePostSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeletePostSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeletePostSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeletePostSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeletePostSubscription, OnDeletePostSubscriptionVariables>) {
        return Apollo.useSubscription<OnDeletePostSubscription, OnDeletePostSubscriptionVariables>(OnDeletePostDocument, baseOptions);
      }
export type OnDeletePostSubscriptionHookResult = ReturnType<typeof useOnDeletePostSubscription>;
export type OnDeletePostSubscriptionResult = Apollo.SubscriptionResult<OnDeletePostSubscription>;
export const OnCreateCommentDocument = gql`
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

/**
 * __useOnCreateCommentSubscription__
 *
 * To run a query within a React component, call `useOnCreateCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateCommentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateCommentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateCommentSubscription, OnCreateCommentSubscriptionVariables>) {
        return Apollo.useSubscription<OnCreateCommentSubscription, OnCreateCommentSubscriptionVariables>(OnCreateCommentDocument, baseOptions);
      }
export type OnCreateCommentSubscriptionHookResult = ReturnType<typeof useOnCreateCommentSubscription>;
export type OnCreateCommentSubscriptionResult = Apollo.SubscriptionResult<OnCreateCommentSubscription>;
export const OnUpdateCommentDocument = gql`
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

/**
 * __useOnUpdateCommentSubscription__
 *
 * To run a query within a React component, call `useOnUpdateCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateCommentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateCommentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateCommentSubscription, OnUpdateCommentSubscriptionVariables>) {
        return Apollo.useSubscription<OnUpdateCommentSubscription, OnUpdateCommentSubscriptionVariables>(OnUpdateCommentDocument, baseOptions);
      }
export type OnUpdateCommentSubscriptionHookResult = ReturnType<typeof useOnUpdateCommentSubscription>;
export type OnUpdateCommentSubscriptionResult = Apollo.SubscriptionResult<OnUpdateCommentSubscription>;
export const OnDeleteCommentDocument = gql`
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

/**
 * __useOnDeleteCommentSubscription__
 *
 * To run a query within a React component, call `useOnDeleteCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteCommentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteCommentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteCommentSubscription, OnDeleteCommentSubscriptionVariables>) {
        return Apollo.useSubscription<OnDeleteCommentSubscription, OnDeleteCommentSubscriptionVariables>(OnDeleteCommentDocument, baseOptions);
      }
export type OnDeleteCommentSubscriptionHookResult = ReturnType<typeof useOnDeleteCommentSubscription>;
export type OnDeleteCommentSubscriptionResult = Apollo.SubscriptionResult<OnDeleteCommentSubscription>;
export const OnCreateUpvoteDocument = gql`
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

/**
 * __useOnCreateUpvoteSubscription__
 *
 * To run a query within a React component, call `useOnCreateUpvoteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateUpvoteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateUpvoteSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateUpvoteSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateUpvoteSubscription, OnCreateUpvoteSubscriptionVariables>) {
        return Apollo.useSubscription<OnCreateUpvoteSubscription, OnCreateUpvoteSubscriptionVariables>(OnCreateUpvoteDocument, baseOptions);
      }
export type OnCreateUpvoteSubscriptionHookResult = ReturnType<typeof useOnCreateUpvoteSubscription>;
export type OnCreateUpvoteSubscriptionResult = Apollo.SubscriptionResult<OnCreateUpvoteSubscription>;
export const OnUpdateUpvoteDocument = gql`
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

/**
 * __useOnUpdateUpvoteSubscription__
 *
 * To run a query within a React component, call `useOnUpdateUpvoteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateUpvoteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateUpvoteSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateUpvoteSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateUpvoteSubscription, OnUpdateUpvoteSubscriptionVariables>) {
        return Apollo.useSubscription<OnUpdateUpvoteSubscription, OnUpdateUpvoteSubscriptionVariables>(OnUpdateUpvoteDocument, baseOptions);
      }
export type OnUpdateUpvoteSubscriptionHookResult = ReturnType<typeof useOnUpdateUpvoteSubscription>;
export type OnUpdateUpvoteSubscriptionResult = Apollo.SubscriptionResult<OnUpdateUpvoteSubscription>;
export const OnDeleteUpvoteDocument = gql`
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

/**
 * __useOnDeleteUpvoteSubscription__
 *
 * To run a query within a React component, call `useOnDeleteUpvoteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteUpvoteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteUpvoteSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteUpvoteSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteUpvoteSubscription, OnDeleteUpvoteSubscriptionVariables>) {
        return Apollo.useSubscription<OnDeleteUpvoteSubscription, OnDeleteUpvoteSubscriptionVariables>(OnDeleteUpvoteDocument, baseOptions);
      }
export type OnDeleteUpvoteSubscriptionHookResult = ReturnType<typeof useOnDeleteUpvoteSubscription>;
export type OnDeleteUpvoteSubscriptionResult = Apollo.SubscriptionResult<OnDeleteUpvoteSubscription>;
export const OnCreateUserDocument = gql`
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

/**
 * __useOnCreateUserSubscription__
 *
 * To run a query within a React component, call `useOnCreateUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateUserSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateUserSubscription, OnCreateUserSubscriptionVariables>) {
        return Apollo.useSubscription<OnCreateUserSubscription, OnCreateUserSubscriptionVariables>(OnCreateUserDocument, baseOptions);
      }
export type OnCreateUserSubscriptionHookResult = ReturnType<typeof useOnCreateUserSubscription>;
export type OnCreateUserSubscriptionResult = Apollo.SubscriptionResult<OnCreateUserSubscription>;
export const OnUpdateUserDocument = gql`
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

/**
 * __useOnUpdateUserSubscription__
 *
 * To run a query within a React component, call `useOnUpdateUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateUserSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateUserSubscription, OnUpdateUserSubscriptionVariables>) {
        return Apollo.useSubscription<OnUpdateUserSubscription, OnUpdateUserSubscriptionVariables>(OnUpdateUserDocument, baseOptions);
      }
export type OnUpdateUserSubscriptionHookResult = ReturnType<typeof useOnUpdateUserSubscription>;
export type OnUpdateUserSubscriptionResult = Apollo.SubscriptionResult<OnUpdateUserSubscription>;
export const OnDeleteUserDocument = gql`
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

/**
 * __useOnDeleteUserSubscription__
 *
 * To run a query within a React component, call `useOnDeleteUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteUserSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteUserSubscription, OnDeleteUserSubscriptionVariables>) {
        return Apollo.useSubscription<OnDeleteUserSubscription, OnDeleteUserSubscriptionVariables>(OnDeleteUserDocument, baseOptions);
      }
export type OnDeleteUserSubscriptionHookResult = ReturnType<typeof useOnDeleteUserSubscription>;
export type OnDeleteUserSubscriptionResult = Apollo.SubscriptionResult<OnDeleteUserSubscription>;