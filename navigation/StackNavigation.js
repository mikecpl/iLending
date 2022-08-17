import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import useAuth from '../hooks/useAuth';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Group screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Tab" component={TabNavigator} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigation;