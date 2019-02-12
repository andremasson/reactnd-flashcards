import React from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getStockData } from '../actions/decks'
import DeckListingItem from './DeckListingItem'
import { Divider } from 'react-native-elements'

class DeckListing extends React.Component {
  componentDidMount() {
    this.props.getStockData()
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
  getStockData: () => dispatch(getStockData())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckListing)