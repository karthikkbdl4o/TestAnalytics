/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './src/screens/MainScreen';
import ChildScreen1 from './src/screens/ChildScreen1';
import ChildScreen2 from './src/screens/ChildScreen2';
import {useRef} from 'react';
import analytics from '@react-native-firebase/analytics';
import PipScreen from './src/screens/PipScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const navigationRef = useRef();
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ChildScreen1" component={ChildScreen1} />
        <Stack.Screen name="ChildScreen2" component={ChildScreen2} />
        <Stack.Screen name="PipScreen" component={PipScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => MyStack);
