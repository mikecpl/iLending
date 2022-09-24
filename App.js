import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import StackNavigation from './navigation/StackNavigation';
import { RootSiblingParent } from 'react-native-root-siblings';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';
import Loader from './components/app/Loader';

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <RootSiblingParent>
        <AuthProvider>
          <StackNavigation />
        </AuthProvider>
      </RootSiblingParent>
    </NavigationContainer>
  );
}
