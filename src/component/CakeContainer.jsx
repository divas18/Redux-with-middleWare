import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

const CakeContainer = (props) => {
    return (
        <>
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>buy cake</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);