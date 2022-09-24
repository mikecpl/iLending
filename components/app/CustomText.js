import { Text } from 'react-native';
import React from 'react';

const CustomText = (props) => {
  let textProps = Object.assign(props);

  try {
    const fontType = props.fontType ?? 'normal';

    let fontFamily = 'Raleway_600SemiBold';

    if (fontType === 'semibold') {
      fontFamily = 'Raleway_700Bold';
    }

    textProps.style.push({ fontFamily });
    delete textProps.children;
  } catch (e) {
  }

  return (
    <Text {...textProps}>
      {props.children}
    </Text>
  )
}

export default CustomText;