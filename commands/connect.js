import dotenv from 'dotenv';
dotenv.config()

const API_TOKEN = process.env.API_TOKEN;
const API_KEY = process.env.API_KEY;

import https from 'https'

const connect = {};


connect.person = getPersonById

function getPersonById(id) {
  return new Promise((resolve, reject) =>{ 
    let req = https.request({
      hostname: 'api.themoviedb.org',
      port: 4,
      path: `/3/person/${id}?api_key=${API_KEY}`,
      method: 'GET'
      //header: `Authorization: Bearer ${API_KEY}`
    }, res => {
    
      let json = '';
      // Get data from res.object
      res.on('data', data => {
        json += data;
      });
    
      res.on('end', () => {
        resolve(JSON.parse(json));
      });

    }).on('error', (error) => {
      reject(error)
    });

    req.end()
  })
}


export default connect