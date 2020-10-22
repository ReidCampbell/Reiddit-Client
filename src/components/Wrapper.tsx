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
import { ApolloClient } from '@apollo/client';

export interface WrapperProps {
  client: ApolloClient<any>;
  refetch: any;
}

const Wrapper: React.FC<WrapperProps> = ({ client, refetch, children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width:51.95rem)' });
  const [sort, setSort] = useState('top');

  return (
    <SimpleGrid columns={[1, 1, 3, 3]} mt={6} justifyContent='center'>
      {!isTabletOrMobile && (
        <Flex justify='center' mt='22px'>
          <List w='75%' spacing={1}>
            <Flex>
              <Text ml='2.3rem' mb={2} color='#aaaaaa'>
                Menu
              </Text>
            </Flex>
            <ListItem>
              <Flex>
                <Box
                  backgroundColor={sort === 'top' ? '#3d5af1' : ''}
                  w='5px'
                />
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
                  pl={2}
                  backgroundColor={sort === 'top' ? '#e8ebfb' : ''}
                >
                  <Flex align='center'>
                    <Box
                      as={MdWhatshot}
                      color={sort === 'top' ? '#3d5af1' : '#aaaaaa'}
                    />
                    <Text
                      color={sort === 'top' ? '#3d5af1' : '#aaaaaa'}
                      ml={2}
                      py='0.25rem'
                    >
                      Top
                    </Text>
                  </Flex>
                </PseudoBox>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex>
                <Box
                  backgroundColor={sort === 'new' ? '#3d5af1' : ''}
                  w='5px'
                />
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
                  pl={2}
                  backgroundColor={sort === 'new' ? '#e8ebfb' : ''}
                >
                  <Flex align='center'>
                    <Box
                      as={MdFiberNew}
                      color={sort === 'new' ? '#3d5af1' : '#aaaaaa'}
                    />
                    <Text
                      color={sort === 'new' ? '#3d5af1' : '#aaaaaa'}
                      ml={2}
                      py='0.25rem'
                    >
                      New
                    </Text>
                  </Flex>
                </PseudoBox>
              </Flex>
            </ListItem>
          </List>
        </Flex>
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
