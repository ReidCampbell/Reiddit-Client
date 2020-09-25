import { Box } from '@chakra-ui/core';
import React from 'react';
import NavBar from './NavBar';
import Wrapper, { WrapperVariant } from './Wrapper';

interface LayoutProps {
  variant?: WrapperVariant;
}

const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <Box backgroundColor='#fcfcfc'>
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </Box>
  );
};

export default Layout;
