import { Text, Flex, Box, Link, Heading, Avatar, Icon } from '@chakra-ui/core';
import React, { useState } from 'react';
import UpdootSection from './UpdootSection';
import NextLink from 'next/link';
import { Divider } from '@chakra-ui/core';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import relativeTime from 'dayjs/plugin/relativeTime';
import { EditDeletePostButtons } from './EditDeletePostButtons';
import CreateCommentForm from './CreateCommentForm';

interface PostsCardProps {
  post: any;
  postIsOpen?: boolean;
}

const PostsCard: React.FC<PostsCardProps> = ({
  post,
  postIsOpen,
  children,
}) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const router = useRouter();

  dayjs.extend(relativeTime);
  const postTime = dayjs().to(parseInt(post.createdAt));

  const calculateComments = () => {
    if (!post.comments) return;

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
      minWidth='60vw'
      borderRadius='12px'
      onDoubleClick={() =>
        router.push({
          pathname: `/post/${post.id}`,
        })
      }
    >
      <UpdootSection post={post} />
      <Box px='2rem' flex={1}>
        <Flex justify='space-between'>
          <NextLink href='/post/[id]' as={`/post/${post.id}`}>
            <Link>
              <Heading color='#444444' fontSize='xl'>
                {post.title}
              </Heading>
            </Link>
          </NextLink>
          <Box>
            {postIsOpen && (
              <EditDeletePostButtons id={post.id} creatorId={post.creator.id} />
            )}
          </Box>
        </Flex>
        <Flex align='center'>
          <Text color='#959595' flex={1} mt={4}>
            {post.text ? post.text : post.textSnippet}
          </Text>
        </Flex>
        <Divider mt={4} borderColor='#aaaaaa' />
        <Flex mt={4} justify='space-between'>
          <Flex align='center'>
            <Avatar
              size='xs'
              mr={4}
              src={post.creator.avatar ? post.creator.avatar : ''}
            />
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
        {postIsOpen && (
          <Text
            onClick={() => {
              setReplyOpen(!replyOpen);
            }}
            fontSize='sm'
            color='#aaaaaa'
            cursor='pointer'
            mt={2}
          >
            Reply
          </Text>
        )}
        <Box>
          {replyOpen && <CreateCommentForm setReplyOpen={setReplyOpen} />}
        </Box>
        {children}
      </Box>
    </Flex>
  );
};

export default PostsCard;
