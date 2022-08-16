import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';

const DashboardScreen = () => {
  const { user } = useAuth();

  return (
    <SafeAreaView>
      <Text>Welcome {user.displayName}!</Text>
    </SafeAreaView>
  )
}

export default DashboardScreen;