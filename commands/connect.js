import dotenv from 'dotenv';
dotenv.config()

const API_TOKEN = process.env.API_TOKEN;
const API_KEY = process.env.API_KEY;

import https from 'https'

const connect = {};

connect.req = https.request({
  hostname: 'api.themoviedb.org',
  port: 443,
  path: `/3/person/1?api_key=${API_KEY}`,
  method: 'GET',
  json: true
  //header: `Authorization: Bearer ${API_KEY}`
}, res => {

  // Get data from res.object
  res.on('data', data => {
    console.log(data)
  })
})

connect.req.on('error', error => {
  console.error(error)
})

connect.req.end()

export default connect