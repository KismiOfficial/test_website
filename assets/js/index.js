import axios from 'axios';

const TOKEN = process.env.TOKEN;

(function() {
    console.log('Test');
    
    const postbutton = document.getElementById('post-btn');
    postbutton.addEventListener('click', async _ => {
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
  
    const testbutton = document.getElementById('test-btn');
    testbutton.addEventListener('click', async _ => {
      console.log('Inside Test');
        
        try {
            axios.post(
              'https://test-website-seven-bice.vercel.app/api/sendToHubspot',
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': 'true',
                  'Access-Control-Allow-Methods': '*',
                  'Access-Control-Allow-Headers': '*',
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
                console.log("Error:", err);
                console.log('Data:', data);
              }
            );
            console.log('After Test');
            } catch (e) {
                console.log(e);
            }
    });
    
    const getbutton = document.getElementById('get-btn');
    getbutton.addEventListener('click', async _ => {
      console.log('Inside Get');
      try{
      const response = await axios.get(
        'https://test-website-seven-bice.vercel.app/api/sendToHubspot',
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
          },
        },
      );
      res.status(200).json(response.data);
      } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong with the API call' });
      }
        
    });
    
})();
