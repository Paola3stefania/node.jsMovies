#!/usr/bin/env node

import { getData } from "./commands/get-all.js";
import { getType } from './helper/functions.js';
import { configCommands } from "./config.js";

/**
 * 
 * @param {*} args | Array with parameters
 * @returns void | prints in CLI
 */
export async function init(args) {
  configCommands.map(async (elm) => {
    if (args[0] === elm.case) {

      let validator = true
      args.forEach(arg => {
        // If arg is not included in the option array,
        // and if is not a int then return False
        // (The string is converted to int by + character and checked by .isInteger method)
        if (!elm.options.includes(arg) && !Number.isInteger(+arg) ) {
          console.log('Enter --help to see available arguments', arg)
          validator = false;
          return validator;
        }
      })


      if (validator) {
        const params = {
          type: getType(args[0]),
          id: args.includes('--id') ? args[2] : '',
          page: args.includes('--page') ? args[2] : '',
          optional: typeof args[3] !== 'undefined' ? args[3].replace('--', '') : '' 
        }

        let data = await getData(params)
        console.log(data)

        // To display the diferent properties depending on the items to show
        Object.keys(data).map(elm => {
          if (elm === 'results') {
            data[elm].map(item => {
              console.log(item.title)
            })
          }
        })
      }
    } 
  })
}



