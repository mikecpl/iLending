import { Text } from 'react-native';
import React from 'react';

export const FONT_FAMILY_NORMAL = 'Raleway_600SemiBold';
export const FONT_FAMILY_SEMIBOLD = 'Raleway_700Bold';

const CustomText = (props) => {
  let textProps = Object.assign(props);

  try {
    const fontType = props.fontType ?? 'normal';

    let fontFamily = FONT_FAMILY_NORMAL;

    if (fontType === 'semibold') {
      fontFamily = FONT_FAMILY_SEMIBOLD;
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