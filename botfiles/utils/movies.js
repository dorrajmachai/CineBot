import fetch from 'node-fetch'
import * as dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })

const key = process.env.API_KEY
const requestUrl = `https://imdb-api.com/en/API/searchTitle/${key}/` 

let requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

export const requestFilm = async(searchTitle) => {

  const input = searchTitle;

  const url = `${requestUrl}${searchTitle}`;

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    const data = await result;

    // console.log(data.results[0].id);
    const linkId = data.results[0].id;
    const link = `https://www.imdb.com/title/${linkId}`;
    const description = data.results[0].description;
    const msg = `CineBot found this film: ${input}, about ${description} \nHere is a link: ${link}. Thanks for using CineBot!`;

    console.log(msg)
    return msg;

  } catch (err) {
    console.log(err);
  }
}
