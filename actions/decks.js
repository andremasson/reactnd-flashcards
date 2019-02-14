import {
  stockData
} from '../utils/_DATA'
import {
  fetchDecks,
  saveAllDecks,
  saveDeckTitle,
  saveCardToDeck,
  removeDeck
} from '../utils/api'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK_TITLE = 'ADD_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export const getDecks = (decks) => ({ type: GET_DECKS, decks })

export function getStockData() {
  return (dispatch) => {
    stockData()
      .then((decks) => {
        dispatch(getDecks(decks))
      })
  }
}

export function getInitialData() {
  return (dispatch) => fetchDecks()
    .then(result => {
      if (result === null) {
        stockData()
          .then((decks) => {
            saveAllDecks(decks)
            dispatch(getDecks(decks))
          })
      } else {
        dispatch(getDecks(result))
      }
    })
}

export const addDeckTitle = (title) => ({ type: ADD_DECK_TITLE, title })
export const handleAddDeckTitle = title => {
  return (dispatch) => saveDeckTitle(title)
    .then(dispatch(addDeckTitle(title)))
}

export const addCardToDeck = (title, card) => ({ type: ADD_CARD_TO_DECK, title, card })
export const handleAddCardToDeck = (title, card) => {
  return (dispatch) => saveCardToDeck(title, card)
    .then(dispatch(addCardToDeck(title, card)))
}

export const deleteDeck = title => ({ type: DELETE_DECK, title })
export const handleDeleteDeck = title => {
  return (dispatch) => removeDeck(title)
    .then(dispatch(deleteDeck(title)))
}