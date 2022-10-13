import { Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import CustomText from '../components/app/CustomText';
import Background from '../components/app/Background';
import Svg, { Path } from 'react-native-svg';
import { BanknotesIcon } from 'react-native-heroicons/outline';
import colors from 'tailwindcss/colors';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const { appleLogin, googleLogin } = useAuth();
  const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Constants.manifest.extra.firebase.googleClientId,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      googleLogin(response.params.id_token);
    }
  }, [response]);

  return (
    <View className="flex-1">
      <Background />
      <SafeAreaView className="flex-1 flex-col items-center justify-evenly">
        <View className="flex flex-col items-center">
          <BanknotesIcon size={54} color={colors.white} />
          <CustomText className="text-white text-4xl mt-8">
            iLending
          </CustomText>
          <CustomText className="text-slate-400 text-base">
            Handle your debts and loans easily
          </CustomText>
        </View>
        <View className="flex flex-col w-full px-6 space-y-2">
          <TouchableOpacity
            className="flex flex-row items-center justify-center space-x-2 h-11 bg-white rounded-md"
            onPress={() => {
              promptAsync({ useProxy: true, redirectUri }).catch(() => {
                // TODO
              })
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" viewBox="0 0 16 16">
              <Path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </Svg>
            <Text className="text-base font-semibold">
              Sign in with Google
            </Text>
          </TouchableOpacity>

          {Platform.OS === 'ios' &&
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
              buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
              cornerRadius={5}
              style={{ width: '100%', height: 44 }}
              onPress={appleLogin}
            />
          }
        </View>
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen;
