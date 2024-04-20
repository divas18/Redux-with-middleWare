import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = (props) => {
  return (
    <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
        <h2> Total Numbers of {props.cake ? 'cake' : 'Icecream'} is {props.item}</h2>
        <button onClick={props.buyItem}>buy {props.cake ? 'cake' : 'Icecream'}</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const selectedItem = ownProps.cake ? state.cake.numberOfCake : state.iceCream.numberOfIceCream;
    return {
        item: selectedItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake 
  ? () => dispatch(buyCake())
  : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);