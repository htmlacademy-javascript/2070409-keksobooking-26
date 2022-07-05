import {getCard} from './cards-generator.js';
import {getAdvertisement} from './ad-generator.js';
import {changePageMode} from './form-mode.js'; // DELETE
import './form-validator.js';

changePageMode(false); // DELETE
changePageMode(true); // DELETE

const similarCards = getAdvertisement(7);
getCard(similarCards[6]);

