import React from 'react';
import Navigation from './src/navigations';
import { Provider } from 'react-redux';
import { store } from './src/state';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
