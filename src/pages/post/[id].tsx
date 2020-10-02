import React from 'react';
import Layout from '../../components/Layout';
import { Box, Button, Heading } from '@chakra-ui/core';
import { useGetPostFromUrl } from '../../utils/useGetPostsFromUrl';
import { EditDeletePostButtons } from '../../components/EditDeletePostButtons';
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

  const [createComment] = useCreateCommentMutation();
  const router = useRouter();
  const intId = useGetIntId();

  if (loading) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>Could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <PostCard post={data.post}>
        {data.post.comments &&
          data.post.comments.map((comment: any) => {
            return <CommentCard key={comment.id} comment={comment} />;
          })}
      </PostCard>

      <Formik
        initialValues={{ text: '', postId: null }}
        onSubmit={async (values, { resetForm }) => {
          const { errors } = await createComment({
            variables: { ...values, postId: intId },
            update: cache => {
              cache.evict({ fieldName: 'comments:{}' });
            },
            refetchQueries: [
              {
                query: PostDocument,
                variables: {
                  id: intId,
                },
              },
            ],
          });
          if (!errors) {
            resetForm();
            router.push({
              pathname: `/post/${intId}`,
            });
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField
                textarea
                name='text'
                placeholder='text...'
                label='Body'
              />
            </Box>
            <Button mt={4} type='submit' isLoading={isSubmitting}>
              Create Comment
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Post);
