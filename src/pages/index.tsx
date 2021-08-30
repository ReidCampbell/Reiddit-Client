import React from "react";
import Layout from "../components/Layout";
import { useListPostsQuery } from "../generated/graphql";
import { Button, Flex, Spinner, Stack } from "@chakra-ui/core";
import { withApollo } from "../utils/withApollo";
import PostCard from "../components/PostCard";

const Index = () => {
  const {
    data,
    loading,
    error,
    fetchMore,
    variables,
    refetch,
    client
  } = useListPostsQuery({
    variables: {
      limit: 15
      // column: "points",
      // order: "DESC",
      // cursor: null
    },
    notifyOnNetworkStatusChange: true,
    partialRefetch: true
  });

  if (!loading && !data) {
    return <div>Your query failed : {error?.message}</div>;
  }

  return (
    <Layout client={client} refetch={refetch}>
      {loading && !data ? (
        <Flex justify="center" align="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <Stack>
          {data?.listPosts?.items?.map(post => (
            <PostCard key={post?.id} post={post} />
          ))}
        </Stack>
      )}
      {/* {data?.listPosts.hasMore && (
        <Flex>
          <Button
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor:
                    data?.posts.posts[data.posts.posts.length - 1].createdAt
                }
              });
            }}
            isLoading={loading}
            m="auto"
            my={8}
          >
            Load more
          </Button>
        </Flex>
      )} */}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
