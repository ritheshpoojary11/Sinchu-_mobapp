//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ForgotPassword from './ForgotPassword';
import SignUpPage from './SignUpPage';
import PlumberList from './PlumberList';

const Stack =  createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginPage}  />
        <Stack.Screen name="Home" component={HomePage}  />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Plumb" component={PlumberList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};