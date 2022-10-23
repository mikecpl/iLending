import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../../etc/colors';
import Background from './Background';

const Loader = () => {
  return (
    <View className="flex-1">
      <Background />
      <ActivityIndicator className="flex-1" color={colors.white} />
    </View>
  );
}

export default Loader;
