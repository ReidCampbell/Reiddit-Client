import { Text, Flex, Box, Avatar, IconButton } from "@chakra-ui/core";
import React, { useState } from "react";
import dayjs from "dayjs";
import { Formik, Form } from "formik";
import {
  ListPostsDocument,
  useCreateCommentMutation
} from "../generated/graphql";
import InputField from "./InputField";
import { useGetPostId } from "../utils/useGetIntId";
import relativeTime from "dayjs/plugin/relativeTime";
import { RiMailSendLine } from "react-icons/ri";

interface CommentCardProps {
  comment: any;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [createComment] = useCreateCommentMutation();
  const postID = useGetPostId();

  dayjs.extend(relativeTime);
  const commentTime = dayjs().to(parseInt(comment.createdAt));

  return (
    <Box mt={4} p={4} backgroundColor="#fcfcfc">
      <Flex mb={3} justify="space-between">
        <Flex>
          <Avatar
            size="xs"
            mr={2}
            src={comment.creator.avatar ? comment.creator.avatar : ""}
          />
          <Text color="#3d5af1">{comment.creator.username}</Text>
        </Flex>
        <Text fontSize="xs" color="#aaaaaa">
          {commentTime}
        </Text>
      </Flex>
      <Flex>
        {/* <UpdootSection post={comment.post} /> */}
        <Text ml="2rem" mb={3}>
          {comment.text}
        </Text>
      </Flex>
      <Text
        onClick={() => {
          setReplyOpen(!replyOpen);
        }}
        fontSize="sm"
        color="#aaaaaa"
        ml="2rem"
        cursor="pointer"
      >
        Reply
      </Text>
      {/* {replyOpen && (
        <Formik
          initialValues={{ text: "", commentId: null }}
          onSubmit={async (values, { resetForm }) => {
            const { errors } = await createComment({
              variables: {
                input: {
                  ...values,
                }
                // commentID: comment.id,
                // commentOrReply: comment.postId ? "comment" : "reply"
              },
              update: (cache: any) => {
                cache.evict({ fieldName: "replies:{}" });
              },
              refetchQueries: [
                {
                  query: ListPostsDocument,
                  variables: {
                    id: postID
                  }
                }
              ]
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
                <InputField textarea label="" name="text" placeholder="" />
              </Box>
              <Flex justify="flex-end">
                <IconButton
                  aria-label="Reply"
                  icon={RiMailSendLine}
                  mt={4}
                  type="submit"
                  isLoading={isSubmitting}
                  color="#ffffff"
                  backgroundColor="#3d5af1"
                />
              </Flex>
            </Form>
          )}
        </Formik>
      )} */}
      {comment?.replies?.map((reply: any) => {
        return <CommentCard key={reply.id} comment={reply} />;
      })}
    </Box>
  );
};

export default CommentCard;
