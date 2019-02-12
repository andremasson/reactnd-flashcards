import React from 'react'
import { StyleSheet, Platform, View, Text } from 'react-native'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import DeckListing from './DeckListing'
import NewDeck from './NewDeck'

const tabRouteConfig = {
  DeckListing: {
    screen: DeckListing,
    navigationOptions: {
      tabBarLabel: 'Your Decks',
      tabBarIcon: () => <FontAwesome name='bars' size={30} color='black' />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: () => <FontAwesome name='plus' size={30} color='black' />
    }
  }
}

const NavigationTabs = (Platform.OS === 'ios')
                        ? createBottomTabNavigator(tabRouteConfig)
                        : createMaterialTopTabNavigator(tabRouteConfig)

export default createAppContainer(NavigationTabs)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
