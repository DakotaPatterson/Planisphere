import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, useToast } from '@chakra-ui/react';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    //const toast = useToast();

    const handleSubmit = async (event) => {
        event.preventDefault();
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