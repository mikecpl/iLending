import { View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomText from '../app/CustomText';
import { ArrowDownIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';
import { TYPE_DEBT } from '../../constants/payment';
import PaymentCard from './PaymentCard';

const PaymentGroup = ({title, payments}) => {
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(payments.reduce((sum, payment) => {
      const amount = parseInt(payment.amount);

      if (payment.type === TYPE_DEBT) {
        return sum - amount;
      }

      return sum + amount;
    }, 0));
  }, [payments]);

  return (
    <View>
      <View className="flex flex-row justify-between items-center">
        <CustomText className="text-white text-lg">
          {title}
        </CustomText>
        <CustomText className={"text-lg " + (total < 0 ? "text-red-500" : "text-white")}>
          {total}Ft
        </CustomText>
      </View>

      <View className="flex flex-col">
        {payments.map(payment => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </View>
    </View>
  )
}

export default PaymentGroup;
