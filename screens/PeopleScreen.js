import { SafeAreaView, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import CustomText from '../components/app/CustomText';
import { UserPlusIcon } from 'react-native-heroicons/outline';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/app/Background';
import PersonCard from '../components/people/PersonCard';
import SearchBar from '../components/app/SearchBar';

const PeopleScreen = () => {
  const navigation = useNavigation();
  const people = [1, 2, 3];

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <ScrollView className="flex flex-col grow space-y-6 p-4 h-full">
          <View className="flex flex-row justify-between items-center">
            <CustomText className="text-white dark:text-black text-2xl">
              People
            </CustomText>
            <TouchableOpacity className="p-2">
              <UserPlusIcon color={colors.white} size={22} />
            </TouchableOpacity>
          </View>

          <View>
            <SearchBar screenName="People" />
          </View>

          <View className="flex flex-col space-y-2">
            {people.map((item, key) => (
              <View key={key}>
                <PersonCard />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default PeopleScreen;
