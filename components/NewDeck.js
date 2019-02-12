import React from 'react'
import { connect } from 'react-redux'
import { Text, StyleSheet, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { handleAddDeckTitle } from '../actions/decks'
import { withNavigation } from 'react-navigation'

class NewDeck extends React.Component {
  state = {
    deckName: '',
    errorMessage: ''
  }
  onPressButton = () => {
    const {decks} = this.props
    if (this.state.deckName.length === 0) {
      this.setState({ errorMessage: "Title can't be empty" })
      return
    }
    if (decks.find(item => item.title.toUpperCase() === this.state.deckName.toUpperCase()) !== undefined) {
      this.setState({ errorMessage: "There's a deck with this name already" })
      return
    }
    this.props.handleAddDeckTitle(this.state.deckName)
    this.setState({ deckName: '' })
    this.props.navigation.navigate('DeckListing')
    this.props.navigation.navigate('DeckView')
  }
  onChangeText = (text) => {
    this.setState({
      deckName: text,
      errorMessage: ''
    })
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
        <Input
          placeholder='Deck Title'
          value={this.state.deckName}
          onChangeText={this.onChangeText}
          errorStyle={{ color: 'red' }}
          errorMessage={this.state.errorMessage}
        />
        <Button
          onPress={this.onPressButton}
          title='Submit'
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
        />
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = ({decks}) => {
  return {
    decks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddDeckTitle: title => dispatch(handleAddDeckTitle(title)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(NewDeck))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 45,
    margin: 30,
    textAlign: 'center'
  },
  buttonContainer: {
    margin: 25,
  },
  buttonTitle: {
    padding: 20
  }
})