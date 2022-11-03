import { SafeAreaView, TouchableOpacity, View, ScrollView, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomText from '../components/app/CustomText';
import { ArrowDownIcon, ArrowUpIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import PaymentCard from '../components/payments/PaymentCard';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/app/Background';
import SearchBar from '../components/app/SearchBar';
import { getDocs, orderBy, query, where } from 'firebase/firestore';
import { paymentsCollection, transformCollection } from '../firebase';
import useAuth from '../hooks/useAuth';
import { STATUS_PENDING, TYPE_DEBT } from '../constants/payment';
import { FaceFrownIcon } from 'react-native-heroicons/outline';

const PaymentsScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [refreshing, setRefreshing] = useState(true);
  const [payments, setPayments] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [pendingPaymentsTotal, setPendingPaymentsTotal] = useState(0);

  // TODO user adatainak lekérése
  // TODO payments hónap szerinti megjelenítése

  useEffect(() => {
    if (!refreshing) return;

    const q = query(paymentsCollection, where('userId', '==', user.uid), orderBy('createdAt', 'desc'));

    return;

    getDocs(q).then(snapshot => {
      const docs = transformCollection(snapshot.docs);
      //console.log(docs[0].createdAt.toDate());

      setPayments(docs.filter(item => item.status !== STATUS_PENDING));
      setPendingPayments(docs.filter(item => item.status === STATUS_PENDING));
      console.log(docs[0]);
    })
    .catch(error => console.log(error))
    .finally(() => setRefreshing(false));
  }, [refreshing]);

  useEffect(() => {
    setPendingPaymentsTotal(pendingPayments.reduce((sum, payment) => {
      const amount = parseInt(payment.amount);

      if (payment.type === TYPE_DEBT) {
        return sum - amount;
      }

      return sum + amount;
    }, 0));
  }, [pendingPayments]);

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <ScrollView 
          className="flex flex-col grow space-y-2 p-4 h-full"
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              tintColor={colors.white}
              onRefresh={() => setRefreshing(true)}
            />
          }>
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

          <View className="mb-4">
            <SearchBar screenName="Payments" />
          </View>

          {pendingPayments.length === 0 && payments.length === 0 && 
            <View className="flex flex-col space-y-4 items-center">
              <FaceFrownIcon color={colors.white} size={64} />
              <CustomText className="text-white text-base">
                There are no added payments yet
              </CustomText>
            </View>
          }

          {pendingPayments.length > 0 &&
            <View>
              <View className="flex flex-row justify-between items-center">
                <CustomText className="text-white text-lg">
                  Pending payments
                </CustomText>
                <TouchableOpacity className="p-2">
                  <CustomText className={"text-lg " + (pendingPaymentsTotal < 0 ? "text-red-500" : "text-white")}>
                    {pendingPaymentsTotal}Ft
                  </CustomText>
                </TouchableOpacity>
              </View>

              <View className="flex flex-col">
                {pendingPayments.map(pendingPayment => (
                  <PaymentCard key={pendingPayment.id} payment={pendingPayment} />
                ))}
              </View>
            </View>
          }

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
