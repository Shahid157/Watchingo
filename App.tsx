import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/stackNavigation';
import {Provider} from 'react-redux';
import toolkitStore from './src/redux/store/toolkitStore';

function App() {
  return (
    <Provider store={toolkitStore}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
