import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, useToast } from '@chakra-ui/react';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password || !name) {
            toast({
                title: "Missing Information",
                description: "Please fill out all fields.",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return;
        }
        
        setIsLoading(true);
        try {
            // Simulate an API call
            const response = await fetch('https://your-backend-api.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            const data = await response.json(); // Assuming the server responds with JSON
            toast({
                title: "Registration Successful",
                description: `Welcome, ${data.user.name}!`, // Adjust according to actual response structure
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Registration Failed",
                description: error.message || "Failed to connect to the service",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Stack spacing={4} w="full" maxW="md" p={6} boxShadow="lg" rounded="md" bg="white">
            <Heading fontSize="2xl" textAlign="center">Create your account</Heading>
            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button mt={4} colorScheme="teal" onClick={handleSubmit} isFullWidth>
                Register
            </Button>
        </Stack>
    </Box>
    );
}


export default RegisterPage;