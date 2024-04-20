import React, { useState } from 'react'
import { buyCake } from '../redux';
import { connect } from 'react-redux';

const CakeContainerWithValue = (props) => {
    const [inputData, setInputData] = useState(1);
    return (
        <div style={{ marginTop: '2rem' }}>
            <input value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <button onClick={()=>{ props.buyCake(inputData) }}> buy {inputData} cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (num) => {
            dispatch(buyCake(num));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainerWithValue);