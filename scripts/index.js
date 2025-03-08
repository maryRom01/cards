import { getDefaultToken, getAllCards } from './api/api.js';

const defaultToken = await getDefaultToken();
const cardsArray = await getAllCards(defaultToken);

console.log(cardsArray);