import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class DeckView extends React.Component {
  render() {
    const { deck } = this.props
    return (
      <View>
        <Text>{deck.title}</Text>
      </View>
    )
  }
}

const mapStateToProps = ({decks}, {navigation}) => {
  const deck = navigation.getParam('deck') || decks[decks.length - 1]
  return {
    deck
  }
}

const mapDispatchToProps = dispatch => ({
  
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(DeckView))