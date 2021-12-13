/**
 * This function is to treat the params from the CLI
 * to get the right command to execute.
 * It will return the exact param to fill the path in the https.request
 * of the getAll functions.
 * 
 * @param {*} param String 
 * @returns string
 */
export function getType(param) {
  let command = param.replace('get-', '')
  return command.substring(0, command.length - 1)
}