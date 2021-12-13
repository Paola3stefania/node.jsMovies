#!/usr/bin/env node
import {init} from "./router.js"; 

/**
 *  This are the commands in the CLI
 *  process.argv[0] & process.argv[1] are files directories from node server
 *  process.argv[2] => "command-movie"
 *  process.argv[3-n] => function params
 *
 * */

let args = process.argv.slice(2);
init(args);
