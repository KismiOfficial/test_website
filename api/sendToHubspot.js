// api/sendToHubspot.js

const axios = require('axios');

const TOKEN = process.env.TOKEN;

module.exports = async (req, res) => {
  
  console.log('Req: ', req.method);
  console.log('Req Body: ', req.body);
  // Only allow POST requests
  if (req.method === 'POST') {
    try {
        
      // HubSpot API endpoint and API key
      const url = 'https://api.hubapi.com/crm/v3/objects/contacts';
      const data = {
        "properties": req.body
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
      if(error.response.status === 409){
        //Conflict error, user already exists in the database
        console.log("Conflict", error.response.status);
        res.status(409).json({ message: 'Conflict' });
      } else {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong with the API call' });
      }
    }
  } else if (req.method === 'GET') {
    try{
      const url = 'https://api.hubapi.com/crm/v3/objects/contacts';
      const data = {};
      const response = await axios.get(url, data, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
      });
      console.log('Response: ', response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong with the API call' });
    }
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