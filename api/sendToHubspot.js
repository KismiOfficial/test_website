// api/sendToHubspot.js

const axios = require('axios');

const TOKEN = process.env.TOKEN;

module.exports = async (req, res) => {
  console.log('Req: '+req.method);
  // Only allow POST requests
//  if (req.method === 'POST') {
    try {
        
      // HubSpot API endpoint and API key
      const url = 'https://api.hubapi.com/crm/v3/objects/contacts';
      const data = {
          email: 'email@example.com',
          firstname: 'Martin',
          lastname: 'Doe'
      };
      console.log('Data: '+data.toString);
      // Make the POST request to HubSpot
      const response = await axios.post(url, data, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
      });

      // Return the HubSpot response to the client
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong with the API call' });
    }
//  } else {
    // If the request method isn't POST, return a 405 error
//    res.status(405).json({ error: 'Method Not Allowed' });
//  }
};