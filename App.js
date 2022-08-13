import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <LinearGradient
        colors={['#FF826F', '#FC406F', 'F70039']}
        className="h-full w-full absolute"
      />
      <SafeAreaView className="flex-1 flex-col items-center justify-evenly">
        <View className="flex flex-col items-center">
          <FontAwesome5
            name="hand-holding-usd"
            size={48}
            color="white"
          />
          <Text className="text-white text-3xl mt-8">iLending</Text>
          <Text className="text-gray-200 text-sm">Handle your debts and lendings easily</Text>
        </View>
        <View>
          <Text className="text-white text-3xl mt-8">iLending</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
