import React from 'react';
import { Box } from '@chakra-ui/core';
import NavBar from './NavBar';

export type WrapperVariant = 'small' | 'regular';

interface ContainerProps {
  variant?: WrapperVariant;
}

const Container: React.FC<ContainerProps> = ({
  variant = 'regular',
  children,
}) => {
  return (
    <>
      <NavBar />
      <Box
        maxW={variant === 'regular' ? '800px' : '400px'}
        w='100%'
        h='100%'
        mx='auto'
        minHeight='calc(100vh - 109px)'
      >
        {children}
      </Box>
    </>
  );
};

export default Container;
