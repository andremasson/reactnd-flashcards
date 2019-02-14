import React from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getInitialData } from '../actions/decks'
import DeckListingItem from './DeckListingItem'
import { Divider } from 'react-native-elements'

class DeckListing extends React.Component {
  componentDidMount() {
    this.props.getInitialData()
  }
  render() {
    const { decks } = this.props
    return (
      <ScrollView>
        {decks && decks.map((deck, index) =>
          <View key={index}>
            <DeckListingItem deck={deck} />
            <Divider />
          </View>
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({decks}) => {
  return {
    decks
  }
}

const mapDispatchToProps = dispatch => ({
  getInitialData: () => dispatch(getInitialData())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckListing)