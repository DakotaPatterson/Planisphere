import React from 'react';
import { Box, Flex, Heading, Text, Button, Grid, GridItem, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

export default function Home() {
  return (
    // Main container for the page content
    <Box p={4} bg="blue.800">
      <Flex justify="space-between" alignItems="center" mb={6}>
      {/* App Title */}
      <Heading as="h1" size="lg" color="white" textAlign="center" flex="1">
        PLANISPHERE
      </Heading>
      
      {/* Login + Signup buttons */}
      <Flex>
        <Button mr={2} colorScheme="orange" variant="outline">Login</Button>
        <Button colorScheme="orange">Signup</Button>
      </Flex>
    </Flex>

      {/* Slogan */}
      <Text fontSize="2xl" mb={6} color ="orange.300" textAlign="center">
      WHERE EVERY EVENT FINDS ITS ORBIT
      </Text>

      {/* Navigation tabs */}
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Budget</Tab>
          <Tab>Tasks</Tab>
          <Tab>Venues</Tab>
        </TabList>

         {/* Tab panels for each tab */}
         <TabPanels>
          <TabPanel>
            {/* Content for Budget tab */}
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {/* Placeholder content for Budget tab */}
              <GridItem>
                <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                  <Heading as="h3" size="md">
                    Budget Details
                  </Heading>
                  <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">
                    {/* Budget tab content goes here */}
                  </Box>
                </Box>
              </GridItem>
              {/* Add more content for Budget tab as needed */}
            </Grid>
          </TabPanel>
          <TabPanel>
            {/* Content for Tasks tab */}
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {/* Placeholder content for Tasks tab */}
              <GridItem>
                <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                  <Heading as="h3" size="md">
                    Task Management
                  </Heading>
                  <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">
                    {/* Tasks tab content goes here */}
                  </Box>
                </Box>
              </GridItem>
              {/* Add more content for Tasks tab as needed */}
            </Grid>
          </TabPanel>
          <TabPanel>
            {/* Content for Venues tab */}
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {/* Placeholder content for Venues tab */}
              <GridItem>
                <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                  <Heading as="h3" size="md">
                    Venue Selection
                  </Heading>
                  <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">
                    {/* Venues tab content goes here */}
                  </Box>
                </Box>
              </GridItem>
              {/* Add more content for Venues tab as needed */}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    
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
