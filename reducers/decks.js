import {
  GET_DECKS,
  ADD_DECK_TITLE
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
    default:
      return state
  }
}