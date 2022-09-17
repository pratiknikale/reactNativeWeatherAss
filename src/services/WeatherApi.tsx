import axios from "axios";
import weatherAccessKey from "../config/weatherConfig";

const API = axios.create({baseURL: "http://api.weatherstack.com"});

export const getWeatherDetails = async (capital: string) => {
  return await API.get(`/current?access_key=${weatherAccessKey}&query=${capital}`);
};
