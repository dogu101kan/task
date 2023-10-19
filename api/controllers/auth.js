const { validateUserInput } = require("../helpers/input/inputHelper");
const customError = require("../helpers/error/customError");
const asyncErrorWrapper = require("express-async-handler");
const https = require('https');
const axios = require('axios');


const login =  asyncErrorWrapper(async(req, res, next)=>{
    const { username, password } = req.body;
    
    if(!validateUserInput(username, password)) return next(customError(400, "Please check your input"));

    const apiUrl =
      "https://efatura.etrsoft.com/fmi/data/v1/databases/testdb/sessions";


    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    axios.post(apiUrl, {}, {
        headers: {
          'Content-Type': 'application/json'
        },
        auth: {
          username,
          password
        },
        httpsAgent: agent
      })
        .then((response) => {
          const responseData = response.data.response;
          if (responseData && responseData.token) {
            res.status(201).json({ token: responseData.token });
          } else {
            res.status(500).json({ error: 'Token alınamadı' });
          }
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });

});


module.exports = {
    login,
}