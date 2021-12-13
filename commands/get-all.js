import connect from './connect.js';

export async function getAllData(params) {
  try {
    let data = await connect.getAll(params)
    return data
  } catch (error) {
    return error
  }
}