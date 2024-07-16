import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../shared/style.css';

const Venues = () => {
  const { query } = useParams();
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Load the Google Maps script
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places');

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
  }, [query]);

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
    </div>
  );
};

export default Venues;
