import { apiKey } from '../constants/key';

export const getMoviesAndSeries = async (searchText, searchType) => {
  let allData = [];
  let totalPages = 1;

  try {
    for (let page = 1; page <= totalPages; page++) {
      const url = `http://www.omdbapi.com/?s=${searchText}&type=${searchType}&page=${page}&apikey=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseJson = await response.json();
      allData = allData.concat(responseJson.Search);

      totalPages = Math.ceil(responseJson.totalResults / 10);
    }
  } catch (error) {
    console.error(error);
  }

  return allData;
}

export const getByTitle = async (title) => {
  try {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return null;
  }
}