import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged, signOut, OAuthProvider } from 'firebase/auth/react-native';

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

  // TODO for prod build https://medium.com/nerd-for-tech/apple-google-authentication-in-expo-apps-using-firebase-997125440032

  const appleLogin = async () => {
    if (Platform.OS === 'android') {
      return;
    }

    try {
      setIsLoading(true);

      const appleCredential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      const { identityToken } = appleCredential;
      const provider = new OAuthProvider('apple.com');
      const credential = provider.credential({
        idToken: identityToken
      });

      signInWithCredential(auth, credential).catch((e) => {
        // TODO error handling with toastr  
      }).finally(() => {
        setIsLoading(false);
      });
    } catch (e) {
      if (e.code !== 'ERR_CANCELED') {
        // TODO error handling with toastr
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
