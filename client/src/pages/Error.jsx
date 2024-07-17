import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bg="gray.100"
    p={4}
    >

      <VStack spacing={4} textAlign="center">
        <Heading as ="h1" size="2xl" color="red.500">
          Houston, We Have a Problem!
        </Heading>
        <Text fontSize="xl" color="gray.700">
          It looks like this page is lost in space. Please try again later or navigate to a safe orbit.
        </Text>
        <Button colorScheme="teal" onClick={handleGoBack}>
          Return to Mission Control
        </Button>
      </VStack>
    </Box>
  );
}

