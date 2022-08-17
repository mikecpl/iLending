import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Loan = () => {
  return (
    <TouchableOpacity className="flex flex-row bg-white rounded-sm shadow-md shadow-black/10 p-4 mb-2">
      <View className="text-black basis-1/4">
        <Text>User</Text>
      </View>
      <Text className="basis-2/4 text-black">Loan</Text>
      <View className="basis-1/4 flex flex-row space-x-2 items-center justify-end">
        <Text className="text-rose-700">View</Text>
        <FontAwesomeIcon icon={faArrowRight} color="#BE123C" size={16} />
      </View>
    </TouchableOpacity>
  )
}

export default Loan;