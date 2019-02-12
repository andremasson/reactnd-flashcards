import React from 'react'
import { StyleSheet, View, StatusBar, TouchableOpacity, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { blue } from './utils/colors'
import store from './store'
import DeckView from './components/DeckView'
import TabView from './components/TabView'
import NewCard from './components/NewCard'
import { Ionicons } from '@expo/vector-icons'
import { withNavigation, NavigationActions } from 'react-navigation'
import MainView from './components/MainView'

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStatusBar backgroundColor={blue} />
        <MainView style={styles.container} />
      </Provider>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    marginRight: 30
  }
})
