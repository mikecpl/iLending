import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';

const ProfileScreen = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfileScreen;
