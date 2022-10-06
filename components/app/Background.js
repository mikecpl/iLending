import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as iLendingColors from '../../etc/colors';

const Background = () => {
  return (
    <LinearGradient
      colors={[iLendingColors.ilending[800], iLendingColors.ilending[800], iLendingColors.ilending[900]]}
      className="h-full w-full absolute"
    />
  )
}

export default Background;
