import axios from 'axios';

(function() {
    console.log('Start');
    
    const postbutton = document.getElementById('post-btn');
    postbutton.addEventListener('click', async _ => {
      console.log('Inside Post');
      
        const data = {
          email: 'email@example.com',
          firstname: 'John',
          lastname: 'Doe',
          phone: '123-456-7890'
        };
      
        var responseData = "";
        fetch('https://test-website-seven-bice.vercel.app/api/sendToHubspot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          },
          body: JSON.stringify(data)
        })
//          .then(response => response.json())
          .then(response => {
            responseData = response.json();
            console.log("Response: ", response);
          })
          .then(data => {
            console.log('Data:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        console.log("ResponseData: ", responseData);
        console.log("Response Status: ", responseData.status);
    });
        
    const testbutton = document.getElementById('test-btn');
    testbutton.addEventListener('click', async _ => {
      console.log('Inside Test');
      
        const data = {
          email: 'email@example.com',
          firstname: 'John',
          lastname: 'Doe',
          phone: '123-456-7890'
        };
      
        fetch('https://test-website-seven-bice.vercel.app/api/sendToHubspot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
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
