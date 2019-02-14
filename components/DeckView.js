import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { pluralize } from '../utils/pluralize'
import { withNavigation } from 'react-navigation'
import { Button } from 'react-native-elements'
import { handleDeleteDeck } from '../actions/decks'

class DeckView extends React.Component {
  componentDidMount() {
    this.props.navigation.setParams({ deleteDeck: this.deleteDeck });
  }
  confirmDeleteDeck = () => {
    const {deck, navigation} = this.props
    this.props.handleDeleteDeck(deck.title)
    navigation.navigate('DeckListing')
  }
  deleteDeck = () => {
    const {deck} = this.props
    Alert.alert(
      'Confirm',
      `Delete '${deck.title}'?`,
      [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          onPress: this.confirmDeleteDeck
        },
      ],
    )
  }
  addCard = () => {
    const {deck, navigation} = this.props
    navigation.navigate('NewCard', {deck: deck})
  }
  startQuiz = () => {
    const {deck, navigation} = this.props
    navigation.navigate('QuizView', {title: deck.title})
  }
  render() {
    const {deck} = this.props
    if (deck === undefined) return <View></View>
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subHeader}>
            {pluralize({
                singular: 'card',
                count: deck.questions.length
              })}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Button
            onPress={this.addCard}
            title='Add Card'
            type="outline"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
          />
          {deck.questions.length > 0 &&
            <Button
              onPress={this.startQuiz}
              title='Start Quiz'
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
            />
          }
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({decks}, {navigation}) => {
  const deck = (navigation.getParam('title')) 
    ? decks.find(item => item.title === navigation.getParam('title'))
    : decks[decks.length - 1] 
  return {
    deck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDeleteDeck: title => dispatch(handleDeleteDeck(title)),
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(DeckView))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10,
    width: 200,
  },
  title: {
    fontSize: 30,
  },
  subHeader: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.5)'
  },
})