import { SafeAreaView, TouchableOpacity, View, ScrollView, Switch } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../components/app/CustomText';
import { UserIcon, PencilIcon, UserMinusIcon, CogIcon, MoonIcon, ArrowRightOnRectangleIcon, BellIcon, KeyIcon } from 'react-native-heroicons/outline';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/app/Background';
import * as ilendingColors from '../etc/colors';
import useAuth from '../hooks/useAuth';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <ScrollView className="flex flex-col grow space-y-6 p-4 h-full">
          <CustomText className="text-white dark:text-black text-2xl">
            Profile
          </CustomText>

          <View className="flex flex-col items-center">
            <View className="mb-4">
              <TouchableOpacity className="h-28 w-28 flex flex-row justify-center items-center bg-slate-700 p-4 rounded-full"
                onPress={() => navigation.navigate('PaymentModal')}
              >
                <UserIcon color={colors.white} size={52} />
              </TouchableOpacity>
              <TouchableOpacity className="absolute right-0 bottom-0 h-8 w-8 flex flex-row justify-center items-center bg-ilending-sky-600 p-4 rounded-full"
                onPress={() => navigation.navigate('PaymentModal')}
              >
                <PencilIcon color={colors.white} size={18} />
              </TouchableOpacity>
            </View>

            <CustomText className="text-white text-2xl">
              Somogyi Gergő
            </CustomText>

            <CustomText className="text-slate-500 text-base">
              mikecorporal@gmail.com
            </CustomText>
          </View>

          <View className="flex flex-col space-y-2">
            <View className="flex flex-row space-x-2 items-center">
              <CogIcon color={colors.slate[500]} size={20} />
              <CustomText className="text-slate-500 text-base">
                General
              </CustomText>
            </View>
            <View className="flex flex-col space-y-4 bg-slate-700 p-4 rounded-lg">
              <View className="flex flex-row space-x-4 justify-between items-center">
                <View className="flex flex-row space-x-4 items-center">
                  <MoonIcon color={colors.white} size={20} />
                  <CustomText className="text-white text-base">
                    Dark mode
                  </CustomText>
                </View>
                <Switch
                  trackColor={{ false: colors.slate[600], true: ilendingColors['ilending-sky'][600] }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors.slate[600]}
                  onValueChange={setIsDarkMode}
                  value={isDarkMode}
                />
              </View>

              <View className="flex flex-row space-x-4 justify-between items-center">
                <View className="flex flex-row space-x-4 items-center">
                  <BellIcon color={colors.white} size={20} />
                  <CustomText className="text-white text-base">
                    Notifications
                  </CustomText>
                </View>
                <Switch
                  trackColor={{ false: colors.slate[600], true: ilendingColors['ilending-sky'][600] }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors.slate[600]}
                  onValueChange={setIsNotificationsEnabled}
                  value={isNotificationsEnabled}
                />
              </View>
            </View>
          </View>

          <View className="flex flex-col space-y-2">
            <View className="flex flex-row space-x-2 items-center">
              <KeyIcon color={colors.slate[500]} size={20} />
              <CustomText className="text-slate-500 text-base">
                Security
              </CustomText>
            </View>
            <View className="flex flex-col space-y-4 bg-slate-700 p-4 rounded-lg">
              <TouchableOpacity className="flex flex-row space-x-4 justify-start items-center" onPress={logout}>
                <ArrowRightOnRectangleIcon color={colors.white} size={20} />
                <CustomText className="text-white text-base">
                  Logout
                </CustomText>
              </TouchableOpacity>

              <TouchableOpacity className="flex flex-row space-x-4 justify-start items-center">
                <UserMinusIcon color={colors.red[500]} size={20} />
                <CustomText className="text-red-500 text-base">
                  Delete profile
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default ProfileScreen;
