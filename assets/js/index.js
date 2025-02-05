import axios from 'axios';

(function() {
    console.log('Test!');
    
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
