import { Text, Flex, Box, Link, Heading } from '@chakra-ui/core';
import React from 'react';
import { EditDeletePostButtons } from './EditDeletePostButtons';
import UpdootSection from './UpdootSection';
import NextLink from 'next/link';
import { Post } from '../generated/graphql';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Flex backgroundColor='white' mb={45} p={5} shadow='lg' borderRadius='12px'>
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
          <Box ml='auto'>
            <EditDeletePostButtons id={post.id} creatorId={post.creator.id} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PostCard;

{
  /* <Text>{post.creator.username}</Text> */
}
