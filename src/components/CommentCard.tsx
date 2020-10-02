import { Text, Flex, Box, Avatar } from '@chakra-ui/core';
import React from 'react';
import UpdootSection from './UpdootSection';
import dayjs from 'dayjs';

interface CommentCardProps {
  comment: any;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
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
      <Text>Reply</Text>
    </Box>
  );
};

export default CommentCard;
