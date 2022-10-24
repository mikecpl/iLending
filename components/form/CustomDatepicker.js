import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../app/CustomText';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomDatepicker = ({ value, mode = 'date', title, icon, helperText, errors = [], onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const hasError = errors.length > 0;
  let rowClassNames = 'flex flex-row items-center space-x-1 bg-slate-700 px-2 py-3 rounded-lg';
  let titleClassNames = 'text-slate-400';

  if (hasError) {
    rowClassNames += ' border border-red-500';
    titleClassNames = 'text-red-500';
  }

  return (
    <View>
      {title && (
        <View className="mb-1">
          <CustomText className={titleClassNames}>
            {title}
          </CustomText>
        </View>
      )}
      <TouchableOpacity className={rowClassNames} onPress={() => {
        setIsVisible(true);
      }}>
        {icon && (
          <View className="pl-1">
            {icon}
          </View>
        )}
        <View className="px-1 pt-1 grow text-left">
          {value ? (
            <CustomText className="text-white text-base">
              {value.toLocaleDateString()}
            </CustomText>
          ) : (
            <CustomText className="text-slate-400 text-lg">
              Enter a date
            </CustomText>
          )}
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        date={value}
        onConfirm={currentDate => {
          setIsVisible(false);
          onChange(currentDate);
        }}
        onCancel={() => {
          setIsVisible(false);
        }}
      />

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

export default CustomDatepicker;
