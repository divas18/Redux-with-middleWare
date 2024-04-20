import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/index';

const CakeContainerWithHook = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  )
}

export default CakeContainerWithHook;