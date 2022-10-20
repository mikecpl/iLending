import { SafeAreaView, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import CustomText from '../components/app/CustomText';
import { ArrowDownIcon, ArrowUpIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import PaymentCard from '../components/payments/PaymentCard';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/app/Background';
import SearchBar from '../components/app/SearchBar';

const PaymentsScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <ScrollView className="flex flex-col grow space-y-2 p-4 h-full">
          <View className="mb-4">
            <CustomText className="text-white dark:text-black text-2xl">
              Payments
            </CustomText>
          </View>

          <View className="flex flex-row justify-between rounded-xl space-x-4 mb-4">
            <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-ilending-sky-600 rounded-lg p-3"
              onPress={() => navigation.navigate('PaymentModal')}
            >
              <ArrowUpIcon color={colors.white} size={20} />
              <CustomText className="text-lg text-white">
                Debt
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-red-500 rounded-lg p-3">
              <ArrowDownIcon color={colors.white} size={20} />
              <CustomText className="text-lg text-white">
                Loan
              </CustomText>
            </TouchableOpacity>
          </View>

          <View>
            <SearchBar screenName="Payments" />
          </View>

          <View>
            <View className="flex flex-row justify-between items-center">
              <CustomText className="text-white text-lg">
                Pending payments
              </CustomText>
              <TouchableOpacity className="p-2">
                <CustomText className="text-red-500 text-lg">
                  - $900
                </CustomText>
              </TouchableOpacity>
            </View>

            <View className="flex flex-col">
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
            </View>
          </View>

          <View>
            <View className="flex flex-row justify-between items-center">
              <CustomText className="text-white text-lg">
                2022 October
              </CustomText>
              <TouchableOpacity className="p-2">
                <CustomText className="text-red-500 text-lg">
                  - $2 100
                </CustomText>
              </TouchableOpacity>
            </View>

            <View className="flex flex-col">
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
            </View>
          </View>

          <View className="mb-4">
            <View className="flex flex-row justify-between items-center">
              <CustomText className="text-white text-lg">
                2022 September
              </CustomText>
              <TouchableOpacity className="p-2">
                <CustomText className="text-red-500 text-lg">
                  - $1 500
                </CustomText>
              </TouchableOpacity>
            </View>

            <View className="flex flex-col">
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default PaymentsScreen;
