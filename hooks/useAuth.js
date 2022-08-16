import React, { createContext, useContext, useEffect, useId, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as AppleAuthentication from 'expo-apple-authentication';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged, signOut } from 'firebase/auth/react-native';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setIsLoadingInitial(false);
    }),
    []
  );

  const handleLoginSuccess = (userObject) => {
    // TODO
  }

  const googleLogin = (idToken) => {
    setIsLoading(true);
    const credential = GoogleAuthProvider.credential(idToken);

    signInWithCredential(auth, credential).catch(() => {
      // TODO error handling with toastr
    }).finally(() => {
      setIsLoading(false);
    });
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
    setIsLoading(true);

    signOut(auth).catch({
      // TODO error handling with toastr
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const memoedValue = useMemo(() => ({
    user,
    isLoading,
    googleLogin,
    appleLogin,
    logout
  }), [user, isLoading]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  )
};

export default function useAuth() {
  return useContext(AuthContext);
};
