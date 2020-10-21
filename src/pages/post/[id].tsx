import React from 'react';
import Container from '../../components/Container';
import { Box, Button } from '@chakra-ui/core';
import { useGetPostFromUrl } from '../../utils/useGetPostsFromUrl';
import { withApollo } from '../../utils/withApollo';
import {
  useCreateCommentMutation,
  PostDocument,
} from '../../generated/graphql';
import { Formik, Form } from 'formik';
import InputField from '../../components/InputField';
import { useRouter } from 'next/router';
import { useGetIntId } from '../../utils/useGetIntId';
import CommentCard from '../../components/CommentCard';
import PostCard from '../../components/PostCard';

const Post: React.FC = ({}) => {
  const { data, loading } = useGetPostFromUrl();

  if (loading) {
    return (
      <Container>
        <div>loading...</div>
      </Container>
    );
  }

  if (!data?.post) {
    return (
      <Container>
        <Box>Could not find post</Box>
      </Container>
    );
  }

  return (
    <Container>
      <PostCard post={data.post} postIsOpen>
        {data.post.comments &&
          data.post.comments.map((comment: any) => {
            return <CommentCard key={comment.id} comment={comment} />;
          })}
      </PostCard>
    </Container>
  );
};

export default withApollo({ ssr: true })(Post);
