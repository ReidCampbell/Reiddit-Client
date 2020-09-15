import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import { useForgotPasswordMutation } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async values => {
          await forgotPassword({ variables: values });
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              If an account with thay email exists we will send you an email
            </Box>
          ) : (
            <Form>
              <InputField
                name='email'
                placeholder='email'
                label='email'
                type='email'
              />
              <Button mt={4} type='submit' isLoading={isSubmitting}>
                Forgot Password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default withApollo({ ssr: false })(ForgotPassword);
