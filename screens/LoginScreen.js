import { Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons/faHandHoldingDollar';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import * as AppleAuthentication from 'expo-apple-authentication';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import CustomText from '../components/app/CustomText';
import Background from '../components/app/Background';

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
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            size={48}
            color="white"
          />
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
            <FontAwesomeIcon
              icon={faGoogle}
              size={12}
              color="black"
            />
            <Text className="text-base font-semibold">Sign in with Google</Text>
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
