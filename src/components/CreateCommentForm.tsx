import { Box, Flex, IconButton } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { PostDocument, useCreateCommentMutation } from '../generated/graphql';
import { useGetIntId } from '../utils/useGetIntId';
import InputField from './InputField';

interface CreateCommentFormProps {
  setReplyOpen: (state: boolean) => void;
}

const CreateCommentForm: React.FC<CreateCommentFormProps> = ({
  setReplyOpen,
}) => {
  const [createComment] = useCreateCommentMutation();
  const intId = useGetIntId();

  return (
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
          setReplyOpen(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box mt={4}>
            <InputField textarea name='text' label='' placeholder='' />
          </Box>
          <Flex justify='flex-end'>
            <IconButton
              aria-label='Reply'
              icon={RiMailSendLine}
              mt={4}
              type='submit'
              isLoading={isSubmitting}
              color='#ffffff'
              backgroundColor='#3d5af1'
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCommentForm;
