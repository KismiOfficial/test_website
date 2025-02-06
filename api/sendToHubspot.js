// api/sendToHubspot.js

const axios = require('axios');

const TOKEN = process.env.TOKEN;

module.exports = async (req, res) => {
  console.log('Req Method: '+req.method);

  if (req.method === 'POST') {
    try {
      const body = req.body;
      // HubSpot API endpoint and API key
      const url = 'https://api.hubapi.com/crm/v3/objects/contacts';
      const data = {
        "properties": { body }
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
      return req.body;
    }
    //try {
    //    
    //  // HubSpot API endpoint and API key
    //  const url = 'https://api.hubapi.com/crm/v3/objects/contacts';
    //  const data = {
    //    "properties": {
    //      "email": "example@hubspot.com",
    //      "firstname": "Jane",
    //      "lastname": "Doe",
    //      "phone": "(555) 555-5555"
    //    }
    //  };
    //  
    //  // Make the POST request to HubSpot
    //  const response = await axios.post(url, data, {
    //    headers: {
    //        Authorization: `Bearer ${TOKEN}`,
    //        'Content-Type': 'application/json',
    //        'Access-Control-Allow-Origin': '*',
    //    }
    //  });
    //  
    //  // Return the HubSpot response to the client
    //  res.status(200).json(response.data);
    //} catch (error) {
    //  console.error(error);
    //  res.status(500).json({ error: 'Something went wrong with the API call' });
    //}
  } else if (req.method === 'GET'){
    
    try{
      const response = await axios.get(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );
      res.status(200).json(response.data);
    } catch(error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong with the API call' });
    }
    
  } else if (req.method === 'OPTIONS'){
      res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin (you may specify a domain)
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
      res.setHeader('Access-Control-Max-Age', '86400'); // Cache the preflight response for 24 hours
      return res.status(200).end();
  } else {
    // If the request method isn't one of the above, return a 405 error
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};