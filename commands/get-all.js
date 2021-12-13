import connect from './connect.js';

export async function getData(params) {
  try {
    let data = await connect.get(params)
    return data
  } catch (error) {
    return error
  }
}