import React from 'react'
import { StyleSheet, View, StatusBar, TouchableOpacity, Text } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import DeckView from './DeckView'
import TabView from './TabView'
import NewCard from './NewCard'
import { Ionicons } from '@expo/vector-icons'
import { withNavigation, NavigationActions } from 'react-navigation'

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
  }
}

Stacks = createStackNavigator(stackRouteConfigs)

export default createAppContainer(Stacks)