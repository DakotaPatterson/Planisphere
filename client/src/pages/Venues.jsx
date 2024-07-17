import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Input, VStack, Text, FormControl, FormLabel } from '@chakra-ui/react';
import '../shared/style.css';

const Venues = () => {
  const { query } = useParams();
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);

  // State for manual entry of venue details
  const [venueDetails, setVenueDetails] = useState({
    name: '',
    address: '',
    phone: '',
    website: '',
    event: ''
  });

  useEffect(() => {
    // Load the Google Maps script
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBvy9me7c3hb-Ma60EjLhOXvkXVlj--xI8&loading=async&libraries=places&callback=initMap");

    // Initialize the map and search box after the script has loaded
    const initAutocomplete = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: 'roadmap',
      });

      const input = searchInputRef.current;
      const searchBox = new window.google.maps.places.SearchBox(input);

      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

      map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
      });

      let markers = [];

      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];

        const bounds = new window.google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log('Returned place contains no geometry');
            return;
          }

          const icon = {
            url: place.icon,
            size: new window.google.maps.Size(71, 71),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 34),
            scaledSize: new window.google.maps.Size(25, 25),
          };

          markers.push(
            new window.google.maps.Marker({
              map,
              icon,
              title: place.name,
              position: place.geometry.location,
            })
          );

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }

          // Update state with place details
          setVenueDetails({
            name: place.name,
            address: place.formatted_address,
            phone: place.international_phone_number || '',
            website: place.website || '',
            event: venueDetails.event
          });
        });
        map.fitBounds(bounds);
      });

      if (query) {
        input.value = query;
        const event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
      }
    };

    // Wait for the script to load before initializing the autocomplete
    const handleScriptLoad = () => {
      if (window.google) {
        initAutocomplete();
      } else {
        setTimeout(handleScriptLoad, 100);
      }
    };

    handleScriptLoad();
  }, [query, venueDetails.event]);

  // Handle input changes for manual venue details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenueDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Save the venue information (e.g., to a server or local storage)
  const handleSaveVenue = () => {
    // Implement saving logic here (e.g., API call to save venue details)
    console.log('Venue Details:', venueDetails);
  };

  return (
    <div>
      <input
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Search Box"
        ref={searchInputRef}
        style={{ marginBottom: '10px' }}
      />
      <div id="map" style={{ height: '400px', width: '100%', marginTop: '10px' }} ref={mapRef}></div>

      {/* Manual Entry Form */}
      <VStack spacing={4} p={4} align="stretch">
        <Text fontSize="2xl">Enter Venue Information Manually</Text>
        <FormControl id="venue-name">
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            placeholder="Venue Name"
            value={venueDetails.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="venue-address">
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            placeholder="Venue Address"
            value={venueDetails.address}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="venue-phone">
          <FormLabel>Phone Number</FormLabel>
          <Input
            name="phone"
            placeholder="Phone Number"
            value={venueDetails.phone}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="venue-website">
          <FormLabel>Website</FormLabel>
          <Input
            name="website"
            placeholder="Website"
            value={venueDetails.website}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="event-name">
          <FormLabel>Event</FormLabel>
          <Input
            name="event"
            placeholder="Event Name"
            value={venueDetails.event}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button onClick={handleSaveVenue} colorScheme="blue">Save Venue</Button>
      </VStack>
    </div>
  );
};

export default Venues;
