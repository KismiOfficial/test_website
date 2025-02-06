// api/sendToHubspot.js

const axios = require('axios');

const TOKEN = process.env.TOKEN;

module.exports = async (req, res) => {
  
  console.log('Req: ',req.method);
  // Only allow POST requests
  if (req.method === 'POST') {
    try {
        
      // HubSpot API endpoint and API key
      const url = 'https://api.hubapi.com/crm/v3/objects/contacts';
      const data = {
        "properties": {
          "email": "martinsmith@hubspot.com",
          "firstname": "Martin",
          "lastname": "Smith",
          "phone": "(555) 555-5555"
        }
      };
      console.log('Data: ',data);
      // Make the POST request to HubSpot
      const response = await axios.post(url, data, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
      });

      // Return the HubSpot response to the client
      console.log('Response: ', response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.log("Error: ", error.response);
      console.error(error);
      res.status(500).json({ error: 'Something went wrong with the API call' });
      return "Test Error Message Back";
    }
  } else if (req.method === 'GET') {
    
  } else if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains (use a specific domain in production for better security)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow these methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow these headers
    res.status(200);
  } else {
    // If the request method isn't POST, return a 405 error
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};