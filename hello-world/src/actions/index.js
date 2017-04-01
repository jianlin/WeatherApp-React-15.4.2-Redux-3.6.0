import axios from "axios";

const API_KEY = "7df18cc7d68668a16accb0830c08c349";
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;


export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName}`;
  const request = axios.get(url);

  console.log("In Action Creator fetchWeather, Request is", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
