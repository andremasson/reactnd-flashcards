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
      tabBarLabel: 'Listing',
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

//const AppContainer = createAppContainer(NavigationTabs)

export default createAppContainer(NavigationTabs)

/*
export default class MainView extends React.Component {
  render() {
    return (
      <AppContainer style={styles.container} />
    )
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
