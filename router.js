#!/usr/bin/env node

import { getAllData } from "./commands/get-all.js";
import { getData } from "./commands/get-single.js";


export async function init(args) {
  switch (args[0]) {

    case "get-person":
  
      if (args[1] === '--id') {
        let id = args[2]
        let data = await getData(id, 'person')
        console.log(data)
      } else {
        console.log('Expected option --id')
      }
  
      break;
    case "get-persons":

      

      break;
  
    case "get-movie":

      if (args[1] === '--id') {
        let id = args[2]
        let data = await getData(id, 'movie')
        console.log(data)
      } else {
        console.log('Expected option --id')
      }

      break;
  
    case "get-movies":

      args.map(elm => {
        if (typeof elm === 'undefined') {
          console.log('Missing')
        }
      })

      const options = {
        type: getType(args[0]),
        page: typeof args[2] !== 'undefined' ? args[2] : '1',
        optional: typeof args[3] !== 'undefined' ? args[3] : '' 
      }
      
      getAllData(options)


      break;
    
    default:
      console.log('Enter --help to see available arguments')
    break;
  }
}



