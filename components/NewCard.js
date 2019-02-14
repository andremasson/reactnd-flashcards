import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, KeyboardAvoidingView, ToastAndroid, AlertIOS, Platform } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { handleAddCardToDeck } from '../actions/decks'
import { withNavigation } from 'react-navigation'

class NewCard extends React.Component {
  state = {
    question: '',
    answer: '',
    questionErrorMessage: '',
    answerErrorMessage: ''
  }
  onPressButton = () => {
    let hasError = false
    if (this.state.question.length === 0) {
      this.setState({ questionErrorMessage: "Question can't be empty" })
      hasError = true
    }
    if (this.state.answer.length === 0) {
      this.setState({ answerErrorMessage: "Answer can't be empty" })
      hasError = true
    }
    if (hasError) return
    this.props.handleAddCardToDeck(this.props.deck.title, { question: this.state.question, answer: this.state.answer })
    this.setState({ question: '', answer: '' })
    if (Platform.OS === 'ios') {
      AlertIOS.alert('Card added!')
    } else {
      ToastAndroid.show('Card added!' ,ToastAndroid.SHORT)
    }
  }
  onChangeText = (text, target) => {
    this.setState({
      [`${target}`]: text,
      [`${target}ErrorMessage`]: ''
    })
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Input
          id='question'
          name='question'
          placeholder='Question'
          value={this.state.question}
          onChangeText={text => this.onChangeText(text, 'question')}
          errorStyle={{ color: 'red' }}
          errorMessage={this.state.questionErrorMessage}
        />
        <Input
          name='answer'
          placeholder='Answer'
          value={this.state.answer}
          onChangeText={text => this.onChangeText(text, 'answer')}
          errorStyle={{ color: 'red' }}
          errorMessage={this.state.answerErrorMessage}
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

const mapStateToProps = ({}, {navigation}) => {
  const deck = navigation.getParam('deck')
  return {
    deck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddCardToDeck: (title, card) => dispatch(handleAddCardToDeck(title, card))
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(NewCard))

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