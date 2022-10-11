import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from '../app/CustomText';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';

const PeopleCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity className="h-14 flex flex-row justify-between items-center space-x-2 mb-2"
      onPress={() => navigation.navigate('PaymentModal')}
    >
      <View className="bg-red-500 justify-center p-2 rounded-lg">
        <FontAwesomeIcon icon={faArrowDown} color={colors.white} size={18} />
      </View>
      <View className="flex flex-col grow justify-between pl-2 pr-4">
        <CustomText className="w-32 text-white text-base">
          Somogyi Gergő
        </CustomText>
        <CustomText className="text-slate-500">
          SPAR bevásárlás
        </CustomText>
      </View>
      <View className="flex flex-row items-center justify-end">
        <CustomText className="text-red-500 mr-2">
          - $300
        </CustomText>
      </View>
    </TouchableOpacity>
  )
}

export default PeopleCard;
