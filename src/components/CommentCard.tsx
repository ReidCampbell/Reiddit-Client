import { Text, Flex, Box, Avatar, Button } from '@chakra-ui/core';
import React, { useState } from 'react';
import UpdootSection from './UpdootSection';
import dayjs from 'dayjs';
import { Formik, Form } from 'formik';
import { PostDocument, useCreateReplyMutation } from '../generated/graphql';
import InputField from './InputField';
import { useGetIntId } from '../utils/useGetIntId';
import { useRouter } from 'next/router';

interface CommentCardProps {
  comment: any;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [createReply] = useCreateReplyMutation();
  const intId = useGetIntId();
  const router = useRouter();

  const getCommentTime = () => {
    const now = dayjs();
    const commentTime = dayjs(parseInt(comment.createdAt));
    const timeSinceComment = now.diff(commentTime, 'minute');

    if (timeSinceComment / (60 * 24) > 1) {
      return `${Math.floor(timeSinceComment / (60 * 24))} day(s) ago`;
    } else if (timeSinceComment / 24 > 1) {
      return `${Math.floor(timeSinceComment / 24)} hour(s) ago`;
    }

    return `${Math.floor(timeSinceComment)} minute(s) ago`;
  };

  return (
    <Box mt={4} p={4} backgroundColor='#fcfcfc'>
      <Flex mb={3} justify='space-between'>
        <Flex>
          <Avatar size='xs' mr={2} />
          <Text>{comment.creator.username}</Text>
        </Flex>
        <Text>{getCommentTime()}</Text>
      </Flex>
      <Flex>
        {/* <UpdootSection post={comment.post} /> */}
        <Text mb={3}>{comment.text}</Text>
      </Flex>
      <Text
        onClick={() => {
          setReplyOpen(!replyOpen);
        }}
      >
        Reply
      </Text>
      {replyOpen && (
        <Formik
          initialValues={{ text: '', commentId: null }}
          onSubmit={async (values, { resetForm }) => {
            const { errors } = await createReply({
              variables: { ...values, commentId: comment.id },
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
                <InputField textarea name='text' placeholder='' label='' />
              </Box>
              <Button mt={4} type='submit' isLoading={isSubmitting}>
                Create Comment
              </Button>
            </Form>
          )}
        </Formik>
      )}
      {comment?.replies?.map((reply: any) => {
        return <CommentCard key={reply.id} comment={reply} />;
      })}
    </Box>
  );
};

export default CommentCard;
