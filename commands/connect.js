import dotenv from 'dotenv';

dotenv.config()

const API_TOKEN = process.env.API_TOKEN;
const API_KEY = process.env.API_KEY;

import https from 'https'

const connect = {
  get: getByParams
};

/**
 * 
 * @param {*} params Array, 
 * [0] => type, 
 * [1] => 'page', 
 * [2-n] => Boolean properties
 * @returns Promise 
 */
function getByParams(params) {

  const {type, optional, page, id} = params
  
  // Build dynamic path
  let optionalPage = page !== '' ? `?page=${page}&` : '?'
  let optionalParam = optional.includes('reviews') ? `/${optional}` : `${optional}` 
  let optionPath = `${optionalParam}${optionalPage}`

  const path = `/3/${type}/${id}${optionPath}api_key=${API_KEY}`

  return new Promise((resolve, reject) =>{ 
    let req = https.request({
      hostname: 'api.themoviedb.org',
      port: 443,
      path: path,
      method: 'GET'
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