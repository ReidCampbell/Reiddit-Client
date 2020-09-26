import { Text, Flex, Box, Link, Heading, Avatar } from '@chakra-ui/core';
import React from 'react';
import UpdootSection from './UpdootSection';
import NextLink from 'next/link';
import { Post } from '../generated/graphql';
import { Divider } from '@chakra-ui/core';
import dayjs from 'dayjs';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const now = dayjs();
  const postTime = dayjs(parseInt(post.createdAt));
  let timeSincePost = now.diff(postTime, 'day');

  return (
    <Flex backgroundColor='white' mt={45} p={5} shadow='lg' borderRadius='12px'>
      <UpdootSection post={post} />
      <Box ml={4} flex={1}>
        <NextLink href='/post/[id]' as={`/post/${post.id}`}>
          <Link ml='auto'>
            <Heading color='#444444' fontSize='xl'>
              {post.title}
            </Heading>
          </Link>
        </NextLink>
        <Flex align='center'>
          <Text color='#959595' flex={1} mt={4}>
            {post.textSnippet}
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
              {timeSincePost} days ago
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PostCard;

{
  /* <Text>{post.creator.username}</Text> */
}
