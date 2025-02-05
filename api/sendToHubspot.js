// api/sendToHubspot.js

const axios = require('axios');

const TOKEN = process.env.TOKEN;

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method === 'POST') {
    try {
      // Extract data from the request body
      const { email, firstname, lastname, phone } = req.body;

      // HubSpot API endpoint and API key
      const url = 'https://api.hubapi.com/crm/v3/objects/contacts';
      const data = {
        properties: [
          { property: 'email', value: email },
          { property: 'firstname', value: firstname },
          { property: 'lastname', value: lastname },
          { property: 'phone', value: phone }
        ]
      };

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
  } else {
    // If the request method isn't POST, return a 405 error
    res.status(405).json({ error: 'Method Not Allowed'+req.method });
  }
};