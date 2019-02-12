import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { pluralize } from '../utils/pluralize'
import { withNavigation } from 'react-navigation'
import { Button } from 'react-native-elements'

class DeckView extends React.Component {
  componentDidMount() {
    this.props.navigation.setParams({ deleteDeck: this.deleteDeck });
  }
  deleteDeck = () => {
    console.log('DELETAR!')
  }
  addCard = () => {
    const {deck, navigation} = this.props
    navigation.navigate('NewCard', {deck: deck})
  }
  startQuiz = () => {
    
  }
  render() {
    const {deck} = this.props
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

const mapDispatchToProps = dispatch => ({
  
})

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