import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getStockData } from '../actions/decks'

class DeckListing extends React.Component {
  componentDidMount() {
    this.props.getStockData()
  }
  render() {
    const { decks } = this.props
    return (
      <View>
        <Text>Lista de decks</Text>
      </View>
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