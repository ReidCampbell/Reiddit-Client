import React from 'react';
import Layout from '../components/Layout';
import { usePostsQuery } from '../generated/graphql';
import { Button, Flex, Stack } from '@chakra-ui/core';
import NextLink from 'next/link';
import { withApollo } from '../utils/withApollo';
import PostCard from '../components/PostCard';

const Index = () => {
  const { data, loading, error, fetchMore, variables } = usePostsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!loading && !data) {
    return <div>Your query failed : {error?.message}</div>;
  }

  return (
    <Layout>
      <Flex align='center'>
        <NextLink href='/create-post'>
          <Button
            leftIcon='add'
            color='white'
            backgroundColor='#3d5af1'
            ml='auto'
            fontSize='14px'
            px={10}
          >
            Start a New Topic
          </Button>
        </NextLink>
      </Flex>
      {loading && !data ? (
        <div>loading</div>
      ) : (
        <Stack>
          {data!.posts.posts.map(post =>
            !post ? null : <PostCard key={post.id} post={post} />
          )}
        </Stack>
      )}
      {data && data.posts.hasMore && (
        <Flex>
          <Button
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor:
                    data.posts.posts[data.posts.posts.length - 1].createdAt,
                },
              });
            }}
            isLoading={loading}
            m='auto'
            my={8}
          >
            Load more
          </Button>
        </Flex>
      )}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
