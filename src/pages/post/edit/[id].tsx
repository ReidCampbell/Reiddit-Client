import { Box, Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import InputField from "../../../components/InputField";
import Container from "../../../components/Container";
import {
  useGetPostQuery,
  useUpdatePostMutation
} from "../../../generated/graphql";
import { useGetPostId } from "../../../utils/useGetIntId";
import { withApollo } from "../../../utils/withApollo";

const EditPost = ({}) => {
  const router = useRouter();
  const postID = useGetPostId();
  const { data, loading } = useGetPostQuery({
    skip: !postID,
    variables: {
      id: postID
    }
  });
  const [updatePost] = useUpdatePostMutation();

  if (loading) {
    return (
      <Container>
        <div>Loading...</div>
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
    <Container variant="small">
      <Formik
        initialValues={{
          title: data.getPost.title,
          content: data.getPost.content
        }}
        onSubmit={async values => {
          await updatePost({ variables: { input: { id: postID, ...values } } });
          router.back();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="content"
                placeholder="text..."
                label="Body"
              />
            </Box>
            <Button mt={4} type="submit" isLoading={isSubmitting}>
              Update Post
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default withApollo({ ssr: false })(EditPost);
