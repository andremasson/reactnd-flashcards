import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'FlashcardsARM:decks'

export async function fetchDecks () {
  try {
    const ret = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    return JSON.parse(ret)
  } catch (err) {
    console.log(`ERROR FETCHING: [${err.message}]`)
  }
}

export async function saveDeckTitle ( title ) {
  try{
    const decks = JSON.parse(await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY))
    await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(
      [
        ...decks,
        {
          title: title,
          questions: []
        }
      ]
    ))
  } catch(err) {
    console.log(`ERROR SAVING TITLE: [${err.message}]`)
  }
}

export async function saveCardToDeck ( title, card ) {
  try{
    const decks = JSON.parse(await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY))
    await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(
      decks.map(item => {
        if(item.title === title) {
          return {
            ...item,
            questions: [
              ...item.questions,
              card
            ]
          }
        } else {
          return {...item}
        }
      })
    ))
  } catch(err) {
    console.log(`ERROR SAVING CARD: [${err.message}]`)
  }
}

export async function saveAllDecks (decks) {
  try {
    await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
  } catch (err) {
    console.log(`ERROR SAVING: [${err.message}]`)
  }
}

export async function removeDeck (title) {
  try{
    const decks = JSON.parse(await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY))
    await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(
      decks.filter(item => item.title !== title)
    ))
  } catch(err) {
    console.log(`ERROR DELETING DECK: [${err.message}]`)
  }
}
