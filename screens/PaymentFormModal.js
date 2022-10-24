import { ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../components/app/CustomText';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AtSymbolIcon, XMarkIcon } from 'react-native-heroicons/solid';
import colors from 'tailwindcss/colors';
import Background from '../components/app/Background';
import { STATUS_PENDING, TYPE_DEBT } from '../constants/payment';
import CustomTextInput from '../components/form/CustomTextInput';
import { BanknotesIcon, CalendarDaysIcon, ChatBubbleBottomCenterTextIcon, InboxStackIcon, PaperAirplaneIcon, UserIcon } from 'react-native-heroicons/outline';
import CustomTextareaInput from '../components/form/CustomTextarea';
import CustomDatepicker from '../components/form/CustomDatepicker';
import useForm from '../hooks/useForm';
import { addDoc, collection, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore'; 
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';

const PaymentFormModalScreen = () => {
  const route = useRoute();
  const { user } = useAuth();
  const { type, payment } = route.params;
  const { formValues, setFormValue, submitForm, getError } = useForm({
    occuredAt: new Date()
  });
  const navigation = useNavigation();
  const submit = async () => {
    // TODO submitForm-ba betenni success és error handlinggel
    // TODO rules-t beállítani firebase-ben

    await addDoc(collection(db, 'payments'), {
      item: formValues.item,
      type,
      amount: formValues.amount,
      currency: 'HUF', // TODO
      userId: user.uid,
      personId: 0, // TODO
      personName: formValues.personName,
      personEmail: formValues.personEmail ?? null,
      status: STATUS_PENDING,
      note: formValues.note ?? null,
      occuredAt: Timestamp.fromDate(formValues.occuredAt),
      expiresAt: formValues.expiresAt
        ? Timestamp.fromDate(formValues.expiresAt)
        : null,
      createdAt: serverTimestamp()
    });
  };

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
              title={type === TYPE_DEBT ? 'Debter\'s name' : 'Loaner\'s name'}
              placeholder="Enter a name"
              icon={<UserIcon color={colors.slate[400]} size={20} />}
              errors={[]}
              onChange={value => setFormValue('personName', value)}
              value={formValues['personName']}
            />
          </View>
          <View>
            <CustomTextInput
              title={type === TYPE_DEBT ? 'Debter\'s email address' : 'Loaner\'s email address'}
              placeholder="Enter an email address"
              helperText="Fill this field if you want to send notification"
              icon={<AtSymbolIcon color={colors.slate[400]} size={20} />}
              errors={[]}
              onChange={value => setFormValue('personEmail', value)}
              value={formValues['personEmail']}
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
              title={type === TYPE_DEBT ? 'Debit date' : 'Loan date'}
              placeholder="Enter a date"
              icon={<CalendarDaysIcon color={colors.slate[400]} size={20} />}
              errors={[]}
              onChange={value => setFormValue('occuredAt', value)}
              value={formValues['occuredAt']}
            />
          </View>
          <View>
            <CustomDatepicker
              title="Expiration date" 
              placeholder="Enter a date"
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
          <TouchableOpacity className="flex flex-row items-center justify-center bg-ilending-sky-600 rounded-lg p-2 space-x-2 mb-16"
            onPress={() => {
              submit();
              navigation.goBack();
            }}>
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
