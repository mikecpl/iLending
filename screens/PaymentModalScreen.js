import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../components/app/CustomText';
import { useNavigation } from '@react-navigation/native';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from 'tailwindcss/colors';
import Background from '../components/app/Background';

const PaymentModalScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Background />
      <View className="h-12 flex flex-row items-center px-4">
        <TouchableOpacity className="grow"
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faTimes} color={colors.white} size={18} />
        </TouchableOpacity>
        <CustomText className="text-xl text-white grow">
          Somogyi Gergő
        </CustomText>
      </View>
    </View>
  )
}

export default PaymentModalScreen;