import axios from 'axios';

(function() {
    console.log('Start');
    
    const postbutton = document.getElementById('post-btn');
    postbutton.addEventListener('click', async _ => {
      
        fetch('https://test-website-seven-bice.vercel.app/api/sendToHubspot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          },
          body: {
            "properties": {
              "email": "example@hubspot.com",
              "firstname": "Martin",
              "lastname": "Smith",
              "phone": "(555) 555-5555"
            }
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    });
  
    const testbutton = document.getElementById('test-btn');
    testbutton.addEventListener('click', async _ => {
      console.log('Start of Test');
      try {
        
        // Vercel API endpoint
        const url = 'https://test-website-seven-bice.vercel.app/api/sendToHubspot';
        const data = {
          "properties": {
            "email": "example@hubspot.com",
            "firstname": "Martin",
            "lastname": "Smith",
            "phone": "(555) 555-5555"
          }
        };
        console.log("Data: ", data);
        // Make the POST request to Vercel
        const response = await axios.post(url, data, {
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': 'true',
              'Access-Control-Allow-Methods': '*',
              'Access-Control-Allow-Headers': '*',
          }
        });
        
        // Return the HubSpot response to the client
        console.log("End of Test: ", json(response.data));
      } catch (error) {
        console.log(error);
      }
    });
    
    const getbutton = document.getElementById('get-btn');
    getbutton.addEventListener('click', async _ => {

        fetch('https://test-website-seven-bice.vercel.app/api/sendToHubspot', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    });
      
      //console.log('Inside Get');
      //try{
      //const response = await axios.get(
      //  'https://test-website-seven-bice.vercel.app/api/sendToHubspot',
      //  {
      //    headers: {
      //      'Content-Type': 'application/json',
      //      'Access-Control-Allow-Origin': '*',
      //      'Access-Control-Allow-Credentials': 'true',
      //      'Access-Control-Allow-Methods': '*',
      //      'Access-Control-Allow-Headers': '*',
      //    },
      //  },
      //);
      //res.status(200).json(response.data);
      //} catch(error) {
      //  console.error(error);
      //  res.status(500).json({ error: 'Something went wrong with the API call' });
      //}
      //  
    //});
    
})();
