import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as AppleAuthentication from 'expo-apple-authentication';

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <LinearGradient
        colors={['#FF826F', '#FC406F', '#F70039']}
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
        <View className="flex flex-col space-y-2">
          <TouchableOpacity className="flex flex-row items-center justify-center space-x-2 h-11 bg-white rounded-md">
            <FontAwesome5 name="google" size={12} color="black" />
            <Text className="text-base font-semibold">Sign in with Google</Text>
          </TouchableOpacity>

          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
            cornerRadius={5}
            style={{ width: 250, height: 44 }}
            onPress={async () => {
              try {
                const credential = await AppleAuthentication.signInAsync({
                  requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                  ],
                });
                // signed in
              } catch (e) {
                if (e.code === 'ERR_CANCELED') {
                  // handle that the user canceled the sign-in flow
                } else {
                  // handle other errors
                }
              }
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
