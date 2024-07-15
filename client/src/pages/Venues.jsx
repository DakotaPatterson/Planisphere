import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { set } from 'mongoose';

export default function Venues() {
  const [venues, setVenue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch('https://api.designmynight.com/v4/venues', {
          headers: {
            Authorization: ''
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setVenues(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
    }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading venues: {error.message}</p>;

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        PLANISPHERE
      </Heading>
      <Text mb={4}>Venues:</Text>
      <VStack spacing ={4} align="stretch">
      {venues.map((venue) => (
          <Box key={venue.id} p={4} bg="purple.800" color="white" borderRadius="md" boxShadow="lg">
            <Heading as="h2" size="md">{venue.name}</Heading>
            <Text>{venue.description}</Text>
            <Text>{venue.address}</Text>
            <Text>{venue.phone_number}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}