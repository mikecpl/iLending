import { ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../components/app/CustomText';
import { useNavigation } from '@react-navigation/native';
import { faBell, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import colors from 'tailwindcss/colors';
import Background from '../components/app/Background';

const PaymentModalScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Background />
      <View className="h-12 flex flex-row justify-between items-center px-4">
        <CustomText className="text-xl text-white m-auto">
          Somogyi Gergő
        </CustomText>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faTimes} color={colors.white} size={18} />
        </TouchableOpacity>
      </View>
      
      <ScrollView className="flex flex-col space-y-6 p-4">
        <View className="flex flex-col space-y-2">
          <CustomText className="text-slate-400 text-base">
            Payment data
          </CustomText>
          <View className="flex flex-col space-y-4 bg-slate-700 p-4 rounded-lg">
            <View className="flex flex-row space-x-4 justify-between items-center">
              <CustomText className="text-white text-lg">
                Type
              </CustomText>
              <CustomText className="text-red-500 text-lg">
                Debt
              </CustomText>
            </View>
            
            <View className="flex flex-row space-x-4 justify-between items-center">
              <CustomText className="text-white text-lg">
                Item
              </CustomText>
              <CustomText className="text-white text-lg">
                SPAR bevásárlás
              </CustomText>
            </View>

            <View className="flex flex-row space-x-4 justify-between items-center">
              <CustomText className="text-white text-lg">
                Amount
              </CustomText>
              <CustomText className="text-white text-lg">
                - 3 000$
              </CustomText>
            </View>

            <View className="flex flex-row space-x-4 justify-between items-center">
              <CustomText className="text-white text-lg">
                Date
              </CustomText>
              <CustomText className="text-white text-lg">
                2022.10.08.
              </CustomText>
            </View>
          </View>
        </View>

        <View className="flex flex-col space-y-2">
          <CustomText className="text-slate-400 text-base">
            User info
          </CustomText>
          <View className="flex flex-col space-y-4 bg-slate-700 p-4 rounded-lg">
            <View className="flex flex-row space-x-4 justify-between items-center">
              <CustomText className="text-white text-lg">
                Name
              </CustomText>
              <CustomText className="text-white text-lg">
                Somogyi Gergő
              </CustomText>
            </View>

            <View className="flex flex-row space-x-4 justify-between items-center">
              <CustomText className="text-white text-lg">
                E-mail
              </CustomText>
              <CustomText className="text-white text-lg">
                mikecorporal@gmail.com
              </CustomText>
            </View>

            <View className="flex flex-row space-x-4 justify-between items-center">
              <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-slate-800 rounded-lg p-3"
                onPress={() => navigation.navigate('PaymentModal')}
              >
                <FontAwesomeIcon icon={faBell} color={colors.white} size={18} />
                <CustomText className="text-lg text-white">
                  Send a reminder
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex flex-col space-y-2">
          <CustomText className="text-slate-400 text-base">
            Additional info
          </CustomText>
          <View className="bg-slate-700 p-4 rounded-lg">
            <CustomText className="text-white text-base">
              This is some additional info where you can put anything related to this payment.
            </CustomText>
          </View>
        </View>
      </ScrollView>

      <View className="flex flex-row justify-between space-x-4 pt-4 pb-8 pl-4 pr-8 bg-slate-800">
        <TouchableOpacity className="flex flex-row justify-center space-x-2 w-1/2 items-center bg-ilending-sky-600 rounded-lg p-3"
          onPress={() => navigation.navigate('PaymentModal')}
        >
          <FontAwesomeIcon icon={faCheck} color={colors.white} size={18} />
          <CustomText className="text-base text-white">
            Complete
          </CustomText>
        </TouchableOpacity>

        <TouchableOpacity className="flex flex-row justify-center space-x-2 w-1/2 items-center bg-red-500 rounded-lg p-3">
          <FontAwesomeIcon icon={faTimes} color={colors.white} size={18} />
          <CustomText className="text-base text-white">
            Deny
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PaymentModalScreen;
