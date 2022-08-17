import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';

const ProfileScreen = () => {
  const { logout } = useAuth();

  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen;
