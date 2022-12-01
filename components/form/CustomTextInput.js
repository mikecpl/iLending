import { View, TextInput } from 'react-native';
import React from 'react';
import colors from 'tailwindcss/colors';
import CustomText, { FONT_FAMILY_NORMAL } from '../app/CustomText';

const CustomTextInput = ({ value, title, icon, placeholder, helperText, errors = [], onChange }) => {
  const hasError = errors.length > 0;
  let rowClassNames = 'flex flex-row items-center space-x-1 bg-slate-700 px-2 py-1 rounded-lg';
  let titleClassNames = 'text-slate-400';

  if (hasError) {
    rowClassNames += ' border border-red-500';
    titleClassNames = 'text-red-500';
  }

  return (
    <View className="w-full">
      {title && (
        <View className="mb-1">
          <CustomText className={titleClassNames}>
            {title}
          </CustomText>
        </View>
      )}
      <View className={rowClassNames}>
        {icon && (
          <View className="pl-1">
            {icon}
          </View>
        )}

        <View className="grow pl-1 pr-3">
          <TextInput className="text-white h-10 text-lg leading-[22px]"
            blurOnSubmit={true}
            maxLength={255}
            placeholder={placeholder}
            placeholderTextColor={colors.slate[400]}
            onChangeText={currentValue => {
              onChange(currentValue);
            }}
            value={value}
            style={{fontFamily: FONT_FAMILY_NORMAL}}
          />
        </View>
      </View>

      { helperText && (
        <View className="mt-2">
            <CustomText className="text-slate-400">
              {helperText}
            </CustomText>
        </View>
      )}

      { hasError && (
        <View className="mt-2">
          {errors.map((error, key) => (
            <CustomText className="text-red-500" key={key}>
              {error}
            </CustomText>
          ))}
        </View>
      )}
    </View>
  )
}

export default CustomTextInput;
