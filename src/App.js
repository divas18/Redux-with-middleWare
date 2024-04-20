import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './component/CakeContainer';
import CakeContainerWithHook from './component/CakeContainerWithHook';
import IceCreamContainer from './component/IceCreamContainer';
import CakeContainerWithValue from './component/CakeContainerWithValue';
import ItemContainer from './component/ItemContainer';
import UserContainer from './component/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer />
        <CakeContainer />
        <CakeContainerWithHook />
        <CakeContainerWithValue />
        <IceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
