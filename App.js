import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import StackNavigation from './navigation/StackNavigation';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
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
