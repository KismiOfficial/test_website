import axios from 'axios';

(function() {
    console.log('Test!');
    
    const button = document.getElementById('post-btn');

    button.addEventListener('click', async _ => {
        console.log('Inside!');
        const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer pat-na1-be681d2e-e7d8-4cb9-8f5c-47783a93c1ba',
        },
        body: {
            "properties": {
                "email": "testuseremail@gmail.com",
                "firstname": "John",
                "lastname": "Smith"
            }
        }
        };
        
        try {
            console.log('Here!');
            const fetchResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, settings);
            const data = await fetchResponse.json();
            console.log(data);
            console.log('End!');
            return data;
            } catch (e) {
                console.log(e);
                return e;
            }    
    });
    
    const testbutton = document.getElementById('test-btn');
    
    testbutton.addEventListener('click', async _ => {
        console.log('Inside!');
        
        try {
            axios.post(
              'https://api.hubapi.com/crm/v3/objects/contacts',
              {
                headers: {
                  Authorization: `Bearer pat-na1-be681d2e-e7d8-4cb9-8f5c-47783a93c1ba`,
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
                // Handle the API response
              }
            );
            console.log('After');
            return 'End';
            } catch (e) {
                console.log(e);
                return e;
            }
    });
    
})();
