import dotenv from 'dotenv';
import { getType } from '../helper/functions.js';
dotenv.config()

const API_TOKEN = process.env.API_TOKEN;
const API_KEY = process.env.API_KEY;

import https from 'https'

const connect = {
  get: getById,
  getAll: getByParams
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

  const {type, optional, page} = params

  const path = `/3/${type}/${optional}?page=${page}&api_key=${API_KEY}`

  return new Promise((resolve, reject) =>{ 
    let req = https.request({
      hostname: 'api.themoviedb.org',
      port: 443,
      path: path,
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


function getById(id, type) {
  return new Promise((resolve, reject) =>{ 
    let req = https.request({
      hostname: 'api.themoviedb.org',
      port: 443,
      path: `/3/${type}/${id}?api_key=${API_KEY}`,
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