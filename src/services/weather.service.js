import axios from "axios";
import storageService from './storage.service.js';
const API_KEY = 'BTmipqrxc8hZMIW2ABlpUzfWkZ0L7IxE';
const FAV_KEY = 'Favorites';
const LOCS_KEY = 'Locations';

export const weatherService = {
  getCities,
  getWeather,
  addToFave,
  getFavs,
  getFirst,
};


const gLocs = storageService.loadFromStorage(LOCS_KEY) || [];

function getFavs() {
  const favs = gLocs.filter(loc => loc.city.isFavorite);
  return favs;
}

function getFirst() {
  return gLocs[0];
}

async function getCities(txt) {
  if (!txt) return;
  const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${txt}`);
  const arr = res.data.splice(0, 5);

  return arr;
}


async function getWeather(city) {
  const forecast = gLocs.find(loc => loc.city.Key === city.Key);

  if (!forecast) {
    const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city.Key}?apikey=${API_KEY}`);
    const loc = { forecast: { ...res.data }, city: { ...city, isFavorite: false } };
    gLocs.push(loc);
    storageService.saveToStorage(LOCS_KEY, gLocs);
    console.log('axios weather');
    return loc;
  }

  console.log('cache weather');
  return forecast;
}


async function addToFave(obj) {
  let loc = gLocs.find(loc => loc.city.Key === obj.city.Key);
  loc.city.isFavorite = !loc.city.isFavorite;
  storageService.saveToStorage(LOCS_KEY, gLocs);
  return loc;
}


