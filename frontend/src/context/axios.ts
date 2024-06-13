const axios = require('axios');

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/vitamins/getUser',
    headers: { }
};

axios.request(config)
    .then((response:any) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error:any) => {
        console.log(error);
    });
