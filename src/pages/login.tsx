import React from "react";
import { Formik, Form } from "formik";
import { Button, Box, Link, Flex } from "@chakra-ui/core";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Container from "../components/Container";
import InputField from "../components/InputField";
// import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';
import { toErrorMap } from "../utils/toErrorMap";
import { withApollo } from "../utils/withApollo";

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  // const [login] = useLoginMutation();
  return (
    <Container variant="small">
      {/* <Formik
        initialValues={{ usernameOrEmail: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: values,
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: 'Query',
                  me: data?.login.user,
                },
              });
              cache.evict({ fieldName: 'posts:{}' });
            },
          });
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            if (typeof router.query.next === 'string') {
              router.push(router.query.next);
            } else {
              router.push('/');
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name='usernameOrEmail'
              placeholder='username or email'
              label='Username or Email'
            />
            <Box mt={4}>
              <InputField
                name='password'
                placeholder='password'
                label='Password'
                type='password'
              />
            </Box>
            <Flex>
              <NextLink href='/forgot-password'>
                <Link ml='auto'>Forgot Password?</Link>
              </NextLink>
            </Flex>
            <Button mt={4} type='submit' isLoading={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik> */}
    </Container>
  );
};

export default withApollo({ ssr: false })(Login);
