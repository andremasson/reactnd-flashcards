import {
  stockData
} from '../utils/_DATA'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK_TITLE = 'ADD_DECK_TITLE'

export const getDecks = (decks) => ({ type: GET_DECKS, decks })

export function getStockData() {
  return (dispatch) => {
    stockData()
      .then((decks) => {
        dispatch(getDecks(decks))
      })
  }
}

export const addDeckTitle = (title) => ({ type: ADD_DECK_TITLE, title })
export const handleAddDeckTitle = title => {
  return (dispatch) => dispatch(addDeckTitle(title))
}

export function handleNewPost (post) {
  return (dispatch) =>
    saveNewPost(post)
      .then((post) => {
        return dispatch(newPost(post))
      })
}