import { Box, Button, Flex } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import InputField from "../components/InputField";
import Container from "../components/Container";
import { useCreatePostMutation } from "../generated/graphql";
import { useIsAuth } from "../utils/useIsAuth";
import { withApollo } from "../utils/withApollo";

const CreatePost: React.FC<{}> = ({}) => {
  useIsAuth();
  const [createPost] = useCreatePostMutation();
  const router = useRouter();

  return (
    <Container>
      <Flex h="calc(100vh - 109px)" align="center" justify="center">
        <Formik
          initialValues={{
            title: "",
            content: "",
            creatorID: "70efb494-7cd3-4299-b7cc-c583e08b3467",
            points: 1
          }}
          onSubmit={async values => {
            const { errors } = await createPost({
              variables: { input: values },
              update: cache => {
                cache.evict({ fieldName: "posts:{}" });
              }
            });
            if (!errors) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="title" placeholder="title" label="Title" />
              <Box mt={4} w="50vw">
                <InputField
                  textarea
                  name="content"
                  placeholder="text..."
                  label="Body"
                />
              </Box>
              <Button mt={4} type="submit" isLoading={isSubmitting}>
                Create Post
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Container>
  );
};

export default withApollo({ ssr: false })(CreatePost);
