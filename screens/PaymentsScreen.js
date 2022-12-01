import { SafeAreaView, TouchableOpacity, View, SectionList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomText from '../components/app/CustomText';
import { ArrowDownIcon, ArrowUpIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/app/Background';
import SearchBar from '../components/app/SearchBar';
import { getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore';
import { paymentsCollection, transformCollection } from '../firebase';
import useAuth from '../hooks/useAuth';
import { STATUS_COMPLETED, STATUS_DENIED, STATUS_PENDING, TYPE_DEBT, TYPE_LOAN } from '../constants/payment';
import { FaceFrownIcon, PlusCircleIcon, PlusIcon } from 'react-native-heroicons/outline';
import PaymentGroupTitle from '../components/payments/PaymentGroupTitle';
import PaymentCard from '../components/payments/PaymentCard';
import { errorToast } from '../components/app/toast';

const LIMIT = 10;

const PaymentsScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isAllDataFetched, setIsAllDataFetched] = useState(false);
  const data = [
    {
      title: 'Pending payments',
      data: pendingPayments
    },
    {
      title: 'Payments',
      data: payments
    }
  ];

  // TODO user adatainak lekérése
  // TODO payments hónap szerinti megjelenítése
  // TODO aggregált total count https://firebase.google.com/docs/firestore/solutions/aggregation#solution_cloud_functions
  // TODO átvariálni, hogy lekérni az összes adatot? utánajárni, hogy firestore-ban (nosql-ben) ez mennyire költséges
  // TODO átvariálni, hogy kevesebb dolgot kérjen be (elején még nem lesz határidő pl., viszont ki lehessen választani, hogy ki fizetett, ha van user megadva, tehát fel lehet vinni sima vásárlást is, ami nem tartozás másnak)

  const fetchPendingPayments = () => {
    const q = query(
      paymentsCollection, 
      where('userId', '==', user.uid),
      where('status', '==', STATUS_PENDING),
      orderBy('createdAt', 'desc'),
    );

    getDocs(q).then(snapshot => {
      if (snapshot.docs.length === 0) return;

      setPendingPayments(transformCollection(snapshot.docs));
    }).catch(() => errorToast());
  };

  useEffect(() => {
    fetchPendingPayments();
  }, []);
  
  const fetchPayments = () => {
    if (isAllDataFetched || isLoading) return;

    setIsLoading(true);

    let q = query(
      paymentsCollection, 
      where('userId', '==', user.uid),
      where('status', 'in', [STATUS_COMPLETED, STATUS_DENIED]),
      orderBy('createdAt', 'desc'),
      limit(LIMIT)
    );

    if (lastDoc) {
      q = query(
        paymentsCollection, 
        where('userId', '==', user.uid),
        where('status', 'in', [STATUS_COMPLETED, STATUS_DENIED]),
        orderBy('createdAt', 'desc'),
        startAfter(lastDoc),
        limit(LIMIT)
      );
    }

    getDocs(q).then(snapshot => {
      if (snapshot.docs.length === 0) {
        setIsAllDataFetched(true);
      }

      const docs = transformCollection(snapshot.docs);
      setLastDoc(snapshot.docs[snapshot.docs.length-1]);

      // TODO
      // setPayments(prevState => {
      //   docs.forEach(doc => {
      //     if (doc.status === STATUS_PENDING) {
      //       prevState
  
      //       return;
      //     }
      //   });
      // });

      setPayments(prevState => {
        return prevState.concat(docs);
      });
    }).catch((e) => console.log(e))
    .finally(() => setIsLoading(false));
  };

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView>
        <View className="flex flex-col grow space-y-2 p-4 h-full">
          <View className="flex flex-row justify-between items-center mb-4">
            <CustomText className="text-white dark:text-black text-2xl">
              Payments
            </CustomText>
            <TouchableOpacity
              className="p-2"
              onPress={() => navigation.navigate('PaymentFormModal', {type: TYPE_LOAN})} 
            >
              <PlusIcon color={colors.white} size={24} />
            </TouchableOpacity>
          </View>

          <View>
            <SearchBar screenName="Payments" />
          </View>

          <SectionList
            sections={data}
            keyExtractor={(item, index) => index}
            stickySectionHeadersEnabled={false}
            renderItem={({ item }) => <PaymentCard payment={item} />}
            renderSectionHeader={({ section: { title, data } }) => (
              <View className="mt-4 mb-2">
                <PaymentGroupTitle title={title} payments={data} />
              </View>
            )}
            ListEmptyComponent={() => (
              <View className="flex flex-col space-y-4 items-center">
                <FaceFrownIcon color={colors.white} size={64} />
                <CustomText className="text-white text-base">
                  There are no added payments yet
                </CustomText>
              </View>
            )}
            onEndReached={() => fetchPayments()}
          />

          {isLoading &&
            <View>
              <ActivityIndicator />
            </View>
          }
        </View>
      </SafeAreaView>
    </View>
  )
}

export default PaymentsScreen;
