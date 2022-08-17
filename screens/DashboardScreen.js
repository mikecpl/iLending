import { Text, SafeAreaView, View, ScrollView } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import Loan from '../components/dashboard/Loan';
import Debt from '../components/dashboard/Debt';
import PendingPayment from '../components/dashboard/PendingPayment';

const DashboardScreen = () => {
  const { user } = useAuth();

  return (
    <SafeAreaView className="grow bg-white">
      <ScrollView>
        <View className="p-4">
          <Text className="text-rose-700 text-3xl font-semibold">
            Welcome {user.displayName ?? 'my friend'}!
          </Text>
        </View>
        <View className="flex flex-col p-4">
          <Text className="text-gray-700 text-lg font-semibold">
            Pending payments
          </Text>
          <View className="flex flex-col">
            <PendingPayment />
            <PendingPayment />
            <PendingPayment />
          </View>
        </View>
        <View className="flex flex-col p-4">
          <Text className="text-gray-700 text-lg font-semibold">
            Loans
          </Text>
          <View className="flex flex-col">
            <Loan />
            <Loan />
            <Loan />
          </View>
        </View>
        <View className="flex flex-col p-4">
          <Text className="text-gray-700 text-lg font-semibold">
            Debts
          </Text>
          <View className="flex flex-col">
            <Debt />
            <Debt />
            <Debt />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DashboardScreen;
