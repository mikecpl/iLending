import { View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomText from '../app/CustomText';
import { ArrowDownIcon, ArrowUpIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';
import { TYPE_DEBT } from '../../constants/payment';
import { doc, getDoc } from 'firebase/firestore';
import { db, transformData } from '../../firebase';
import { errorToast } from '../app/toast';

const PaymentCard = ({ payment }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});

  useEffect(() => {
    const docRef = doc(db, 'users', payment.userId);

    getDoc(docRef).then(snapshot => {
      setUser(transformData(snapshot));
    }).catch(() => errorToast());
  }, []);
  
  // TODO remove
  if (!payment) {
    payment = {
      item: 'Auchan',
      type: 'debt',
      amount: 2000
    }
  }

  const amount = `${payment.amount}Ft`;

  return (
    <TouchableOpacity className="min-h-[48px] h-fit flex flex-row justify-between items-center space-x-2 mb-2"
      onPress={() => navigation.navigate('PaymentNavigation', {screen: 'Payment', initial: false})}
    >
      {payment.type === TYPE_DEBT
        ? (
          <View className="bg-red-500 justify-center p-2 rounded-lg">
            <ArrowDownIcon color={colors.white} size={20} />
          </View>
        )
        : (
          <View className="bg-ilending-sky-600 justify-center p-2 rounded-lg">
            <ArrowUpIcon color={colors.white} size={20} />
          </View>
        )
      }
      <View className="flex flex-col w-1/3 grow shrink-0 justify-between pl-2 pr-4">
        <CustomText className="text-white text-base">
          Gergo Somogyi
        </CustomText>
        <CustomText className="text-slate-500">
          {payment.item}
        </CustomText>
      </View>
      <View className="flex flex-row items-center justify-end mr-2">
        {payment.type === TYPE_DEBT 
          ? ( 
            <CustomText className="text-red-500">
              -{amount}
            </CustomText>
          )
          : (
            <CustomText className="text-white">
              {amount}
            </CustomText>
          )
        }
      </View>
    </TouchableOpacity>
  )
}

export default PaymentCard;
