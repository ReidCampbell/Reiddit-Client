import React from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  List,
  ListItem,
  PseudoBox,
  Text,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { MdFiberNew, MdWhatshot } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

interface WrapperProps {}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <Grid templateColumns={isTabletOrMobile ? '' : '20vw 60vw 20vw'} mt={6}>
      {!isTabletOrMobile && (
        <Box mt='22px'>
          <List w='100%'>
            <Flex justify='flex-end'>
              <Text color='#aaaaaa'>Menu</Text>
            </Flex>
            <ListItem>
              <PseudoBox
                as='button'
                // onClick={() => {
                //   setSortQuery('ASC');
                //   refetch({
                //     limit: 15,
                //     column: 'createdAt',
                //     order: 'DESC',
                //     cursor: null,
                //   });
                //   client.resetStore();
                // }}
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
                // onClick={() => {
                //   refetch({
                //     limit: 15,
                //     column: 'points',
                //     order: 'DESC',
                //     cursor: null,
                //   });
                //   client.resetStore();
                // }}
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
            >
              Start a New Topic
            </Button>
          </NextLink>
        </Box>
      )}
    </Grid>
  );
};

export default Wrapper;
