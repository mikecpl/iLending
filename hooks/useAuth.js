import React, { createContext, useContext, useEffect, useId, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as AppleAuthentication from 'expo-apple-authentication';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from 'expo-constants';

const AuthContext = createContext({});
const firebaseConfig = {
  apiKey: Constants.manifest.extra.firebase.apiKey,
  authDomain: Constants.manifest.extra.firebase.authDomain,
  projectId: Constants.manifest.extra.firebase.projectId,
  storageBucket: Constants.manifest.extra.firebase.storageBucket,
  messagingSenderId: Constants.manifest.extra.firebase.messagingSenderId,
  appId: Constants.manifest.extra.firebase.appId,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);

  useEffect(() => {
    const load = async () => {
      const userObject = await SecureStore.getItemAsync('user');

      setUser(JSON.parse(userObject));
      setIsLoadingInitial(false);
      setFirebaseApp(initializeApp(firebaseConfig));
    };

    load();
  }, []);

  const handleLoginSuccess = (userObject) => {
    setUser(userObject);
    SecureStore.setItemAsync('user', JSON.stringify(userObject));
  }

  const googleLogin = (idToken) => {
    const auth = initializeAuth(firebaseApp, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
    const credential = GoogleAuthProvider.credential(idToken);
    signInWithCredential(auth, credential).then(res => {
      // TODO save to firebase
      console.log(res);
    }).catch(() => { });
  };

  const appleLogin = async () => {
    if (Platform.OS === 'android') {
      return;
    }

    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      console.log(credential);

      return;

      let appleEmail = await SecureStore.getItemAsync('appleEmail');

      if (!appleEmail) {
        appleEmail = credential.email;
        SecureStore.setItemAsync('appleEmail', credential.email);
      }

      let deviceToken = await SecureStore.getItemAsync('deviceToken');

      if (!deviceToken) {
        deviceToken = useId();
      }

      axios.post('/api/mobile/social-login/apple_mobile', {
        userId: credential.user,
        email: appleEmail,
        code: credential.authorizationCode,
        devicePlatform: Platform.OS,
        deviceToken
      })
        .then((response) => handleLoginSuccess(response.data.data, deviceToken))
        .catch(showErrorToast('Hiba történt! Kérjük, próbáld újra!'));
    } catch (e) {
      if (e.code !== 'ERR_CANCELED') {
        //showErrorToast('Hiba történt! Kérjük, próbáld újra!');
      }
    }
  };

  const logout = async () => {
    clearUser();
  };

  const clearUser = async () => {
    setUser(null);
    SecureStore.deleteItemAsync('user');
  };

  const memoedValue = useMemo(() => ({
    user,
    firebaseApp,
    googleLogin,
    appleLogin,
    handleLoginSuccess,
    logout,
    clearUser
  }), [user, firebaseApp]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  )
};

export default function useAuth() {
  return useContext(AuthContext);
};
