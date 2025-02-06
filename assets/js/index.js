import axios from 'axios';

(function() {
    console.log('Start');
  
    const messageField = document.getElementById('message');
    
    const postbutton = document.getElementById('post-btn');
    postbutton.addEventListener('click', async _ => {
      console.log('Inside Post');
      for (const el of document.getElementById('form').querySelectorAll("[required]")) {
        if (!el.reportValidity()) {
          messageField.textContent = "Please fill out all the required fields";
          return;
        }
      }
      
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
        messageField.textContent="Current Member Data: "+JSON.stringify(responseData);
      } catch (error) {
        console.error('Error submitting form:', error);
        messageField.textContent = 'An error occurred while submitting the form.';
      }
        
    });
    
})();
