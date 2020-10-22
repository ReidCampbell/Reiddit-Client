import { Box } from '@chakra-ui/core';
import Head from 'next/head';
import React from 'react';
import NavBar from './NavBar';
import Wrapper, { WrapperProps } from './Wrapper';

const Layout: React.FC<WrapperProps> = ({ client, refetch, children }) => {
  return (
    <>
      <Head>
        <title>Reiddit</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>
      <Box h='100%' backgroundColor='#fcfcfc'>
        <NavBar />
        <Wrapper client={client} refetch={refetch}>
          {children}
        </Wrapper>
      </Box>
    </>
  );
};

export default Layout;
