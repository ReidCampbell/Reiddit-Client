import { Text, Flex, Box, Link, Heading, Avatar } from '@chakra-ui/core';
import React from 'react';
import UpdootSection from './UpdootSection';
import NextLink from 'next/link';
import { Divider } from '@chakra-ui/core';
import dayjs from 'dayjs';

interface PostCardProps {
  post: any;
}

const PostCard: React.FC<PostCardProps> = ({ post, children }) => {
  const getPostTime = () => {
    const now = dayjs();
    const postTime = dayjs(parseInt(post.createdAt));
    const timeSincePost = now.diff(postTime, 'minute');

    if (timeSincePost / (60 * 24) > 1) {
      return `${Math.floor(timeSincePost / (60 * 24))} day(s) ago`;
    } else if (timeSincePost / 24 > 1) {
      return `${Math.floor(timeSincePost / 24)} hour(s) ago`;
    }

    return `${Math.floor(timeSincePost)} minute(s) ago`;
  };

  const calculateComments = () => {
    let comments: number[] = [];
    post.comments.map((comment: any) => {
      comments.push(comment.replies.length);
    });

    return comments.reduce((a, b) => a + b, 0) + post?.comments?.length;
  };

  return (
    <Flex
      backgroundColor='white'
      my={22}
      mx={5}
      p={5}
      shadow='lg'
      borderRadius='12px'
    >
      <UpdootSection post={post} />
      <Box px='2rem' flex={1}>
        <NextLink href='/post/[id]' as={`/post/${post.id}`}>
          <Link ml='auto'>
            <Heading color='#444444' fontSize='xl'>
              {post.title}
            </Heading>
          </Link>
        </NextLink>
        <Flex align='center'>
          <Text color='#959595' flex={1} mt={4}>
            {post.text ? post.text : post.textSnippet}
          </Text>
        </Flex>
        <Divider mt={4} borderColor='#aaaaaa' />
        <Flex align='center' mt={4}>
          <Avatar size='xs' mr={4} />
          <Flex align='baseline'>
            <Text fontSize='sm' color='#aaaaaa' mr={15}>
              Posted by{' '}
              <Box as='span' color='#3d5af1' fontSize='sm'>
                {post.creator.username}
              </Box>
            </Text>
            <Text fontSize='xs' color='#aaaaaa'>
              {getPostTime()}
            </Text>
            <Text>{calculateComments()}</Text>
          </Flex>
        </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default PostCard;
