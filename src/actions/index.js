// TODO: add and export your own actions
import cities from '../data/cities.js';

export function setCities() {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
} }

export function setActiveCity(city) {
  // TODO: Api call! For now, simulate a DB
  if (!city) {
    const city = {
      name: "Paris",
      address: "16 Villa Gaudelet, 75011 Paris",
      slug: "paris"
    }
  }
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  }
}
