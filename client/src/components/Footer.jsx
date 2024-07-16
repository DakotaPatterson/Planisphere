import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py="4" bg="orange">
      <Center>
        <Text fontSize="sm" color="gray.600">
          2024 Planisphere, all rights reserved
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
