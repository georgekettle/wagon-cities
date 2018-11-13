// TODO: add and export your own actions
import cities from '../data/cities.js';

export function setCities() {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
} }
