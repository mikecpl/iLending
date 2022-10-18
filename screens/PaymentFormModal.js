import { ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../components/app/CustomText';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import Background from '../components/app/Background';
import { TYPE_DEBT } from '../constants/payment';
import CustomTextInput from '../components/form/CustomTextInput';

const PaymentFormModalScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { type, payment } = route.params;

  return (
    <View className="flex-1">
      <Background />
      <View className="h-12 flex flex-row justify-between items-center px-4">
        <CustomText className="text-xl text-white m-auto">
          {payment 
            ? type === TYPE_DEBT ? 'Edit debt' : 'Edit loan'
            : type === TYPE_DEBT ? 'New debt' : 'New loan'
          }
        </CustomText>
        <TouchableOpacity className="py-2" onPress={() => navigation.goBack()}>
          <XMarkIcon color={colors.white} size={20} />
        </TouchableOpacity>
      </View>
      
      <ScrollView className="flex flex-col space-y-6 p-4">
        <View className="flex flex-col space-y-4">
          <View>
            <CustomTextInput 
              title="Name" 
              placeholder="Enter a name"
              icon={<MagnifyingGlassIcon color={colors.slate[400]} size={20} />}
              helperText="Max length is 255 character"
              errors={['The field is required!', 'Enter a valid name!']}
            />
          </View>
          <View>
            <CustomTextInput
              title="Item" 
              placeholder="Enter an item"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default PaymentFormModalScreen;
