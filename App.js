import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
