import axios from "axios";
//get Questions through api
export async function getQuestionData(url) {
  const data = await (await axios.get(url))?.data;

  return data;
}

//get results
export async function getResultData(url) {
  const data = await (await axios.get(url))?.data;

  return data;
}
