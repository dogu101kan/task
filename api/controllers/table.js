const {ustHesap, dataPrepare} = require("../helpers/accountHelper/index");
const asyncErrorWrapper = require("express-async-handler");
const axios = require('axios');
const https = require('https');


const table =  asyncErrorWrapper(async(req, res, next)=>{
    const { token } = req.body;

    const apiUrl = 'https://efatura.etrsoft.com/fmi/data/v1/databases/testdb/layouts/testdb/records/1'
    
    const requestData = {
        fieldData: {},
        script: 'getData'
      };

      const agent = new https.Agent({
        rejectUnauthorized: false,
      });
    
    await axios.patch(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        httpsAgent: agent
      }).then((response) => {
        response = JSON.parse(response.data.response.scriptResult)
        response = dataPrepare(response);
        const accounts = ustHesap(response)
        
        res.status(201).json({data:{
            accounts:accounts,
            connectedAccounts:response
        }})
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
    
});


module.exports = {
    table,
}

