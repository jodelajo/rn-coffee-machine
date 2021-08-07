import { GET_URL } from "../constants/MachineLex";


export async function useFetchCoffeeAPI() {
  const url = GET_URL.COFFEE_DETAILS_URL;
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch(e => {
        console.error(e)
    });
  
}
