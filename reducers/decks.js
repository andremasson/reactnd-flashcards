import {
  GET_DECKS,
  ADD_DECK_TITLE,
  ADD_CARD_TO_DECK,
  DELETE_DECK
} from '../actions/decks'

export default function decks (state = [], action) {
  switch(action.type) {
    case ADD_DECK_TITLE:
      return [
        ...state,
        {
          title: action.title,
          questions: []
        }
      ]
    case GET_DECKS:
      return action.decks
    case ADD_CARD_TO_DECK:
      return state.map(item => {
        if(item.title === action.title) {
          return {
            ...item,
            questions: [
              ...item.questions,
              action.card
            ]
          }
        } else {
          return {...item}
        }
      })
    case DELETE_DECK:
      return state.filter(item => item.title !== action.title)
    default:
      return state
  }
}