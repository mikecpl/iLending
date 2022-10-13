import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../etc/colors';

const Loader = () => {
  return <ActivityIndicator className="flex-1" color={colors['ilending-sky'][600]} />;
}

export default Loader;
