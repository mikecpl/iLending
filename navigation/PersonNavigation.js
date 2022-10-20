import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
import PersonScreen from '../screens/PersonScreen';
import PeopleScreen from '../screens/PeopleScreen';

const Stack = createNativeStackNavigator();

const PersonNavigation = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name="People" component={PeopleScreen} />
        <Stack.Screen name="Person" component={PersonScreen} />
    </Stack.Navigator>
  )
}

export default PersonNavigation;
