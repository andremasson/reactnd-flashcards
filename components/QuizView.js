import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { pluralize } from '../utils/pluralize'
import { withNavigation } from 'react-navigation'
import { Button } from 'react-native-elements'

class QuizView extends React.Component {
  state = {
    correctCount: 0,
    currentQuestion: 0,
    showAnswer: false,
    questions: []
  }
  componentDidMount() {
    this.setState({
      questions: this.props.deck.questions
    })
  }
  questionView = () => {
    const { currentQuestion, questions } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.progress}>
          <this.CurrentProgress />
        </View>
        <View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{questions[currentQuestion] && questions[currentQuestion].question}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Button
              onPress={this.showAnswer}
              title='Show Answer'
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
            />
          </View>
        </View>
      </View>
    )
  }
  answerView = () => {
    const { currentQuestion, questions } = this.state
    return(
      <View style={styles.container}>
        <View style={styles.progress}>
          <this.CurrentProgress />
        </View>
        <View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{questions[currentQuestion] && questions[currentQuestion].answer}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Button
              onPress={() => this.computeAnswer(true)}
              title='Correct'
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
            />
            <Button
              onPress={() => this.computeAnswer(false)}
              title='Incorrect'
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
            />
          </View>
        </View>
      </View>
    )
  }
  resultView = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          You've got {pluralize({ singular: 'card', count: this.state.correctCount })} correct out of {this.state.questions.length}
        </Text>
      </View>
    )
  }
  showAnswer = () => {
    this.setState({ showAnswer: true })
  }
  CurrentProgress = () => {
    const { currentQuestion, questions } = this.state
    return (
      <View>
        <Text>{currentQuestion + 1}/{questions.length}</Text>
      </View>
    )
  }
  computeAnswer = (answer = false) => {
    const { currentQuestion } = this.state
    let correctCount = this.state.correctCount
    if (answer) correctCount++

    this.setState({
      correctCount,
      currentQuestion: currentQuestion + 1,
      showAnswer: false
    })
  }
  render() {
    const { showAnswer, currentQuestion, questions } = this.state
    if (questions.length > 0 && currentQuestion >= questions.length) return this.resultView()
    if (showAnswer) return this.answerView()
    else return this.questionView()
    return null
  }
}

const mapStateToProps = ({decks}, {navigation}) => {
  return {
    deck: decks.find(item => item.title === navigation.getParam('title'))
  }
}

export default withNavigation(connect(mapStateToProps)(QuizView))

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
  progress: {
    margin: 15,
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    margin: 10,
    width: 200,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    padding: 10
  },
})