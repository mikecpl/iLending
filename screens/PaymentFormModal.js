import { ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../components/app/CustomText';
import { useNavigation, useRoute } from '@react-navigation/native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import Background from '../components/app/Background';
import { TYPE_DEBT } from '../constants/payment';
import CustomTextInput from '../components/form/CustomTextInput';
import { BanknotesIcon, CalendarDaysIcon, ChatBubbleBottomCenterTextIcon, InboxStackIcon, PaperAirplaneIcon, UserIcon } from 'react-native-heroicons/outline';
import CustomTextareaInput from '../components/form/CustomTextarea';
import CustomDatepicker from '../components/form/CustomDatepicker';
import useForm from '../hooks/useForm';

const PaymentFormModalScreen = () => {
  const {formValues, setFormValue, submitForm, getError} = useForm({
    expiresAt: new Date()
  });
  const navigation = useNavigation();
  const route = useRoute();
  const { type, payment } = route.params;

  return (
    <View className="flex-1">
      <Background />
      <View className="h-12 flex flex-row justify-between items-center px-4">
        <CustomText className="text-xl text-white m-auto">
          {payment 
            ? type === TYPE_DEBT ? 'Edit debt' : 'Edit loan'
            : type === TYPE_DEBT ? 'New debt' : 'New loan'
          }
        </CustomText>
        <TouchableOpacity className="py-2" onPress={() => navigation.goBack()}>
          <XMarkIcon color={colors.white} size={20} />
        </TouchableOpacity>
      </View>
      
      <ScrollView className="flex flex-col space-y-6 p-4">
        <View className="flex flex-col space-y-4">
          <View>
            <CustomTextInput
              title="Item" 
              placeholder="Enter an item"
              icon={<InboxStackIcon color={colors.slate[400]} size={20} />}
              errors={[]}
              onChange={value => setFormValue('item', value)}
              value={formValues['item']}
            />
          </View>
          <View>
            <CustomTextInput
              title={type === TYPE_DEBT ? 'Debter' : 'Loaner'}
              placeholder="Enter a name"
              icon={<UserIcon color={colors.slate[400]} size={20} />}
              errors={[]}
              onChange={value => setFormValue('person', value)}
              value={formValues['person']}
            />
          </View>
          <View>
            <CustomTextInput
              title="Amount" 
              placeholder="Enter an amount"
              icon={<BanknotesIcon color={colors.slate[400]} size={20} />}
              errors={[]}
              onChange={value => setFormValue('amount', value)}
              value={formValues['amount']}
            />
          </View>
          <View>
            <CustomDatepicker
              title="Expiration date" 
              placeholder="Enter an expiration date"
              icon={<CalendarDaysIcon color={colors.slate[400]} size={20} />}
              errors={[]}
              onChange={value => setFormValue('expiresAt', value)}
              value={formValues['expiresAt']}
            />
          </View>
          <View>
            <CustomTextareaInput
              title="Note" 
              placeholder="Enter a note"
              icon={<ChatBubbleBottomCenterTextIcon color={colors.slate[400]} size={20} />}
              errors={[]}
              onChange={value => setFormValue('note', value)}
              value={formValues['note']}
            />
          </View>
          <TouchableOpacity className="flex flex-row items-center justify-center bg-ilending-sky-600 rounded-lg p-2 space-x-2"
            onPress={() => submitForm()}
          >
            <PaperAirplaneIcon color={colors.white} size={22} />
            <CustomText className="text-white text-lg">
              Submit
            </CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default PaymentFormModalScreen;
