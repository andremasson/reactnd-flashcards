import {
  stockData
} from '../utils/_DATA'

export const GET_DECKS = 'GET_DECKS'

export const getDecks = (decks) => ({ type: GET_DECKS, decks })

export function getStockData() {
  return (dispatch) => {
    stockData()
      .then((decks) => {
        dispatch(getDecks(decks))
      })
  }
}