import React from 'react'
import { StyleSheet, View, Platform, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Constants } from 'expo'
import { blue } from './utils/colors'
import store from './store'
import DeckListing from './components/DeckListing'
import NewDeck from './components/NewDeck'

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const routeConfig = {
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
                        ? createBottomTabNavigator(routeConfig)
                        : createMaterialTopTabNavigator(routeConfig)

const AppContainer = createAppContainer(NavigationTabs)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStatusBar backgroundColor={blue} />
        <AppContainer style={styles.container} />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
