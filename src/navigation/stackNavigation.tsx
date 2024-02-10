import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//UTIL
import strings from '../utils/strings';
//SCREENS
import HomeScreen from '../screens/homeScreen';
import DetailScreen from '../screens/detailScreen';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={strings.home_screen}
        options={{title: strings.home_screen, headerShown: false}}
      />
      <Stack.Screen
        component={DetailScreen}
        name={strings.detail_screen}
        options={{title: strings.detail_screen, headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default NavigationStack;
