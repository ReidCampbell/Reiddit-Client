import React from 'react';
import Layout from '../components/Layout';
import { usePostsQuery } from '../generated/graphql';
import { Button, Flex, Stack } from '@chakra-ui/core';
import NextLink from 'next/link';
import { withApollo } from '../utils/withApollo';
import PostCard from '../components/PostCard';

const Index = () => {
  const { data, loading, fetchMore, variables } = usePostsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!loading && !data) {
    return <div>Your query failed :</div>;
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
          {data!.posts.posts.map(p =>
            !p ? null : (
              // <Flex key={p.id} p={5} shadow='sm' borderWidth='1px'>
              //   <UpdootSection post={p} />
              //   <Box ml={4} flex={1}>
              //     <NextLink href='/post/[id]' as={`/post/${p.id}`}>
              //       <Link ml='auto'>
              //         <Heading fontSize='xl'>{p.title}</Heading>
              //       </Link>
              //     </NextLink>
              //     <Text>{p.creator.username}</Text>
              //     <Flex align='center'>
              //       <Text flex={1} mt={4}>
              //         {p.textSnippet}
              //       </Text>
              //       <Box ml='auto'>
              //         <EditDeletePostButtons
              //           id={p.id}
              //           creatorId={p.creator.id}
              //         />
              //       </Box>
              //     </Flex>
              //   </Box>
              // </Flex>
              <PostCard key={p.id} post={p} />
            )
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
