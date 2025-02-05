import axios from 'axios';

const TOKEN = process.env.TOKEN;

(function() {
    console.log('Test');
    
    const postbutton = document.getElementById('post-btn');
    postbutton.addEventListener('click', async _ => {
        console.log('Inside Post');
        
        try {
            axios.post(
              'https://api.hubapi.com/crm/v3/objects/contacts',
              {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    
                },
                body: {
                    "properties": {
                        "email": "testuseremail@gmail.com",
                        "firstname": "John",
                        "lastname": "Smith"
                    }
                }
              },
              (err, data) => {
                console.log("Error: "+err);
                console.log("Data: "+data);
              }
            );
            console.log('After Post');
            } catch (e) {
                console.log(e);
            }
    });
    
    const getbutton = document.getElementById('get-btn');
    getbutton.addEventListener('click', async _ => {
        console.log('Inside Get');

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
    
})();
