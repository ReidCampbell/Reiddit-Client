import { Text, Flex, Box, Link, Heading, Avatar, Icon } from '@chakra-ui/core';
import React from 'react';
import UpdootSection from './UpdootSection';
import NextLink from 'next/link';
import { Divider } from '@chakra-ui/core';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import relativeTime from 'dayjs/plugin/relativeTime';

interface PostCardProps {
  post: any;
}

const PostCard: React.FC<PostCardProps> = ({ post, children }) => {
  dayjs.extend(relativeTime);
  const postTime = dayjs().to(parseInt(post.createdAt));

  const calculateComments = () => {
    let comments: number[] = [];
    post.comments.map((comment: any) => {
      comments.push(comment.replies.length);
    });

    return comments.reduce((a, b) => a + b, 0) + post?.comments?.length;
  };

  const router = useRouter();

  return (
    <Flex
      backgroundColor='white'
      my={22}
      mx={5}
      p={5}
      shadow='lg'
      borderRadius='12px'
      onDoubleClick={() =>
        router.push({
          pathname: `/post/${post.id}`,
        })
      }
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
        <Flex mt={4} justify='space-between'>
          <Flex align='center'>
            <Avatar size='xs' mr={4} />
            <Text fontSize='sm' color='#aaaaaa' mr={15}>
              Posted by{' '}
              <Box as='span' color='#3d5af1' fontSize='sm'>
                {post.creator.username}
              </Box>
            </Text>
            <Text fontSize='xs' color='#aaaaaa'>
              {postTime}
            </Text>
          </Flex>
          <Flex align='baseline'>
            <Icon name='chat' size='12px' mr={1} color='#aaaaaa' />
            <Text fontSize='14px' color='#aaaaaa'>
              {calculateComments()}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default PostCard;
