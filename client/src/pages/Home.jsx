// src/pages/Home.jsx

import React from 'react';
import {
  Box, Flex, Heading, Text, Button, Grid, GridItem, Tabs, TabList, Tab, TabPanels, TabPanel
} from '@chakra-ui/react';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Box p={4} bg="blue.800">
      <Flex justify="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="lg" color="white" textAlign="center" flex="1">
          PLANISPHERE
        </Heading>
        <Flex>
          <Button mr={2} colorScheme="orange" variant="outline">Login</Button>
          <Button colorScheme="orange">Signup</Button>
        </Flex>
      </Flex>

      <Text fontSize="2xl" mb={6} color="orange.300" textAlign="center">
        WHERE EVERY EVENT FINDS ITS ORBIT
      </Text>

      <Tabs variant="enclosed">
        <TabList>
          <Tab>Budget</Tab>
          <Tab>Tasks</Tab>
          <Tab>Venues</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem>
                <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                  <Heading as="h3" size="md">Budget Details</Heading>
                  <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">
                    {/* Budget tab content goes here */}
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem>
                <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                  <Heading as="h3" size="md">Task Management</Heading>
                  <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">
                    {/* Tasks tab content goes here */}
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem>
                <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                  <Heading as="h3" size="md">Venue Selection</Heading>
                  <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px">
                    {/* Venues tab content goes here */}
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
            <Heading as="h3" size="md" color="white">BIRTHDAYS</Heading>
            <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
            <Heading as="h3" size="md" color="white">BACHELOR + BACHELORETTE</Heading>
            <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
            <Heading as="h3" size="md" color="white">WEDDINGS</Heading>
            <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
            <Heading as="h3" size="md" color="white">GRADUATIONS</Heading>
            <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
            <Heading as="h3" size="md" color="white">CREATE YOUR OWN EVENT</Heading>
            <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
            <Heading as="h3" size="md" color="white">FUNERALS</Heading>
            <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
          </Box>
        </GridItem>
      </Grid>

      <Footer mt={6} p={4} bg="blue.800" textAlign="center" />
    </Box>
  );
}
