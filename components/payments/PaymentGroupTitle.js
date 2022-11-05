import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomText from '../app/CustomText';
import { TYPE_DEBT } from '../../constants/payment';

const PaymentGroupTitle = ({title, payments}) => {
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
    </View>
  )
}

export default PaymentGroupTitle;
