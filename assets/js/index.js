import axios from 'axios';

const TOKEN = process.env.TOKEN;

(function() {
    console.log('Test');
    
    const postbutton = document.getElementById('post-btn');
    postbutton.addEventListener('click', async _ => {
        console.log(TOKEN);
        
        try {
            axios.post(
              'https://api.hubapi.com/crm/v3/objects/contacts',
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  'Content-Type': 'application/json',
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

        axios.get(
            'https://api.hubapi.com/crm/v3/objects/contacts',
            {
             headers: {
              Authorization: `Bearer ${TOKEN}`,
              'Content-Type': 'application/json',
            }
            },
            (err, data) => {
            // Handle the API response
              console.log("Error: "+err);
              console.log("Data: "+data);
            }
        );
        console.log('After Get');
    });
    
})();
