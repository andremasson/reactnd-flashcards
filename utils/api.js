import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'FlashcardsARM:decks'

export function getDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

export function getDeck ({ id }) {

}

export function saveDeckTitle ({ title }) {

}

export function addCardToDeck ({ title, card }) {
  
}