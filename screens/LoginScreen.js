import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as AppleAuthentication from 'expo-apple-authentication';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const { appleLogin, googleLogin } = useAuth();
  const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Constants.manifest.extra.firebase.googleClientId,
  });

  // TODO ikonok

  useEffect(() => {
    if (response?.type === 'success') {
      googleLogin(response.params.id_token);
    }
  }, [response]);

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <LinearGradient
        //colors={['#FF826F', '#FC406F', '#F70039']}
        colors={['#F87171', '#F43F5E', '#BE123C']} // red-400, rose-500, rose-700
        className="h-full w-full absolute"
      />
      <SafeAreaView className="flex-1 flex-col items-center justify-evenly">
        <View className="flex flex-col items-center">
          {/* <FontAwesome5
            name="hand-holding-usd"
            size={48}
            color="white"
          /> */}
          <Text className="text-white text-3xl mt-8">iLending</Text>
          <Text className="text-gray-200 text-sm">Handle your debts and lendings easily</Text>
        </View>
        <View className="flex flex-col space-y-2">
          <TouchableOpacity
            className="flex flex-row items-center justify-center space-x-2 h-11 bg-white rounded-md"
            onPress={() => {
              promptAsync({ useProxy: true, redirectUri }).catch(() => {
                // TODO
              })
            }}
          >
            {/* <FontAwesome5 name="google" size={12} color="black" /> */}
            <Text className="text-base font-semibold">Sign in with Google</Text>
          </TouchableOpacity>

          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
            cornerRadius={5}
            style={{ width: 250, height: 44 }}
            onPress={appleLogin}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen;