// api/sendToHubspot.js

const axios = require('axios');

const TOKEN = process.env.TOKEN;

module.exports = async (req, res) => {
  console.log('Req Method: '+req.method);

  if (req.method === 'POST') {
    try {
        
      // HubSpot API endpoint and API key
      const url = 'https://api.hubapi.com/crm/v3/objects/contacts';
      const data = {
          email: 'email@example.com',
          firstname: 'John',
          lastname: 'Doe'
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
  } else if (req.method === 'GET'){
    
    try{
      const response = await axios.get(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        {
          headers: {
            Authorization: `Bearer ${YOUR_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );
      res.status(200).json(response.data);
    } catch(error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong with the API call' });
    }
    
  } else if(req.method === 'OPTIONS'){
    res.status(200).json({ message: 'Options' });
  } else {
    // If the request method isn't POST, return a 405 error
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};