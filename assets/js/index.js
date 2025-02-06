import axios from 'axios';

(function() {
    console.log('Start');
  
    const messageField = document.getElementById('message');
    
    const postbutton = document.getElementById('post-btn');
    postbutton.addEventListener('click', async _ => {
      console.log('Inside Post');
      
      try{
      
        const data = {
          email: 'email@example.com',
          firstname: 'John',
          lastname: 'Doe',
          phone: '123-456-7890'
        };
      
        const response = await fetch('https://test-website-seven-bice.vercel.app/api/sendToHubspot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          },
          body: JSON.stringify(data)
        });
        console.log("Data sent: ", JSON.stringify(data));
        
        const responseData = await response.json();
        console.log("Response Data: ", responseData);
        if(responseData.message === 'Conflict'){
          messageField.textContent = 'That user is already in the member database';
        }
      } catch (error){
        console.error('Error submitting form:', error);
        messageField.textContent = 'An error occurred while submitting the form.';
      }
    });
        
    const testbutton = document.getElementById('test-btn');
    testbutton.addEventListener('click', async _ => {
      console.log('Inside Post');
      
      try{
      
        const data = {
          email: 'email@example.com',
          firstname: 'John',
          lastname: 'Doe',
          phone: '123-456-7890'
        };
      
        const response = await fetch('https://test-website-seven-bice.vercel.app/api/sendToHubspot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          },
          body: JSON.stringify(data)
        });
        
        const responseData = await response.json();
        console.log("Response Data: ", responseData);
        if(responseData.message === 'Conflict'){
          messageField.textContent = 'That user is already in the member database';
        }
      } catch (error){
        console.error('Error submitting form:', error);
        messageField.textContent = 'An error occurred while submitting the form.';
      }
    });
    
    const getbutton = document.getElementById('get-btn');
    getbutton.addEventListener('click', async _ => {
      try{
        const response = await fetch('https://test-website-seven-bice.vercel.app/api/sendToHubspot', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          }
        });
      
        const responseData = await response.json();
        console.log("Response Data: ", responseData);
      } catch (error) {
        console.error('Error submitting form:', error);
        messageField.textContent = 'An error occurred while submitting the form.';
      }
        
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
