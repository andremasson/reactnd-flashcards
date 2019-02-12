import React from 'react'
import { StyleSheet, View, StatusBar, TouchableOpacity, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { blue } from './utils/colors'
import store from './store'
import DeckView from './components/DeckView'
import MainView from './components/MainView'
import NewCard from './components/NewCard'
import { Ionicons } from '@expo/vector-icons'

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const stackRouteConfigs = {
  MainView: {
    screen: MainView,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck',
      headerRight: (
        <TouchableOpacity
          onPress={() => alert('This is a button!')}
        >
          <Ionicons
            name='md-trash'
            size={100}
          />
        </TouchableOpacity>
      ),
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Add Card',
    }
  }
}

const Stacks = createStackNavigator(stackRouteConfigs)

const AppContainer = createAppContainer(Stacks)

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
