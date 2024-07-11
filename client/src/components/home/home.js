// src/components/Home.js

import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

function Home() {
  return (
    <Flex justify="center" align="center" minH="100vh">
      <Box w="300px" h="200px" bg="blue.500" m="4">
        Box 1
      </Box>
      <Box w="300px" h="200px" bg="green.500" m="4">
        Box 2
      </Box>
      <Box w="300px" h="200px" bg="orange.500" m="4">
        Box 3
      </Box>
    </Flex>
  );
}

export default Home;
