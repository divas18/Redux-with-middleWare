import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/index'

const IceCreamContainer = (props) => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <h2>Number of iceCream - {props.nunberOfIceCream}</h2>
            <button onClick={props.buyIcream}>buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nunberOfIceCream: state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcream: () => {
            dispatch(buyIceCream())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);