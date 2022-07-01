import {getCard} from './cards-generator.js';
import {getAdvertisement} from './ad-generator.js';

const similarCards = getAdvertisement(7);
getCard(similarCards[6]);

