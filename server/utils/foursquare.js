const fetch = require('node-fetch');
require('dotenv').config();

const { FOURSQUARE_API_KEY } = process.env;

// Log the API key to ensure it is loaded correctly (remove this after verifying)
console.log('FOURSQUARE_API_KEY:', FOURSQUARE_API_KEY);

if (!FOURSQUARE_API_KEY) {
  console.error('Missing Foursquare API key');
  process.exit(1);
}

const getVenues = async (eventType, location) => {

  const url = `https://api.foursquare.com/v3/places/search?query=${eventType}&near=${location}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${FOURSQUARE_API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching venues: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = { getVenues };