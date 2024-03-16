import React from 'react';
import { Provider, useSelector } from 'react-redux';

import { RootState, store } from './store';
import { Stack } from './stacks';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
        <Stack />
    </Provider>
  );
}

export default App;
