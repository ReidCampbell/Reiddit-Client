import { Box } from '@chakra-ui/core';
import React from 'react';
import NavBar from './NavBar';
import Wrapper from './Wrapper';

interface LayoutProps {
  client: any;
  refetch: any;
}

const Layout: React.FC<LayoutProps> = ({ client, refetch, children }) => {
  return (
    <Box h='100%' backgroundColor='#fcfcfc'>
      <NavBar />
      <Wrapper client={client} refetch={refetch}>
        {children}
      </Wrapper>
    </Box>
  );
};

export default Layout;
