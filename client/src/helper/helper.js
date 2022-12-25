import axios from "axios";
//get Questions through api
export async function getQuestionData(url) {
  const data = await (await axios.get(url))?.data;
  console.log(data);
  return data;
}

//post questions through api
export async function postQuestionData(url, quiz) {
  const data = axios
    .post(url, quiz)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log(data);
}

//get results
export async function getResultData(url) {
  const data = await (await axios.get(url))?.data;
  console.log(data);
  return data;
}

//post questions through api
export async function postResultData(url, result) {
  const data = await (await axios.post(url, result))?.data;
  console.log(data);
  return data;
}
