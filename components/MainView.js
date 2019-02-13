import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import DeckView from './DeckView'
import TabView from './TabView'
import NewCard from './NewCard'
import QuizView from './QuizView'
import { Ionicons } from '@expo/vector-icons'

stackRouteConfigs = {
  TabView: {
    screen: TabView,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Deck',
        headerRight: (
          <TouchableOpacity
            style={{marginRight: 30}}
            onPress={navigation.getParam('deleteDeck')}
          >
            <Ionicons
              name='md-trash'
              size={35}
            />
          </TouchableOpacity>
        ),
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Add Card',
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
    }
  }
}

Stacks = createStackNavigator(stackRouteConfigs)

export default createAppContainer(Stacks)