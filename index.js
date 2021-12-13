#!/usr/bin/env node

import {myFunc} from './commands/get-persons.js'
import connect from './commands/connect.js'




(async () => {
  
  try {
    let data = await connect.person(process.argv[2])
    console.log('Data: ' + data)
  } catch (error) {
    console.error(error)
  }


})()

//myFunc(process.argv[2])