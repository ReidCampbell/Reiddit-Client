import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/core';
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
    <Flex direction='column' align='center'>
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
        variantColor={post.voteStatus === 1 ? '#3d5af1' : undefined}
        variant='ghost'
        icon='arrow-up'
        size='lg'
        aria-label='Updoot'
        color='#aaaaaa'
      />
      <Text
        color={
          post.voteStatus === -1
            ? '#ff304f'
            : post.voteStatus === 1
            ? '#3d5af1'
            : '#aaaaaa'
        }
      >
        {post.points}
      </Text>
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
        variantColor={post.voteStatus === -1 ? '#ff304f' : undefined}
        variant='ghost'
        icon='arrow-down'
        size='lg'
        aria-label='Downdoot'
        color='#aaaaaa'
      />
    </Flex>
  );
};

export default UpdootSection;
