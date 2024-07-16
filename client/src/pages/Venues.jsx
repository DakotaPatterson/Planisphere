import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Input, Button, Text, VStack } from '@chakra-ui/react';
import { set } from 'mongoose';

const GET_VENUES_BY_EVENT_TYPE = gql`
  query GetVenuesByEventType($eventType: String!, $location: String!) {
    getVenuesByEventType(eventType: $eventType, location: $location) {
      id
      name
      location {
        address
        lat
        lng
      }
      categories {
        name
      }
    }
  }
`;

const VenueList = () => {
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const { loading, error, data, refetch } = useQuery(GET_VENUES_BY_EVENT_TYPE, {
    variables: { eventType, location },
    skip: !eventType || !location,
  });

  const handleSearch = () => {
    refetch();
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Input
          placeholder="Enter event type"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        />
        <Input
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button onClick={handleSearch}>Search Venues</Button>

        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {data && (
          <VStack spacing={4}>
            {data.getVenuesByEventType.map((venue) => (
              <Box key={venue.id} p={4} borderWidth={1} borderRadius="lg">
                <Text fontSize="xl">{venue.name}</Text>
                <Text>{venue.location.address}</Text>
                <Text>{venue.categories.map((category) => category.name).join(', ')}</Text>
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default VenueList;