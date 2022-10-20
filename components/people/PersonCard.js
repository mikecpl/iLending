import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../app/CustomText';
import { UserIcon } from 'react-native-heroicons/outline';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';

const PersonCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity className="h-14 flex flex-row justify-between items-center space-x-2 mb-2"
      onPress={() => navigation.navigate('Person', { item })}
    >
      <View className="bg-slate-700 justify-center p-4 rounded-full">
        <UserIcon color={colors.white} size={20} />
      </View>
      <View className="flex flex-col grow justify-between pl-2 pr-4">
        <CustomText className="w-32 text-white text-base">
          Somogyi Gergő
        </CustomText>
        <CustomText className="text-slate-500">
          3 payments
        </CustomText>
        <CustomText className="text-slate-500">
          2020 October 10
        </CustomText>
      </View>
      <View>
        <CustomText className="text-red-500 mr-2">
          - $300
        </CustomText>
      </View>
    </TouchableOpacity>
  )
}

export default PersonCard;
