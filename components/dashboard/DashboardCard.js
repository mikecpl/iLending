import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../app/CustomText';

const DashboardCard = ({text, subText, renderActions}) => {
  return (
    <TouchableOpacity className="h-14 flex flex-row justify-between items-center bg-white rounded-lg shadow-md shadow-black/10 p-2 mb-2">
      <View className="flex flex-row grow justify-between pl-2 pr-4">
        <CustomText className="w-32 text-rose-700">
          {text}
        </CustomText>
        <CustomText className="text-rose-700">
          {subText}
        </CustomText>
      </View>
      <View className="flex flex-row items-center justify-end">
        {renderActions()}
      </View>
    </TouchableOpacity>
  )
}

export default DashboardCard;