import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" pt="3" mt="5" pb="3" bg="orange" borderRadius="md">
      <Center>
        <Text fontSize="sm" color="gray.600">
          2024 Planisphere. All rights reserved.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
