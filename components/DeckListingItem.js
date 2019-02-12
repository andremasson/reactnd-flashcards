import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from 'react-native'
import { pluralize } from '../utils/pluralize'
import { withNavigation } from 'react-navigation'

const DeckListingItem = ({deck, navigation}) => {
  const onPress = () => {
    navigation.push( 'DeckView', {deck: deck})
  }
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subHeader}>
            {pluralize({
              singular: 'card',
              count: deck.questions.length
            })}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(DeckListingItem)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 130,
  },
  buttonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  subHeader: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.5)'
  },
})