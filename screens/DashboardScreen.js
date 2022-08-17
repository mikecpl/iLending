import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';

const DashboardScreen = () => {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView>
      <Text>Welcome {user.displayName}!</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DashboardScreen;
