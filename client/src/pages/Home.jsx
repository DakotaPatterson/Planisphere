import React from 'react';
import { Box, Flex, Heading, Text, Button, Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  return (
    // Main container for the page content
    <Box p={4}>

      {/* Navigation bar */}
      <Flex justify="space-between" alignItems="center" mb={6}>
      
      {/* App Title */}
      <Heading as="h1" size="lg" color="white">
        Planisphere
      </Heading>
      
      {/* Navigation buttons */}
      <Flex>
        <Button mr={2} colorScheme="orange" variant="outline">Login</Button>
        <Button colorScheme="orange">Signup</Button>
      </Flex>
    </Flex>

      {/* Slogan */}
      <Text fontSize="2xl" mb={6} color ="orange.300" textAlign="center">
      WHERE EVERY EVENT FINDS ITS ORBIT
      </Text>
    
      {/* Grid including event categories */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
    
      {/* Birthday category */}
      <GridItem>
      <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
        <Heading as="h3" size="md" color="white">
          BIRTHDAYS
        </Heading>
        <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">

          </Box>
        </Box>
      </GridItem>
    
      {/* Bachelor/Bachelorette Parties category */}
      <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
        <Heading as="h3" size="md" color="white">
          BACHELOR + BACHELORETTE
        </Heading>
        <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">

          </Box>
        </Box>
      </GridItem>
    
      {/* Weddings category */}
      <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
        <Heading as="h3" size="md" color="white">
          WEDDINGS
        </Heading>
        <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">

          </Box>
        </Box>
      </GridItem>

      {/* Graduation category */}
      <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
        <Heading as="h3" size="md" color="white">
          GRADUATIONS
        </Heading>
        <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">

          </Box>
        </Box>
      </GridItem>

      {/* Create your own event category */}
      <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
        <Heading as="h3" size="md" color="white">
          CREATE YOUR OWN EVENT
        </Heading>
        <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">

          </Box>
        </Box>
      </GridItem>

      {/* Funerals category */} 
      <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
        <Heading as="h3" size="md" color="white">
          FUNERALS
        </Heading>
        <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">

          </Box>
        </Box>
      </GridItem>
    </Grid>
    
    {/* Footer */}
    <Box mt={6} p={4} bg="blue.800" textAlign="center">
      <Text color="white">THIS IS THE FOOTER</Text>
    </Box>
  </Box>);
}
