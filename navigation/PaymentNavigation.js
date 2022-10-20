import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentsScreen from '../screens/PaymentsScreen';

const Stack = createNativeStackNavigator();

const PaymentNavigation = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name="Payments" component={PaymentsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  )
}

export default PaymentNavigation;
