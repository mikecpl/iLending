import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../components/app/CustomText';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, BellAlertIcon } from 'react-native-heroicons/outline';
import { CheckIcon, XMarkIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import Background from '../components/app/Background';

const PersonScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <View className="h-12 flex flex-row justify-between items-center px-4">
          <TouchableOpacity className="py-2" onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={colors.white} size={20} />
          </TouchableOpacity>
          <CustomText className="text-xl text-white m-auto">
            Somogyi Gergő
          </CustomText>
        </View>
        
        <ScrollView className="flex flex-col space-y-6 px-4 pt-4 pb-32">
          <View className="flex flex-col space-y-2">
            <CustomText className="text-slate-400 text-base">
              Payment data
            </CustomText>
            <View className="flex flex-col space-y-4 bg-slate-700 p-4 rounded-lg">
              <View className="flex flex-row space-x-4 justify-between items-center">
                <CustomText className="text-white text-base">
                  Type
                </CustomText>
                <CustomText className="text-red-500 text-base">
                  Debt
                </CustomText>
              </View>

              <View className="flex flex-row space-x-4 justify-between items-center">
                <CustomText className="text-white text-base">
                  Status
                </CustomText>
                <View className="flex flex-row items-center space-x-2">
                  <CheckIcon color={colors.white} size={18} />
                  <CustomText className="text-white text-base">
                    Completed
                  </CustomText>
                </View>
              </View>
              
              <View className="flex flex-row space-x-4 justify-between items-center">
                <CustomText className="text-white text-base">
                  Item
                </CustomText>
                <CustomText className="text-white text-base">
                  SPAR bevásárlás
                </CustomText>
              </View>

              <View className="flex flex-row space-x-4 justify-between items-center">
                <CustomText className="text-white text-base">
                  Amount
                </CustomText>
                <CustomText className="text-white text-base">
                  - 3 000$
                </CustomText>
              </View>

              <View className="flex flex-row space-x-4 justify-between items-center">
                <CustomText className="text-white text-base">
                  Date
                </CustomText>
                <CustomText className="text-white text-base">
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
                <CustomText className="text-white text-base">
                  Name
                </CustomText>
                <CustomText className="text-white text-base">
                  Somogyi Gergő
                </CustomText>
              </View>

              <View className="flex flex-row space-x-4 justify-between items-center">
                <CustomText className="text-white text-base">
                  E-mail
                </CustomText>
                <CustomText className="text-white text-base">
                  mikecorporal@gmail.com
                </CustomText>
              </View>

              <View className="flex flex-row space-x-4 justify-between items-center">
                <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-slate-800 rounded-lg p-3"
                  onPress={() => {}}
                >
                  <BellAlertIcon color={colors.white} size={22} />
                  <CustomText className="text-base text-white">
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
      </SafeAreaView>
    </View>
  )
}

export default PersonScreen;
