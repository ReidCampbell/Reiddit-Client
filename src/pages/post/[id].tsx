import React from "react";
import Container from "../../components/Container";
import { Box, Flex, Spinner } from "@chakra-ui/core";
import { useGetPostFromUrl } from "../../utils/useGetPostsFromUrl";
import { withApollo } from "../../utils/withApollo";
import CommentCard from "../../components/CommentCard";
import PostCard from "../../components/PostCard";

const Post: React.FC = ({}) => {
  const { data, loading } = useGetPostFromUrl();

  if (loading) {
    return (
      <Container>
        <Flex h="calc(100vh - 82px)" justify="center" align="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      </Container>
    );
  }

  if (!data?.getPost) {
    return (
      <Container>
        <Box>Could not find post</Box>
      </Container>
    );
  }

  return (
    <Container>
      <PostCard post={data.getPost} postIsOpen>
        {data.getPost.comments &&
          data.getPost.comments.items?.map((comment: any) => {
            return <CommentCard key={comment.id} comment={comment} />;
          })}
      </PostCard>
    </Container>
  );
};

export default withApollo({ ssr: true })(Post);
