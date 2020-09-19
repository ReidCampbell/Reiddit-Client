import React from 'react';
import { Flex, IconButton } from '@chakra-ui/core';
import {
  PostSnippetFragment,
  useVoteMutation,
  VoteMutation,
} from '../generated/graphql';
import { ApolloCache, gql } from '@apollo/client';

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const updateAfterVote = (
  value: number,
  postId: number,
  cache: ApolloCache<VoteMutation>
) => {
  const data = cache.readFragment<{
    id: number;
    points: number;
    voteStatus: number | null;
  }>({
    id: 'Post:' + postId,
    fragment: gql`
      fragment _ on Post {
        id
        points
        voteStatus
      }
    `,
  });

  if (data) {
    if (data.voteStatus === value) {
      return;
    }
    const newPoints =
      (data.points as number) + (!data.voteStatus ? 1 : 2) * value;
    cache.writeFragment({
      id: 'Post:' + postId,
      fragment: gql`
        fragment __ on Post {
          points
          voteStatus
        }
      `,
      data: { points: newPoints, voteStatus: value },
    });
  }
};

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [vote] = useVoteMutation();
  return (
    <Flex direction='column' justify='center' align='center'>
      <IconButton
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          await vote({
            variables: {
              postId: post.id,
              value: 1,
            },
            update: cache => updateAfterVote(1, post.id, cache),
          });
        }}
        variantColor={post.voteStatus === 1 ? 'green' : undefined}
        variant='ghost'
        icon='chevron-up'
        aria-label='Updoot'
      />
      {post.points}
      <IconButton
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          await vote({
            variables: {
              postId: post.id,
              value: -1,
            },
            update: cache => updateAfterVote(-1, post.id, cache),
          });
        }}
        variantColor={post.voteStatus === -1 ? 'red' : undefined}
        variant='ghost'
        icon='chevron-down'
        aria-label='Downdoot'
      />
    </Flex>
  );
};

export default UpdootSection;
