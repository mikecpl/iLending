import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const PendingPayment = () => {
  return (
    <TouchableOpacity className="flex flex-row bg-white rounded-sm shadow-md shadow-black/10 p-4 mb-2">
      <View className="text-black basis-1/4">
        <Text>User</Text>
      </View>
      <Text className="basis-1/4 text-black">$300</Text>
      <Text className="basis-1/4 text-black">Debt</Text>
      <View className="basis-1/4 flex flex-row items-center justify-end">
        <TouchableOpacity className="px-2 ">
          <FontAwesomeIcon icon={faCheck} color="#16A34A" size={18} />
        </TouchableOpacity>
        <TouchableOpacity className="px-2">
          <FontAwesomeIcon icon={faTimes} color="#BE123C" size={18} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default PendingPayment;