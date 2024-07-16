import React, { useState } from 'react';
import {
  Box, Button, FormControl, FormLabel, Input, Stack, Heading, useToast
} from '@chakra-ui/react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here, you would normally call your backend API
    toast({
      title: "Login Attempt",
      description: `Email: ${email}, Password: ${password}`,
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Stack spacing={4} w="full" maxW="md" p={6} boxShadow="lg" rounded="md" bg="white">
        <Heading fontSize="2xl" textAlign="center">Sign in to your account</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button mt={4} colorScheme="blue" onClick={handleSubmit} isFullWidth>
          Sign In
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginPage;