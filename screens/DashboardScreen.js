import { SafeAreaView, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import CustomText from '../components/app/CustomText';
import colors from 'tailwindcss/colors';
import PaymentCard from '../components/payments/PaymentCard';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/app/Background';
import { BellIcon, PlusCircleIcon, PlusIcon } from 'react-native-heroicons/outline';
import { ArrowDownIcon, ArrowUpIcon } from 'react-native-heroicons/solid';
import { TYPE_DEBT, TYPE_LOAN } from '../constants/payment';

const DashboardScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <ScrollView className="flex flex-col grow space-y-4 p-4 h-full">
          <View className="flex flex-row justify-between items-center mb-4">
            <CustomText className="text-white dark:text-black text-2xl">
              Welcome {user.displayName ?? 'my friend'}!
            </CustomText>
            <TouchableOpacity className="p-2">
              <BellIcon color={colors.white} size={24} />
            </TouchableOpacity>
          </View>

          <View className="h-48 rounded-lg">
            <ImageBackground source={
              require('../assets/credit-card.png')
            } resizeMode="cover" imageStyle={{borderRadius: 10}}>
              <View className="flex flex-col justify-end h-full w-full rounded-lg p-4">
                <View className="flex flex-col items-start p-2">
                  <CustomText className="text-white">
                    Total balance
                  </CustomText>
                  <CustomText className="text-white text-2xl">
                    $5 000
                  </CustomText>
                </View>
              </View>
            </ImageBackground>
          </View>

          <TouchableOpacity className="flex flex-row justify-center space-x-2 grow items-center bg-ilending-sky-600 rounded-lg p-3 mb-4"
            onPress={() => navigation.navigate('PaymentFormModal', {type: TYPE_LOAN})}
          >
            <PlusIcon color={colors.white} size={20} />
            <CustomText className="text-lg text-white">
              Add a payment
            </CustomText>
          </TouchableOpacity>

          <View className="mb-4">
            <View className="flex flex-row justify-between items-start">
              <CustomText className="text-white text-lg">
                Payments
              </CustomText>
              <TouchableOpacity className="p-2" onPress={() => navigation.navigate('Payments')}>
                <CustomText className="text-white">
                  See all
                </CustomText>
              </TouchableOpacity>
            </View>

            <View className="flex flex-col">
              {/* <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard /> */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default DashboardScreen;
