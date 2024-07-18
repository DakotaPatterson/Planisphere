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
    if (!email || !password) {
    toast({
      title: "Login Attempt",
      description: `Email: ${email}, Password: ${password}`,
      status: "info",
      duration: 9000,
      isClosable: true,
    });
    return;
  }

  setIsLoading(true); // Set loading to true when the API call begins
  try {
    // Call the backend API to perform login
    const response = await fetch('./components/users/login.js', {
      method: 'POST', // POST method to send data to the server
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ email, password }) 
    });

    if (!response.ok) { // Check if the response was not successful
      throw new Error('Network response was not ok'); // Throw an error if response is not ok
    }

    const data = await response.json(); // Parse JSON response from the server
    toast({ // Show success toast notification
      title: "Login Successful",
      description: `Welcome ${data.user.name}!`, // Adjust according to actual response structure
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  } catch (error) { // Catch any errors during the fetch call
    toast({ // Show error toast notification
      title: "Login Failed",
      description: error.message || "Failed to connect to the service",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  } finally {
    setIsLoading(false); // Set loading to false after the API call is finished
  }
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