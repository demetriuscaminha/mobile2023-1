import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPass" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}