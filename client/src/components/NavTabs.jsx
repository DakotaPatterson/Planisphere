import React from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  extendTheme ,
  Button
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, Link } from 'react-router-dom';

import "../shared/fonts/kimberley bl.otf";

import Home from "../pages/Home";
import Budget from "../pages/Budget";
import Task from "../pages/Task";
import Venues from "../pages/Venues";

const customTheme = extendTheme({
    fonts: {
      heading: "'Kimberley BL', sans-serif",
      body: "'Kimberley BL', sans-serif",
    },
    components: {
      Tabs: {
        baseStyle: {
          tab: {
            fontFamily: "'Kimberley BL', sans-serif",
            color: 'white',
            _selected: {
              color: 'white',
              bg: 'orange.500',
            },
            _hover: {
              bg: 'orange.400',
            },
          },
          tablist: {
            borderBottom: '2px solid',
            borderColor: 'orange.500',
          },
          tabpanel: {
            borderTop: '2px solid',
            borderColor: 'orange.500',
          },
        },
      },
    },
  });

export default function NavTabs() {


    return (
        <ChakraProvider theme={customTheme}>
        <Box p={4} bg="blue.800">
          <Flex justify="center" alignItems="center" mb={6}>
            <Heading
              as="h1"
              size="4xl"
              color="white"
              textAlign="center"
              flex="1"
              width={{ base: "100%", md: "70%" }}
              maxWidth="70%"
            >
              PLANISPHERE
            </Heading>
            <Box>
                <Button as={Link} to="/loginPage">Login</Button>
            </Box>
  
          </Flex>
  
          <Text fontSize="2xl" mb={6} color="orange.300" textAlign="center">
            WHERE EVERY EVENT FINDS ITS ORBIT
          </Text>
  
          <Tabs variant="enclosed">
            <TabList>
              <Tab>
                <ChakraLink as={Link} to="/">Home</ChakraLink>
              </Tab>
              <Tab>
                <ChakraLink as={Link} to="/Budget">Budget</ChakraLink>
              </Tab>
              <Tab> 
                <ChakraLink as={Link} to="/Task">Tasks</ChakraLink>
              </Tab>
              <Tab>
                <ChakraLink as={Link} to="/Venues">Venues</ChakraLink>
              </Tab>
            </TabList>
          </Tabs>

            <Routes>
              <Route path="/" element={Home} />
              <Route path="/Budget" component={Budget} />
              <Route path="/Task" component={Task} />
              <Route path="/Venues" component={Venues} />
            </Routes>

        </Box>
        </ChakraProvider>
        );
    }