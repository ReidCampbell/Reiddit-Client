import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  PseudoBox,
  SimpleGrid,
  Text,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { MdFiberNew, MdWhatshot } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

interface WrapperProps {
  client: any;
  refetch: any;
}

const Wrapper: React.FC<WrapperProps> = ({ client, refetch, children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width:51.95rem)' });
  const [sort, setSort] = useState('top');

  return (
    <SimpleGrid columns={[1, 1, 3, 3]} mt={6} justifyContent='center'>
      {!isTabletOrMobile && (
        <Box mt='22px'>
          <List w='100%'>
            <Flex justify='flex-end'>
              <Text color='#aaaaaa'>Menu</Text>
            </Flex>
            <ListItem>
              <PseudoBox
                as='button'
                onClick={() => {
                  if (sort === 'new') return;
                  setSort('new');
                  refetch({
                    limit: 15,
                    column: 'createdAt',
                    order: 'DESC',
                    cursor: null,
                  });
                  client.resetStore();
                }}
                w='100%'
              >
                <Flex align='center' justify='flex-end'>
                  <Box as={MdFiberNew} color='#aaaaaa' />
                  <Text color='#aaaaaa'>New</Text>
                </Flex>
              </PseudoBox>
            </ListItem>
            <ListItem>
              <PseudoBox
                as='button'
                onClick={() => {
                  if (sort === 'top') return;
                  setSort('top');
                  refetch({
                    limit: 15,
                    column: 'points',
                    order: 'DESC',
                    cursor: null,
                  });
                  client.resetStore();
                }}
                w='100%'
              >
                <Flex align='center' justify='flex-end'>
                  <Box as={MdWhatshot} color='#aaaaaa' />
                  <Text color='#aaaaaa'>Top</Text>
                </Flex>
              </PseudoBox>
            </ListItem>
          </List>
        </Box>
      )}
      {children}
      {!isTabletOrMobile && (
        <Box mt='22px'>
          <NextLink href='/create-post'>
            <Button
              leftIcon='add'
              color='white'
              backgroundColor='#3d5af1'
              ml='auto'
              fontSize='14px'
              px={10}
              mr='1rem'
            >
              Start a New Topic
            </Button>
          </NextLink>
        </Box>
      )}
    </SimpleGrid>
  );
};

export default Wrapper;
