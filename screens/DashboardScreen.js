import { SafeAreaView, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import CustomText from '../components/app/CustomText';
import { LinearGradient } from 'expo-linear-gradient';
import DashboardCard from '../components/dashboard/DashboardCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const DashboardScreen = () => {
  const { user } = useAuth();
  const renderPendingPaymentActions = () => (
    <>
      <TouchableOpacity className="p-2">
        <FontAwesomeIcon icon={faCheck} color="#16A34A" size={18} />
      </TouchableOpacity>
      <TouchableOpacity className="p-2">
        <FontAwesomeIcon icon={faTimes} color="#BE123C" size={18} />
      </TouchableOpacity>
    </>
  );

  const renderLoanActions = () => (
    <TouchableOpacity className="flex flex-row space-x-2 p-2">
      <CustomText className="text-rose-700">
        View
      </CustomText>
      <FontAwesomeIcon icon={faArrowRight} color="#BE123C" size={16} />
    </TouchableOpacity>
  );

  const renderDebtActions = () => (
    <TouchableOpacity className="flex flex-row space-x-2 p-2">
      <CustomText className="text-rose-700">
        View
      </CustomText>
      <FontAwesomeIcon icon={faArrowRight} color="#BE123C" size={16} />
    </TouchableOpacity>
  );

  return (
    <View>
      <LinearGradient
        colors={['#F87171', '#F43F5E', '#BE123C']} // red-400, rose-500, rose-700
        className="h-full w-full absolute"
      />
      <SafeAreaView className="">
        <ScrollView>
          <View className="p-4">
            <CustomText className="text-white text-3xl">
              Welcome {user?.displayName ?? 'my friend'}!
            </CustomText>
          </View>
          <View className="flex flex-col p-4">
            <CustomText fontType="semibold" className="text-rose-100 text-lg">
              Pending payments
            </CustomText>
            <View className="flex flex-col">
              <DashboardCard text="User" subText="$300" renderActions={renderPendingPaymentActions} />
              <DashboardCard text="User" subText="$300" renderActions={renderPendingPaymentActions} />
              <DashboardCard text="User" subText="$300" renderActions={renderPendingPaymentActions} />
            </View>
          </View>
          <View className="flex flex-col p-4">
            <CustomText className="text-rose-100 text-lg">
              Loans
            </CustomText>
            <View className="flex flex-col">
              <DashboardCard text="User" subText="Loan" renderActions={renderLoanActions} />
              <DashboardCard text="User" subText="Loan" renderActions={renderLoanActions} />
              <DashboardCard text="User" subText="Loan" renderActions={renderLoanActions} />
            </View>
          </View>
          <View className="flex flex-col p-4">
            <CustomText className="text-rose-100 text-lg">
              Debts
            </CustomText>
            <View className="flex flex-col">
              <DashboardCard text="User" subText="Debt" renderActions={renderDebtActions} />
              <DashboardCard text="User" subText="Debt" renderActions={renderDebtActions} />
              <DashboardCard text="User" subText="Debt" renderActions={renderDebtActions} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default DashboardScreen;
