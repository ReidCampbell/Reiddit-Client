import React from 'react';
import { Box, Link, Flex, Button, Heading, Avatar } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { useApolloClient } from '@apollo/client';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const apolloClient = useApolloClient();
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });
  let body = null;

  if (loading) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/login'>
          <Link mr={5}>Login</Link>
        </NextLink>
        <NextLink href='/register'>
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        {/* <NextLink href='/create-post'> */}
        <Avatar size='sm' />
        {/* </NextLink> */}
        {/* <Button
          variant='link'
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
          isLoading={logoutLoading}
        >
          Logout
        </Button> */}
      </Flex>
    );
  }
  return (
    <Box bg='white' boxShadow='md' p={4} position='sticky' top={0} zIndex={1}>
      <Flex mx='auto' maxWidth='800px' align='center'>
        <NextLink href='/'>
          <Link>
            <Heading>Reiddit</Heading>
          </Link>
        </NextLink>
        <Box ml='auto'>{body}</Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
