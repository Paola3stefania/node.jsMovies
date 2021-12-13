import connect from './connect.js';

export async function getData(id, type) {
  try {
    let data = await connect.get(id, type)
    return data
  } catch (error) {
    return error
  }
}